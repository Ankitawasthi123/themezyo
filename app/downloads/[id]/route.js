import { readFile } from 'fs/promises'
import path from 'path'
import { getTemplateById } from '../../../data/templates'
import { sendApiNotification } from '../../../lib/emailNotifications'

function createTemplateFile(template) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${template.title}</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        color: #111827;
        background: #f9fafb;
      }
      .hero {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 48px;
        background: linear-gradient(135deg, ${template.color}dd, ${template.color}66);
      }
      .panel {
        max-width: 760px;
        border-radius: 16px;
        padding: 48px;
        background: white;
        box-shadow: 0 24px 80px rgba(15, 23, 42, 0.18);
      }
      .tag {
        display: inline-block;
        padding: 8px 12px;
        border-radius: 999px;
        background: #eef2ff;
        color: #4f46e5;
        font-weight: 700;
        font-size: 14px;
      }
      h1 {
        margin: 24px 0 16px;
        font-size: clamp(40px, 8vw, 72px);
        line-height: 0.95;
      }
      p {
        color: #4b5563;
        font-size: 18px;
        line-height: 1.7;
      }
      a {
        display: inline-block;
        margin-top: 24px;
        border-radius: 10px;
        padding: 14px 18px;
        background: #111827;
        color: white;
        text-decoration: none;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <main class="hero">
      <section class="panel">
        <span class="tag">${template.category}</span>
        <h1>${template.title}</h1>
        <p>${template.description}</p>
        <p><strong>Customize this starter:</strong> update the content, colors, imagery, and layout for your project.</p>
      </section>
    </main>
  </body>
</html>
`
}

export async function GET(request, { params }) {
  const { id } = await params
  const template = getTemplateById(id)

  if (!template) {
    return new Response('Template not found', { status: 404 })
  }

  const fallbackFileName = `${template.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.html`
  const zipPath = template.zipPath ? path.join(process.cwd(), 'public', template.zipPath.replace(/^\/+/, '')) : null
  const zipFileName = template.zipPath ? path.basename(template.zipPath) : null
  const fileName = zipFileName || fallbackFileName
  try {
    await sendApiNotification({
      subject: `${template.title} template downloaded`,
      title: 'Template downloaded',
      fields: {
        Template: template.title,
        'Template ID': template.id,
        Category: template.category,
        Format: template.format || 'HTML',
        Price: template.price,
        'Download file': fileName,
        'Downloaded at': new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('Download notification failed:', error)
  }

  if (zipPath) {
    try {
      const publicPath = path.join(process.cwd(), 'public')
      const resolvedZipPath = path.resolve(zipPath)

      if (!resolvedZipPath.startsWith(path.resolve(publicPath))) {
        throw new Error('Invalid download path')
      }

      const zipFile = await readFile(resolvedZipPath)

      return new Response(zipFile, {
        headers: {
          'Content-Type': 'application/zip',
          'Content-Disposition': `attachment; filename="${fileName}"`,
        },
      })
    } catch (error) {
      console.error('Template zip download failed:', error)
    }
  }

  return new Response(createTemplateFile(template), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': `attachment; filename="${fallbackFileName}"`,
    },
  })
}
