import { cpSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const standaloneDir = join(root, '.next', 'standalone')

if (existsSync(standaloneDir)) {
  const publicDir = join(root, 'public')
  const staticDir = join(root, '.next', 'static')

  if (existsSync(publicDir)) {
    cpSync(publicDir, join(standaloneDir, 'public'), { recursive: true })
  }

  if (existsSync(staticDir)) {
    cpSync(staticDir, join(standaloneDir, '.next', 'static'), { recursive: true })
  }
}
