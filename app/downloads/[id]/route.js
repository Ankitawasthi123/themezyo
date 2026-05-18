import { getTemplateById } from '../../../data/templates'

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
        <p><strong>Use this as an AI idea pack:</strong> expand the prompts, test the angles, and adapt the next steps for your market.</p>
        <a href="#">Start editing</a>
      </section>
    </main>
  </body>
</html>
`
}

export async function GET(_request, { params }) {
  const { id } = await params
  const template = getTemplateById(id)

  if (!template) {
    return new Response('Idea not found', { status: 404 })
  }

  const fileName = `${template.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.html`

  return new Response(createTemplateFile(template), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': `attachment; filename="${fileName}"`,
    },
  })
}
