import { NextResponse } from 'next/server'
import { sendApiNotification } from '../../../lib/emailNotifications'
import { checkRateLimit } from '../../../lib/rateLimit'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function GET() {
  return NextResponse.json(
    { message: 'Newsletter subscriptions must be submitted with a POST request.' },
    { status: 405, headers: { Allow: 'POST' } }
  )
}

export async function POST(request) {
  if (!checkRateLimit(request, 'newsletter', 10)) {
    return NextResponse.json(
      { message: 'Too many subscription attempts. Please try again later.' },
      { status: 429 }
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

  try {
    const notificationResult = await sendApiNotification({
      subject: 'New newsletter subscriber',
      title: 'Newsletter subscription',
      fields: {
        Email: email,
        Source: 'homepage_newsletter',
        Status: 'subscribed',
      },
    })

    if (notificationResult?.skipped) {
      console.warn('Newsletter notification skipped:', notificationResult.reason)

      return NextResponse.json(
        { message: notificationResult.reason || 'Newsletter email notification was not sent.' },
        { status: 502 }
      )
    }
  } catch (error) {
    console.error('Newsletter notification failed:', error)
  }

  return NextResponse.json(
    {
      subscriber: {
        email,
        source: 'homepage_newsletter',
        status: 'subscribed',
      },
    },
    { status: 201 }
  )
}
