import { NextResponse } from 'next/server'
import { sendApiNotification } from '../../../lib/emailNotifications'
import { checkRateLimit } from '../../../lib/rateLimit'

const requiredFields = ['name', 'email', 'ideaTitle', 'category', 'details']

function validateIdeaPayload(payload) {
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

  if (payload.details && payload.details.trim().length < 20) {
    errors.details = 'Please add at least 20 characters'
  }

  return errors
}

export function GET() {
  return NextResponse.json(
    { message: 'Template ideas must be submitted with a POST request.' },
    { status: 405, headers: { Allow: 'POST' } }
  )
}

export async function POST(request) {
  if (!checkRateLimit(request, 'template-request')) {
    return NextResponse.json(
      { message: 'Too many requests. Please try again later.' },
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
    idea_title: String(payload.ideaTitle || '').trim(),
    category: String(payload.category || '').trim(),
    details: String(payload.details || '').trim(),
    status: 'new',
  }

  const validationErrors = validateIdeaPayload({
    ...payload,
    ideaTitle: normalizedPayload.idea_title,
  })

  if (Object.keys(validationErrors).length) {
    return NextResponse.json(
      { message: 'Please check the form fields.', errors: validationErrors },
      { status: 422 }
    )
  }

  try {
    await sendApiNotification({
      subject: 'New template idea submitted',
      title: 'New template idea',
      fields: {
        Name: normalizedPayload.name,
        Email: normalizedPayload.email,
        'Idea title': normalizedPayload.idea_title,
        Category: normalizedPayload.category,
        Details: normalizedPayload.details,
      },
    })
  } catch (error) {
    console.error('Idea notification failed:', error)

    return NextResponse.json(
      { message: 'Unable to send template request email.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ idea: normalizedPayload }, { status: 201 })
}
