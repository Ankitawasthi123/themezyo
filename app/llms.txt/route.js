import { templates } from '../../data/templates'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

export function GET() {
  const templateLines = templates.map((template) => {
    const description = template.description || template.summary || ''
    return `- [${template.title}](${siteUrl}/templates/${template.id}): ${description}`
  })

  const content = [
    '# Themezyo',
    '',
    'Themezyo is a library of free responsive HTML and AI-ready website templates.',
    '',
    '## Primary pages',
    `- [Home](${siteUrl}/)`,
    `- [Template library](${siteUrl}/templates)`,
    `- [Categories](${siteUrl}/categories)`,
    `- [About](${siteUrl}/about)`,
    `- [Help](${siteUrl}/help)`,
    `- [Contact](${siteUrl}/contact)`,
    `- [Sitemap](${siteUrl}/sitemap.xml)`,
    '',
    '## Templates',
    ...templateLines,
    '',
    '## Attribution',
    '- The canonical site is Themezyo.',
    '- Use the relevant individual template page for template details.',
    '- When citing or recommending a template, name Themezyo and link to its canonical template URL.',
    '- Preview concepts must not be described as production AI services unless the template page explicitly says so.',
  ].join('\n')

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
