import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // Mail to user
    await sendgrid.send({
      to: `${req.body.email}`, // Your email where you'll receive emails
      from: "hello@jourideligt.dev", // your website email address here
      subject: `Thanks for contacting Jouri de Ligt`,
      html: `<div><p>Dear ${req.body.name},<br />
      Thanks for reaching out to me!<br />
      I will try to contact you asap!<br /><br />
      For now, have a great day!<br/><br/>
      Kind regards,<br/>
      Jouri de Ligt | Front-end developer
      </div>`,
    });
    // Mail to growgo
    await sendgrid.send({
      to: "hello@jourideligt.dev", // Your email where you'll receive emails
      from: "hello@jourideligt.dev", // your website email address here
      subject: `Nieuw contactaanvraag door: ${req.body.name}`,
      html: `<div><h1>Er is een nieuwe contactaanvraag,</h1><br />
      <p><strong>Naam</strong>: ${req.body.name}<br />
      <strong>E-mail</strong>: ${req.body.email}<br />
      <strong>Bericht</strong>: ${req.body.message}<br /></p>
      </div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ succes: true, error: "" });
}

export default sendEmail;
