import nodemailer from 'nodemailer'

const defaultNotificationEmail = process.env.NOTIFICATION_EMAIL || 'support@themezyo.com'

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function buildEmailPayload({ subject, title, fields }) {
  const rows = Object.entries(fields || {})
    .map(([label, value]) => (
      `<tr><td style="padding:8px 12px;font-weight:700;color:#334155;">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#475569;">${escapeHtml(value)}</td></tr>`
    ))
    .join('')

  return {
    subject,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a;">
        <h2 style="margin:0 0 16px;">${escapeHtml(title)}</h2>
        <table style="border-collapse:collapse;border:1px solid #e2e8f0;">${rows}</table>
      </div>
    `,
  }
}

export async function sendApiNotification({ subject, title, fields }) {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const resendApiKey = process.env.RESEND_API_KEY
  const to = process.env.NOTIFICATION_EMAIL || defaultNotificationEmail
  const from = process.env.SMTP_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || smtpUser || 'Themezyo <onboarding@resend.dev>'
  const emailPayload = buildEmailPayload({ subject, title, fields })

  try {
    if (smtpUser && smtpPass) {
      const normalizedUser = String(smtpUser).trim().toLowerCase()
      const normalizedPass = String(smtpPass).trim()

      if (
        normalizedUser.includes('your-') ||
        normalizedUser.includes('example') ||
        normalizedPass.includes('your-') ||
        normalizedPass.includes('your-hostinger-email-password')
      ) {
        return {
          skipped: true,
          reason: 'SMTP credentials are not configured yet.',
        }
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.hostinger.com',
        port: Number(process.env.SMTP_PORT || 465),
        secure: String(process.env.SMTP_SECURE || 'true') === 'true',
        auth: {
          user: normalizedUser,
          pass: normalizedPass,
        },
      })

      await transporter.sendMail({
        from,
        to,
        ...emailPayload,
      })

      return { skipped: false, sent: true, provider: 'smtp' }
    }

    if (!resendApiKey) {
      return {
        skipped: true,
        reason: 'No email provider is configured.',
      }
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        ...emailPayload,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      return {
        skipped: true,
        reason: `Resend email failed: ${errorBody || response.statusText}`,
      }
    }

    return { skipped: false, sent: true, provider: 'resend' }
  } catch (error) {
    console.error('Email delivery failed:', error)
    return {
      skipped: true,
      reason: 'Email delivery failed.',
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
