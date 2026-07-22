import { notFound } from 'next/navigation'
import TemplateDetailContent from '../../../components/TemplateDetailContent'
import { getTemplateById, templates } from '../../../data/templates'

function createTemplateKeywords(template) {
  const category = template.category
  const normalizedCategory = String(category || '').toLowerCase()
  const templateType = getTemplateType(template)

  return [
    templateType,
    category,
    `${category} website template`,
    `${category} HTML template`,
    `free ${normalizedCategory} website template`,
    `free ${normalizedCategory} HTML template`,
    `responsive ${normalizedCategory} website template`,
    `responsive ${normalizedCategory} HTML template`,
    `download ${normalizedCategory} website template`,
    `download ${normalizedCategory} HTML template`,
    'free HTML website template',
  ]
    .filter(Boolean)
    .map((keyword) => String(keyword).trim())
    .filter((keyword, index, keywords) => keywords.indexOf(keyword) === index)
    .slice(0, 10)
}

function getTemplateType(template) {
  return template.layoutType || template.category
}

export function generateStaticParams() {
  return templates.map((template) => ({ id: template.id }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const template = getTemplateById(id)

  if (!template) {
    return {
      title: 'Template Not Found',
      description: 'The requested Themezyo template could not be found.',
    }
  }

  const title = `${template.title} - ${template.category} HTML Template`
  const description = template.description || template.summary
  const image = template.thumbnail || template.images?.[0]
  const templateType = getTemplateType(template)

  return {
    title,
    description,
    keywords: createTemplateKeywords(template),
    other: {
      'template-type': templateType,
      'template-category': template.category,
    },
    alternates: {
      canonical: `/templates/${template.id}`,
    },
    openGraph: {
      title: `${title} | Themezyo`,
      description,
      url: `/templates/${template.id}`,
      type: 'website',
      images: image ? [{ url: image, alt: `${template.title} preview screenshot` }] : undefined,
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

  return <TemplateDetailContent template={template} />
}
