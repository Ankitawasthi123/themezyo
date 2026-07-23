import { spawn, spawnSync } from 'node:child_process'
import fs from 'node:fs/promises'
import path from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'
import { templates } from '../data/templates.js'

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const root = process.cwd()
const publicRoot = path.join(root, 'public')
const registryPath = path.join(root, 'data', 'templates.js')
const tailwindCssPath = path.join(publicRoot, 'templates', '_screenshot-tailwind.css')
const port = 9444
const userDataDir = path.join(root, '.tmp-real-template-screenshots')
const viewport = { width: 1440, height: 1000, deviceScaleFactor: 1 }
const requestedTemplateIds = process.env.TEMPLATE_IDS
  ? new Set(process.env.TEMPLATE_IDS.split(',').map((id) => id.trim()).filter(Boolean))
  : null

const pagePriority = [
  'index',
  'dashboard',
  'services',
  'booking',
  'templates',
  'products',
  'courses',
  'shop',
  'properties',
  'layout',
  'builder',
  'ats-checker',
  'treatments',
  'therapists',
  'vets',
  'symptom-checker',
  'diagnosis',
  'adoption',
  'results',
  'programs',
  'donate',
  'planner',
  'vendors',
  'students',
  'attendance',
  'rfq',
  'quote',
  'calculator',
  'ai-assistant',
  'playground',
  'contact',
  'about',
]

function toFileUrl(filePath) {
  return `file:///${filePath.replace(/\\/g, '/')}`
}

async function exists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function fetchJson(url, options) {
  const response = await fetch(url, options)
  if (!response.ok) throw new Error(`${response.status} ${await response.text()}`)
  return response.json()
}

async function waitForEndpoint() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      return await fetchJson(`http://127.0.0.1:${port}/json/version`)
    } catch {
      await delay(250)
    }
  }

  throw new Error('Chrome did not expose a debugging endpoint in time.')
}

function createClient(wsUrl) {
  const socket = new WebSocket(wsUrl)
  let nextId = 1
  const pending = new Map()

  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data)
    if (!message.id) return
    const callbacks = pending.get(message.id)
    if (!callbacks) return
    pending.delete(message.id)
    if (message.error) callbacks.reject(new Error(message.error.message))
    else callbacks.resolve(message.result)
  })

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('WebSocket open timeout')), 5000)
    socket.addEventListener('open', () => {
      clearTimeout(timer)
      resolve({
        send(method, params = {}) {
          const id = nextId
          nextId += 1
          socket.send(JSON.stringify({ id, method, params }))
          return Promise.race([
            new Promise((resolveSend, rejectSend) => pending.set(id, { resolve: resolveSend, reject: rejectSend })),
            new Promise((_, rejectSend) => setTimeout(() => rejectSend(new Error(`${method} timeout`)), 60000)),
          ])
        },
        close() {
          socket.close()
        },
      })
    })
    socket.addEventListener('error', reject)
  })
}

async function buildScreenshotTailwind() {
  const result = spawnSync('cmd.exe', [
    '/c',
    'node_modules\\.bin\\tailwindcss.cmd',
    '-c',
    'scripts\\screenshot-tailwind.config.cjs',
    '-i',
    'scripts\\screenshot-tailwind-input.css',
    '-o',
    'public\\templates\\_screenshot-tailwind.css',
    '--minify',
  ], { cwd: root, encoding: 'utf8', timeout: 120000 })

  if (result.status !== 0) {
    throw new Error(`Tailwind screenshot CSS failed:\n${result.error?.message || ''}\n${result.stdout || ''}\n${result.stderr || ''}`)
  }
}

function labelFromBase(base) {
  if (base === 'index') return 'Homepage'
  return base
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

async function choosePages(template) {
  const previewPath = template.previewPath?.replace(/^\//, '')
  const previewFile = previewPath ? path.join(publicRoot, previewPath) : null
  const htmlDir = previewFile ? path.dirname(previewFile) : path.join(publicRoot, 'templates', template.id, 'html')
  const entries = await fs.readdir(htmlDir).catch(() => [])
  const htmlFiles = entries.filter((entry) => entry.endsWith('.html'))
  const byBase = new Map(htmlFiles.map((file) => [path.basename(file, '.html'), path.join(htmlDir, file)]))
  const selected = []

  if (previewFile && await exists(previewFile)) {
    selected.push({ file: previewFile, label: 'Homepage', slug: 'home', scroll: 0 })
  }

  for (const base of pagePriority) {
    const file = byBase.get(base)
    if (file && !selected.some((item) => item.file === file)) {
      selected.push({ file, label: labelFromBase(base), slug: base, scroll: 0 })
    }
    if (selected.length >= 3) break
  }

  for (const entry of htmlFiles) {
    const file = path.join(htmlDir, entry)
    if (!selected.some((item) => item.file === file)) {
      const base = path.basename(file, '.html')
      selected.push({ file, label: labelFromBase(base), slug: base, scroll: 0 })
    }
    if (selected.length >= 3) break
  }

  if (selected.length === 1) {
    selected.push({ ...selected[0], label: 'Mid page', slug: 'mid-page', scroll: 0.45 })
    selected.push({ ...selected[0], label: 'Lower page', slug: 'lower-page', scroll: 0.85 })
  }

  if (selected.length === 2) {
    selected.push({ ...selected[0], label: 'Page details', slug: 'page-details', scroll: 0.55 })
  }

  return selected.slice(0, 3)
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

async function updateTemplateRegistry(results) {
  let source = await fs.readFile(registryPath, 'utf8')

  for (const result of results) {
    const blockPattern = new RegExp(`(\\{\\r?\\n\\s+id: '${escapeRegExp(result.id)}',[\\s\\S]*?\\r?\\n\\s+\\},)(?=\\r?\\n\\s+\\{|\\r?\\n\\])`)
    source = source.replace(blockPattern, (block) => {
      const imagesText = `images: [\n${result.images.map((image) => `      '${image}',`).join('\n')}\n    ],`
      const labelsText = `imageLabels: [${result.labels.map((label) => `'${label}'`).join(', ')}],`
      let next = block
      next = next.replace(/thumbnail: '[^']+',/, `thumbnail: '${result.images[0]}',`)
      next = next.replace(/images: \[[\s\S]*?\],\r?\n\s+imageLabels:/, `${imagesText}\n    imageLabels:`)
      next = next.replace(/imageLabels: \[[\s\S]*?\],/, labelsText)
      next = next.replace(/\{ label: 'Screenshots', value: '\d+' \}/, `{ label: 'Screenshots', value: '${result.images.length}' }`)
      next = next.replace(/(?:SVG|PNG|WebP) preview screenshots?/g, 'real rendered screenshots')
      next = next.replace(/local preview image/g, 'real rendered screenshots')
      return next
    })
  }

  await fs.writeFile(registryPath, source)
}

async function capturePage(page, outputPath, client) {
  await client.send('Page.navigate', { url: toFileUrl(page.file) })
  await delay(2200)
  await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        document.querySelectorAll('script[src*="cdn.tailwindcss.com"]').forEach((script) => script.remove());
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '${toFileUrl(tailwindCssPath)}';
        document.head.appendChild(link);
        const style = document.createElement('style');
        style.textContent = 'html,body{scrollbar-width:none;}::-webkit-scrollbar{display:none!important;}img{font-size:0;}img[src^="http"]{visibility:hidden!important;color:transparent!important;}';
        document.head.appendChild(style);
      })()
    `,
  })
  await delay(1200)
  await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        document.querySelectorAll('img').forEach((image) => {
          const source = image.currentSrc || image.src || '';
          if (!/^https?:/i.test(source) && image.complete && image.naturalWidth > 1 && image.naturalHeight > 1) return;
          image.style.visibility = 'hidden';
          image.style.fontSize = '0';
          image.style.color = 'transparent';
        });
      })()
    `,
  })
  await delay(500)
  await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        document.querySelectorAll('img').forEach((image) => {
          const source = image.currentSrc || image.src || '';
          if (!/^https?:/i.test(source) && image.complete && image.naturalWidth > 1 && image.naturalHeight > 1) return;
          image.style.visibility = 'hidden';
          image.style.fontSize = '0';
          image.style.color = 'transparent';
        });
      })()
    `,
  })
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: viewport.deviceScaleFactor,
    mobile: false,
  })
  await client.send('Runtime.evaluate', {
    expression: `window.scrollTo(0, Math.max(0, (document.documentElement.scrollHeight - window.innerHeight) * ${page.scroll || 0}))`,
  })
  await delay(500)

  const screenshot = await client.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false })
  await fs.writeFile(outputPath, Buffer.from(screenshot.data, 'base64'))
}

await buildScreenshotTailwind()
await fs.rm(userDataDir, { recursive: true, force: true })
await fs.mkdir(userDataDir, { recursive: true })

const chrome = spawn(chromePath, [
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDataDir}`,
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--disable-software-rasterizer',
  '--disable-background-networking',
  '--disable-component-update',
  '--allow-file-access-from-files',
  '--no-first-run',
  'about:blank',
], { stdio: 'ignore' })

try {
  await waitForEndpoint()
  const results = []

  const templatesToCapture = requestedTemplateIds
    ? templates.filter((template) => requestedTemplateIds.has(template.id))
    : templates

  for (const template of templatesToCapture) {
    const pages = await choosePages(template)
    const screenshotsDir = path.join(publicRoot, 'templates', template.id, 'screenshots')
    await fs.mkdir(screenshotsDir, { recursive: true })
    const result = { id: template.id, images: [], labels: [] }

    for (const [index, page] of pages.entries()) {
      const created = await fetchJson(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(toFileUrl(page.file))}`, { method: 'PUT' })
      const client = await createClient(created.webSocketDebuggerUrl)
      await client.send('Page.enable')
      await client.send('Runtime.enable')

      const outputName = `real-${index + 1}-${page.slug}.png`
      const outputPath = path.join(screenshotsDir, outputName)
      await capturePage(page, outputPath, client)
      client.close()
      await fetchJson(`http://127.0.0.1:${port}/json/close/${created.id}`).catch(() => {})

      result.images.push(`/templates/${template.id}/screenshots/${outputName}`)
      result.labels.push(page.label)
      console.log(`${template.id}: ${page.label}`)
    }

    results.push(result)
  }

  await updateTemplateRegistry(results)
} finally {
  chrome.kill()
  await delay(1500)
  await fs.rm(userDataDir, { recursive: true, force: true }).catch(() => {})
}
