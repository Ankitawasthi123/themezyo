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

export async function POST(request) {
  if (!checkRateLimit(request, 'contact')) {
    return NextResponse.json(
      { message: 'Too many messages. Please try again later.' },
      { status: 429 }
    )
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const tableName = process.env.SUPABASE_CONTACT_TABLE || 'contact_messages'

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return NextResponse.json(
      { message: 'Supabase environment variables are missing.' },
      { status: 500 }
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

  const response = await fetch(`${supabaseUrl}/rest/v1/${tableName}`, {
    method: 'POST',
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(normalizedPayload),
  })

  if (!response.ok) {
    console.error('Contact form storage failed:', response.status, await response.text())

    return NextResponse.json(
      { message: 'Unable to send message.' },
      { status: 502 }
    )
  }

  const message = await response.json()
  const savedMessage = message[0]

  try {
    await sendApiNotification({
      subject: 'New contact form message',
      title: 'Contact form message',
      fields: {
        Name: savedMessage.name,
        Email: savedMessage.email,
        Subject: savedMessage.subject,
        Message: savedMessage.message,
      },
    })
  } catch (error) {
    console.error('Contact notification failed:', error)
  }

  return NextResponse.json({ message: savedMessage }, { status: 201 })
}
