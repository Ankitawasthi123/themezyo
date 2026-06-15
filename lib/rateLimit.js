const attempts = new Map()

function getClientAddress(request) {
  const forwardedFor = request.headers.get('x-forwarded-for')

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  return request.headers.get('x-real-ip') || 'unknown'
}

export function checkRateLimit(request, scope, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now()
  const key = `${scope}:${getClientAddress(request)}`
  const recentAttempts = (attempts.get(key) || []).filter((timestamp) => now - timestamp < windowMs)

  if (recentAttempts.length >= limit) {
    attempts.set(key, recentAttempts)
    return false
  }

  recentAttempts.push(now)
  attempts.set(key, recentAttempts)
  return true
}
