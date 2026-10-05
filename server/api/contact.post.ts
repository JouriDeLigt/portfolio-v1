// Layers of protection, cheapest first:
// 1. Origin check and maximum body size
// 2. Honeypot: a hidden field only bots fill in
// 3. Validation
// 4. Cloudflare Turnstile token, verified with Cloudflare
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_BODY_BYTES = 20_000

interface ContactBody {
  name?: unknown
  email?: unknown
  message?: unknown
  reason?: unknown
  turnstileToken?: unknown
}

function field(value: unknown, maxLength: number) {
  const text = typeof value === 'string' ? value.trim() : ''
  return text.length <= maxLength ? text : ''
}

export default defineEventHandler(async (event) => {
  // Browsers always send Origin on a fetch POST; reject posts from other sites
  const origin = getRequestHeader(event, 'origin')
  if (!origin || URL.parse(origin)?.host !== getRequestHost(event, { xForwardedHost: true })) {
    throw createError({ status: 403, statusText: 'Forbidden' })
  }

  if (Number(getRequestHeader(event, 'content-length') ?? 0) > MAX_BODY_BYTES) {
    throw createError({ status: 413, statusText: 'Payload too large' })
  }

  const body = await readBody<ContactBody | null>(event)

  // Pretend it worked, so the bot learns nothing
  if (body?.reason) return { success: true }

  // Single line, since it also goes into the subject
  const name = field(body?.name, 100).replace(/\s+/g, ' ')
  const email = field(body?.email, 254)
  const message = field(body?.message, 5000)
  const turnstileToken = field(body?.turnstileToken, 2048)

  if (!name || !message || !EMAIL_PATTERN.test(email) || !turnstileToken) {
    throw createError({ status: 400, statusText: 'Invalid contact form data' })
  }

  if (!isMailConfigured()) {
    throw createError({ status: 500, statusText: 'Brevo is not configured' })
  }

  const turnstile = await verifyTurnstileToken(turnstileToken, event)
  if (!turnstile.success) {
    throw createError({ status: 403, statusText: 'Spam check failed' })
  }

  const data = { name, email, message }

  // The notification is what matters: if it fails, the visitor has to try again
  try {
    await sendContactNotification(data)
  }
  catch (error) {
    console.error('[contact] Sending the notification failed', error)
    throw createError({ status: 502, statusText: 'Could not send email' })
  }

  // The confirmation is a courtesy: the message already arrived, so only log a failure
  try {
    await sendContactConfirmation(data)
  }
  catch (error) {
    console.error('[contact] Sending the confirmation failed', error)
  }

  return { success: true }
})
