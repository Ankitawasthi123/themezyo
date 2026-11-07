import fs from 'node:fs'
import path from 'node:path'
import { templates } from '../data/templates.js'

const ids = ['learn-for-all', 'health-reach', 'green-earth', 'paws-for-life', 'community-hope']
const errors = []
let pageCount = 0

for (const id of ids) {
  const htmlDir = path.join('public', 'templates', id, 'html')
  const pages = fs.readdirSync(htmlDir).filter((file) => file.endsWith('.html'))
  pageCount += pages.length

  for (const file of pages) {
    const html = fs.readFileSync(path.join(htmlDir, file), 'utf8')
    for (const match of html.matchAll(/href="([^"#]+\.html)"/g)) {
      if (!fs.existsSync(path.join(htmlDir, match[1]))) {
        errors.push(`${id}/${file} -> ${match[1]}`)
      }
    }
  }

  for (const required of ['app.css', 'app.js', 'assets']) {
    if (!fs.existsSync(path.join(htmlDir, required))) errors.push(`${id}: missing ${required}`)
  }

  const registryItem = templates.find((template) => template.id === id)
  if (!registryItem) errors.push(`${id}: missing catalog entry`)
  if (!fs.existsSync(path.join('public', 'templates', `${id}.zip`))) errors.push(`${id}: missing zip package`)
  for (const image of registryItem?.images || []) {
    if (!fs.existsSync(path.join('public', image.replace(/^\/+/, '')))) errors.push(`${id}: missing ${image}`)
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`Validated ${ids.length} catalog entries, ${pageCount} HTML pages, internal links, screenshots, assets, and zip packages.`)
