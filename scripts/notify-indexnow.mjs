import { readFile } from 'node:fs/promises'
import { templates } from '../data/templates.js'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com').replace(/\/$/, '')

async function main() {
  let key
  try {
    key = (await readFile(new URL('../public/indexnow-key.txt', import.meta.url), 'utf8')).trim()
  } catch (error) {
    throw new Error(`Could not read public/indexnow-key.txt: ${error.message}`)
  }

  if (!/^[a-zA-Z0-9]{32,}$/u.test(key)) {
    throw new Error('Invalid IndexNow key: public/indexnow-key.txt must contain at least 32 alphanumeric characters.')
  }

  const baseUrls = ['/', '/templates', '/categories', '/about', '/contact', '/help', '/privacy', '/terms', '/llms.txt']
  const urlList = [...baseUrls, ...templates.map((template) => `/templates/${template.id}`)]
    .map((path) => new URL(path, `${siteUrl}/`).href)

  let response
  try {
    response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: new URL(siteUrl).host,
        key,
        keyLocation: `${siteUrl}/indexnow-key.txt`,
        urlList,
      }),
    })
  } catch (error) {
    throw new Error(`IndexNow request failed: ${error.message}`)
  }

  if (!response.ok) {
    const responseText = await response.text()
    throw new Error(`IndexNow returned ${response.status} ${response.statusText}: ${responseText || '(empty response)'}`)
  }

  console.log(`IndexNow accepted ${urlList.length} Themezyo URLs (${response.status}).`)
}

main().catch((error) => {
  console.error(`IndexNow notification failed: ${error.message}`)
  process.exitCode = 1
})
