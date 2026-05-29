import { NextResponse } from 'next/server'
import { sendApiNotification } from '../../../lib/emailNotifications'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request) {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const tableName = process.env.SUPABASE_NEWSLETTER_TABLE || 'newsletter_subscribers'

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

  const email = String(payload.email || '').trim().toLowerCase()

  if (!email) {
    return NextResponse.json({ message: 'Email is required.' }, { status: 422 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 422 })
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/${tableName}`, {
    method: 'POST',
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify({
      email,
      source: 'homepage_newsletter',
      status: 'subscribed',
    }),
  })

  if (!response.ok) {
    const details = await response.text()

    return NextResponse.json(
      { message: 'Unable to subscribe.', details },
      { status: 502 }
    )
  }

  const subscriber = await response.json()
  const savedSubscriber = subscriber[0]

  try {
    await sendApiNotification({
      subject: 'New newsletter subscriber',
      title: 'Newsletter subscription',
      fields: {
        Email: savedSubscriber.email,
        Source: savedSubscriber.source,
        Status: savedSubscriber.status,
      },
    })
  } catch (error) {
    console.error('Newsletter notification failed:', error)
  }

  return NextResponse.json({ subscriber: savedSubscriber }, { status: 201 })
}
