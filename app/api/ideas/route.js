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

export async function POST(request) {
  if (!checkRateLimit(request, 'template-request')) {
    return NextResponse.json(
      { message: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const tableName = process.env.SUPABASE_IDEAS_TABLE || 'template_ideas'

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
    console.error('Template request storage failed:', response.status, await response.text())

    return NextResponse.json(
      { message: 'Unable to save request.' },
      { status: 502 }
    )
  }

  const savedIdea = await response.json()
  const idea = savedIdea[0]

  try {
    await sendApiNotification({
      subject: 'New template idea submitted',
      title: 'New template idea',
      fields: {
        Name: idea.name,
        Email: idea.email,
        'Idea title': idea.idea_title,
        Category: idea.category,
        Details: idea.details,
      },
    })
  } catch (error) {
    console.error('Idea notification failed:', error)
  }

  return NextResponse.json({ idea }, { status: 201 })
}
