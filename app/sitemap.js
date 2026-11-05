import { templates } from '../data/templates'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'
const staticLastModified = new Date(process.env.SITE_LAST_MODIFIED || '2026-11-05T00:00:00.000Z')

function parseTemplateUpdatedDate(updated) {
  const parsedDate = new Date(`1 ${updated || ''} UTC`)

  return Number.isNaN(parsedDate.getTime()) ? staticLastModified : parsedDate
}

export default function sitemap() {
  const staticRoutes = ['', '/services', '/templates', '/categories', '/about', '/contact', '/help', '/privacy', '/terms', '/llms.txt']

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: staticLastModified,
      changeFrequency: ['', '/services', '/templates'].includes(route) ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : route === '/services' ? 0.95 : route === '/templates' ? 0.9 : 0.7,
    })),
    ...templates.map((template) => ({
      url: `${siteUrl}/templates/${template.id}`,
      lastModified: parseTemplateUpdatedDate(template.updated),
      changeFrequency: 'weekly',
      priority: 0.85,
      images: template.thumbnail ? [`${siteUrl}${template.thumbnail}`] : undefined,
    })),
  ]
}
