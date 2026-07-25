export async function readJsonResponse(response) {
  const contentType = response.headers.get('content-type') || ''
  const text = await response.text()

  if (!text) {
    return {}
  }

  if (contentType.includes('text/html')) {
    return { message: `Request failed with ${response.status}. Please check that the API route is deployed.` }
  }

  try {
    return JSON.parse(text)
  } catch {
    return { message: text }
  }
}
