import { readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, extname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const skippedDirectories = new Set(['.git', '.next', 'node_modules'])
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp'])

async function findImages(directory, images = []) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && skippedDirectories.has(entry.name)) continue

    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      await findImages(path, images)
    } else if (supportedExtensions.has(extname(entry.name).toLowerCase())) {
      images.push(path)
    }
  }

  return images
}

async function optimizeImage(path) {
  const extension = extname(path).toLowerCase()
  const input = await readFile(path)
  const metadata = await sharp(input).metadata()

  if (
    (extension === '.png' && metadata.isPalette) ||
    ((extension === '.jpg' || extension === '.jpeg') && metadata.isProgressive)
  ) {
    return { before: input.length, after: input.length, changed: false }
  }

  let pipeline = sharp(input, { animated: true }).rotate()

  if (extension === '.png') {
    pipeline = pipeline.png({
      compressionLevel: 9,
      effort: 10,
      palette: true,
      quality: 88,
      colours: 256,
      dither: 0.8,
    })
  } else if (extension === '.jpg' || extension === '.jpeg') {
    pipeline = pipeline.jpeg({
      quality: 82,
      chromaSubsampling: '4:2:0',
      mozjpeg: true,
    })
  } else {
    pipeline = pipeline.webp({
      effort: 6,
      lossless: true,
    })
  }

  const output = await pipeline.toBuffer()
  if (output.length >= input.length) {
    return { before: input.length, after: input.length, changed: false }
  }

  await writeFile(path, output)

  return { before: input.length, after: output.length, changed: true }
}

const images = await findImages(root)
let before = 0
let after = 0
let changed = 0

for (const path of images) {
  const result = await optimizeImage(path)
  before += result.before
  after += result.after
  if (result.changed) changed += 1

  const saved = result.before - result.after
  if (saved > 0) {
    console.log(
      `${relative(root, path)}: saved ${(saved / 1024).toFixed(1)} KB`,
    )
  }
}

console.log(
  `Optimized ${changed}/${images.length} images: ` +
    `${(before / 1024 / 1024).toFixed(2)} MB -> ` +
    `${(after / 1024 / 1024).toFixed(2)} MB`,
)
