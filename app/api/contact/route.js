import { NextResponse } from 'next/server'
import { sendApiNotification } from '../../../lib/emailNotifications'
import { checkRateLimit } from '../../../lib/rateLimit'

const requiredFields = ['name', 'email', 'subject', 'message']

function validateContactPayload(payload) {
  const errors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  requiredFields.forEach((field) => {
    if (!String(payload[field] || '').trim()) {
      errors[field] = 'Required'
    }
  })

  if (payload.email && !emailPattern.test(payload.email)) {
    errors.email = 'Invalid email'
  }

  if (payload.message && payload.message.trim().length < 10) {
    errors.message = 'Please add at least 10 characters'
  }

  return errors
}

export function GET() {
  return NextResponse.json(
    { message: 'Contact messages must be submitted with a POST request.' },
    { status: 405, headers: { Allow: 'POST' } }
  )
}

export async function POST(request) {
  if (!checkRateLimit(request, 'contact')) {
    return NextResponse.json(
      { message: 'Too many messages. Please try again later.' },
      { status: 429 }
    )
  }

  let payload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body.' }, { status: 400 })
  }

  const normalizedPayload = {
    name: String(payload.name || '').trim(),
    email: String(payload.email || '').trim().toLowerCase(),
    subject: String(payload.subject || '').trim(),
    message: String(payload.message || '').trim(),
    status: 'new',
  }

  const validationErrors = validateContactPayload(normalizedPayload)

  if (Object.keys(validationErrors).length) {
    return NextResponse.json(
      { message: 'Please check the form fields.', errors: validationErrors },
      { status: 422 }
    )
  }

  try {
    const notificationResult = await sendApiNotification({
      subject: 'New contact form message',
      title: 'Contact form message',
      fields: {
        Name: normalizedPayload.name,
        Email: normalizedPayload.email,
        Subject: normalizedPayload.subject,
        Message: normalizedPayload.message,
      },
    })

    if (notificationResult?.skipped) {
      console.warn('Contact notification skipped:', notificationResult.reason)
    }
  } catch (error) {
    console.error('Contact notification failed:', error)
  }

  return NextResponse.json({ message: normalizedPayload }, { status: 201 })
}
