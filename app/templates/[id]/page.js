import { notFound } from 'next/navigation'
import Script from 'next/script'
import TemplateDetailContent from '../../../components/TemplateDetailContent'
import { getTemplateById, templates } from '../../../data/templates'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

function createSolutionKeywords(template) {
  const category = template.category
  const normalizedCategory = String(category || '').toLowerCase()
  const solutionType = getSolutionType(template)

  return [
    solutionType,
    category,
    `${category} AI solution`,
    `AI-based ${normalizedCategory} solution`,
    `${normalizedCategory} digital product idea`,
    `${normalizedCategory} application solution`,
    `${normalizedCategory} automation solution`,
    `custom ${normalizedCategory} software development`,
    'AI application development',
    'end-to-end digital product development',
  ]
    .filter(Boolean)
    .map((keyword) => String(keyword).trim())
    .filter((keyword, index, keywords) => keywords.indexOf(keyword) === index)
    .slice(0, 10)
}

function getSolutionType(template) {
  return template.layoutType || `${template.category} AI-based solution`
}

export function generateStaticParams() {
  return templates.map((template) => ({ id: template.id }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const template = getTemplateById(id)

  if (!template) {
    return {
      title: 'Solution Not Found',
      description: 'The requested Themezyo AI-based solution could not be found.',
    }
  }

  const title = `${template.title} - ${template.category} AI-Based Solution`
  const description = `${template.description || template.summary} Explore the solution workflow, possible production features, and end-to-end delivery options.`
  const image = template.thumbnail || template.images?.[0]
  const solutionType = getSolutionType(template)

  return {
    title,
    description,
    keywords: createSolutionKeywords(template),
    other: {
      'solution-type': solutionType,
      'solution-category': template.category,
    },
    alternates: {
      canonical: `/templates/${template.id}`,
    },
    openGraph: {
      title: `${title} | Themezyo`,
      description,
      url: `/templates/${template.id}`,
      type: 'website',
      images: image ? [{ url: image, alt: `${template.title} AI-based solution preview` }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Themezyo`,
      description,
      images: image ? [image] : undefined,
    },
  }
}

export default async function TemplateDetailPage({ params }){
  const { id } = await params
  const template = getTemplateById(id)

  if (!template) {
    notFound()
  }

  const pageUrl = `${siteUrl}/templates/${template.id}`
  const templateImage = template.thumbnail || template.images?.[0]
  const primaryImage = templateImage
    ? {
        '@type': 'ImageObject',
        '@id': `${pageUrl}#primary-image`,
        url: `${siteUrl}${templateImage}`,
        contentUrl: `${siteUrl}${templateImage}`,
        caption: `${template.title} ${template.category} AI-based solution preview`,
        representativeOfPage: true,
      }
    : undefined
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${pageUrl}#solution`,
    name: template.title,
    headline: template.hero?.headline || template.title,
    description: template.description || template.summary,
    url: pageUrl,
    image: primaryImage,
    genre: template.category,
    keywords: createSolutionKeywords(template).join(', '),
    about: `${template.category} AI-based solution and end-to-end product concept`,
    educationalUse: 'Solution research, product planning, prototyping, and implementation reference',
    encodingFormat: template.format || 'text/html',
    isAccessibleForFree: template.price === 'Free',
    dateModified: template.updated
      ? new Date(`${template.updated} 1`).toISOString().slice(0, 10)
      : undefined,
    inLanguage: 'en',
    creator: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Themezyo',
      url: siteUrl,
    },
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
      primaryImageOfPage: primaryImage,
    },
  }

  return (
    <>
      <Script
        id={`template-structured-data-${template.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TemplateDetailContent template={template} />
    </>
  )
}
