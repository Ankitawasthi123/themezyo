import Script from 'next/script'
import { templates } from '../../data/templates'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

export const metadata = {
  title: 'Free HTML Website Templates and AI-Based Ideas',
  description: 'Browse and download free responsive HTML website templates and AI-based project ideas for startups, SaaS products, agencies, online stores, real estate platforms, and creator websites.',
  alternates: {
    canonical: '/templates',
  },
  openGraph: {
    title: 'Free HTML Website Templates and AI-Based Ideas | Themezyo',
    description: 'Explore free responsive HTML templates and AI-based project ideas with live previews, project screenshots, source files, and ready-to-use pages.',
    url: '/templates',
  },
}

export default function TemplatesLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/templates#collection`,
    url: `${siteUrl}/templates`,
    name: 'Themezyo free HTML website templates',
    description: 'A collection of free responsive HTML website templates with live previews and downloadable source files.',
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: templates.length,
      itemListElement: templates.map((template, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          '@id': `${siteUrl}/templates/${template.id}#template`,
          name: template.title,
          url: `${siteUrl}/templates/${template.id}`,
          description: template.description || template.summary,
          genre: template.category,
          image: template.thumbnail ? `${siteUrl}${template.thumbnail}` : undefined,
          isAccessibleForFree: template.price === 'Free',
        },
      })),
    },
  }

  return (
    <>
      <Script
        id="templates-collection-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}
