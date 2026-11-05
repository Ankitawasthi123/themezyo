import Script from 'next/script'
import { templates } from '../../data/templates'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

export const metadata = {
  title: 'AI-Based Solutions and Digital Product Ideas',
  description: 'Explore AI-based solution concepts for healthcare, SaaS, commerce, services, education, finance, real estate, and other industries, with workflows, previews, source prototypes, and end-to-end delivery options.',
  alternates: {
    canonical: '/templates',
  },
  openGraph: {
    title: 'AI-Based Solutions and Digital Product Ideas | Themezyo',
    description: 'Explore industry-focused AI solutions, application concepts, workflow previews, source prototypes, and custom end-to-end product delivery.',
    url: '/templates',
  },
}

export default function TemplatesLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/templates#collection`,
    url: `${siteUrl}/templates`,
    name: 'Themezyo AI-based solutions',
    description: 'A collection of industry-focused AI solution concepts with product workflows, previews, source prototypes, and end-to-end delivery possibilities.',
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
          '@id': `${siteUrl}/templates/${template.id}#solution`,
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
