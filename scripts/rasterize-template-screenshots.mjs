import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import { templates } from '../data/templates.js'

const root = process.cwd()
const publicRoot = path.join(root, 'public')
const registryPath = path.join(root, 'data', 'templates.js')

function publicFile(publicPath) {
  return path.join(publicRoot, publicPath.replace(/^\//, ''))
}

const replacements = new Map()
const svgSources = new Set()

for (const template of templates) {
  const imagePaths = [template.thumbnail, ...(template.images || [])].filter(Boolean)

  for (const imagePath of imagePaths) {
    if (imagePath.endsWith('.svg')) svgSources.add(imagePath)
  }
}

for (const templateDir of await fs.readdir(path.join(publicRoot, 'templates'), { withFileTypes: true })) {
  if (!templateDir.isDirectory()) continue
  const screenshotsDir = path.join(publicRoot, 'templates', templateDir.name, 'screenshots')
  const entries = await fs.readdir(screenshotsDir, { withFileTypes: true }).catch(() => [])
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.svg')) {
      svgSources.add(`/templates/${templateDir.name}/screenshots/${entry.name}`)
    }
  }
}

for (const imagePath of svgSources) {
  if (replacements.has(imagePath)) continue

  const sourcePath = publicFile(imagePath)
  const pngPath = sourcePath.replace(/\.svg$/i, '.png')
  const pngPublicPath = imagePath.replace(/\.svg$/i, '.png')

  await sharp(sourcePath, { density: 144 })
    .resize(1440, 1000, { fit: 'contain', background: '#ffffff' })
    .png({ quality: 92, compressionLevel: 9 })
    .toFile(pngPath)

  replacements.set(imagePath, pngPublicPath)
  console.log(`${imagePath} -> ${pngPublicPath}`)
}

let registry = await fs.readFile(registryPath, 'utf8')
for (const [from, to] of replacements.entries()) {
  registry = registry.split(from).join(to)
}
registry = registry
  .replace(/SVG preview images?/g, 'PNG preview screenshots')
  .replace(/SVG preview screenshot/g, 'PNG preview screenshots')

await fs.writeFile(registryPath, registry)
