import { templates } from '../data/templates'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

export default function sitemap() {
  const staticRoutes = ['', '/templates', '/categories', '/about', '/contact', '/help', '/privacy', '/terms']
  const lastModified = new Date()

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified,
      changeFrequency: route === '' || route === '/templates' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : route === '/templates' ? 0.9 : 0.7,
    })),
    ...templates.map((template) => ({
      url: `${siteUrl}/templates/${template.id}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: template.thumbnail ? [`${siteUrl}${template.thumbnail}`] : undefined,
    })),
  ]
}
