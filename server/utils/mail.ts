// Contact form mail via Brevo's transactional API: POST /v3/smtp/email with an `api-key` header,
// answered with 201 and a messageId. Two emails per submission:
//   1. sendContactNotification: to my own inbox, reply-to set to the visitor
//   2. sendContactConfirmation: to the visitor, reply-to set to my own inbox

export interface ContactMessage {
  name: string
  email: string
  message: string
}

interface Mail {
  to: string
  replyTo: string
  subject: string
  html: string
  text: string
}

export function isMailConfigured() {
  return Boolean(useRuntimeConfig().brevo.apiKey)
}

async function sendMail(mail: Mail) {
  const { brevo, contact } = useRuntimeConfig()
  // Brevo's sandbox: the request is validated, but nothing is sent
  const sandbox = brevo.sandbox ? { 'X-Sib-Sandbox': 'drop' } : undefined

  try {
    await $fetch(`${brevo.url.replace(/\/$/, '')}/smtp/email`, {
      method: 'POST',
      headers: { 'api-key': brevo.apiKey, 'accept': 'application/json', ...sandbox },
      body: {
        sender: { email: contact.fromEmail, name: 'Jouri de Ligt' },
        to: [{ email: mail.to }],
        replyTo: { email: mail.replyTo },
        subject: mail.subject,
        htmlContent: mail.html,
        textContent: mail.text,
        ...(sandbox && { headers: sandbox }),
      },
      timeout: 10_000,
    })
  }
  catch (error) {
    // Brevo explains a rejection as { code, message }
    const reason = (error as { data?: { message?: string } }).data?.message ?? String(error)
    throw new Error(`Brevo rejected the mail: ${reason}`, { cause: error })
  }
}

function escapeHtml(text: string) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll('\'', '&#39;')
}

export function sendContactNotification(data: ContactMessage) {
  const { contact } = useRuntimeConfig()

  return sendMail({
    to: contact.toEmail,
    replyTo: data.email,
    subject: `Nieuw contactaanvraag door: ${data.name}`,
    text: `Er is een nieuwe contactaanvraag via jourideligt.dev

Naam: ${data.name}
E-mail: ${data.email}

Bericht:
${data.message}
`,
    html: `<div><h1>Er is een nieuwe contactaanvraag,</h1><br />
      <p><strong>Naam</strong>: ${escapeHtml(data.name)}<br />
      <strong>E-mail</strong>: ${escapeHtml(data.email)}<br />
      <strong>Bericht</strong>: ${escapeHtml(data.message).replaceAll('\n', '<br />')}<br /></p>
      </div>`,
  })
}

export function sendContactConfirmation(data: ContactMessage) {
  const { contact } = useRuntimeConfig()

  return sendMail({
    to: data.email,
    // A reply reaches me directly instead of the shared sender inbox
    replyTo: contact.toEmail,
    subject: 'Thanks for contacting Jouri de Ligt',
    text: `Dear ${data.name},

Thanks for reaching out to me!
I will try to contact you asap!

For now, have a great day!

Kind regards,
Jouri de Ligt | Front-end developer
`,
    html: `<div><p>Dear ${escapeHtml(data.name)},<br />
      Thanks for reaching out to me!<br />
      I will try to contact you asap!<br /><br />
      For now, have a great day!<br/><br/>
      Kind regards,<br/>
      Jouri de Ligt | Front-end developer
      </div>`,
  })
}
