const FROM = 'hello@jourideligt.dev'
const INBOX = 'j.deligt@hoort.dev'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ContactBody {
  name?: unknown
  email?: unknown
  message?: unknown
  reason?: unknown
}

interface Mail {
  to: string
  subject: string
  html: string
  replyTo?: string
}

function field(value: unknown, maxLength: number) {
  const text = typeof value === 'string' ? value.trim() : ''
  return text.length <= maxLength ? text : ''
}

function escapeHtml(text: string) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll('\'', '&#39;')
}

function sendMail(apiKey: string, mail: Mail) {
  return $fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}` },
    body: {
      personalizations: [{ to: [{ email: mail.to }] }],
      from: { email: FROM },
      reply_to: mail.replyTo ? { email: mail.replyTo } : undefined,
      subject: mail.subject,
      content: [{ type: 'text/html', value: mail.html }],
    },
  })
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody | null>(event)

  // Honeypot: the "reason" field is hidden from people, so only bots fill it in
  if (body?.reason) return { success: true }

  // Single line, since it also goes into the subject
  const name = field(body?.name, 100).replace(/\s+/g, ' ')
  const email = field(body?.email, 254)
  const message = field(body?.message, 5000)

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    throw createError({ status: 400, statusText: 'Invalid contact form data' })
  }

  // Same variable name as the old Next.js site, so the Vercel env needs no change
  const apiKey = process.env.SENDGRID_API_KEY
  if (!apiKey) {
    throw createError({ status: 500, statusText: 'SENDGRID_API_KEY is not set' })
  }

  const safeName = escapeHtml(name)

  try {
    await sendMail(apiKey, {
      to: INBOX,
      replyTo: email,
      subject: `Nieuw contactaanvraag door: ${name}`,
      html: `<div><h1>Er is een nieuwe contactaanvraag,</h1><br />
      <p><strong>Naam</strong>: ${safeName}<br />
      <strong>E-mail</strong>: ${escapeHtml(email)}<br />
      <strong>Bericht</strong>: ${escapeHtml(message).replaceAll('\n', '<br />')}<br /></p>
      </div>`,
    })

    await sendMail(apiKey, {
      to: email,
      subject: 'Thanks for contacting Jouri de Ligt',
      html: `<div><p>Dear ${safeName},<br />
      Thanks for reaching out to me!<br />
      I will try to contact you asap!<br /><br />
      For now, have a great day!<br/><br/>
      Kind regards,<br/>
      Jouri de Ligt | Front-end developer
      </div>`,
    })
  }
  catch (error) {
    console.error('Sending contact form mail failed', error)
    throw createError({ status: 502, statusText: 'Could not send email' })
  }

  return { success: true }
})
