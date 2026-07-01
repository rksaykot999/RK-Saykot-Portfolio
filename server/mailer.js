import nodemailer from 'nodemailer';

// Sends a notification email when the contact form is submitted.
// Configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_TO in your .env file.
// Until configured, contact messages are still saved to the database — only the email step is skipped.

export async function sendContactEmail(entry) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP is not configured yet. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and CONTACT_TO in .env.');
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO || process.env.SMTP_USER,
    replyTo: entry.email,
    subject: `New inquiry: ${entry.subject}`,
    text: `From: ${entry.firstName} ${entry.lastName} <${entry.email}>\n\n${entry.message}`,
    html: `
      <p><strong>From:</strong> ${entry.firstName} ${entry.lastName} (${entry.email})</p>
      <p><strong>Subject:</strong> ${entry.subject}</p>
      <p>${entry.message.replace(/\n/g, '<br>')}</p>
    `
  });
}
