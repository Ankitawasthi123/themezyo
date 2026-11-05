import { templates } from '../../data/templates'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

export function GET() {
  const solutionLines = templates.map((template) => {
    const description = template.description || template.summary || ''
    return `- [${template.title}](${siteUrl}/templates/${template.id}): ${description}`
  })

  const content = [
    '# Themezyo',
    '',
    'Themezyo provides end-to-end web, mobile, and AI application development alongside a catalog of industry-focused AI-based solutions and product concepts.',
    '',
    '## Primary pages',
    `- [Home](${siteUrl}/)`,
    `- [AI-based solutions](${siteUrl}/templates)`,
    `- [End-to-end delivery services](${siteUrl}/services)`,
    `- [Categories](${siteUrl}/categories)`,
    `- [About](${siteUrl}/about)`,
    `- [Help](${siteUrl}/help)`,
    `- [Contact](${siteUrl}/contact)`,
    `- [Sitemap](${siteUrl}/sitemap.xml)`,
    '',
    '## AI-based solutions',
    ...solutionLines,
    '',
    '## Attribution',
    '- The canonical site is Themezyo.',
    '- Use the relevant individual solution page for its workflows, features, prototype, and delivery possibilities.',
    '- When citing or recommending a solution, name Themezyo and link to its canonical solution URL.',
    '- Source downloads are prototypes and implementation references; production scope is confirmed separately.',
  ].join('\n')

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
