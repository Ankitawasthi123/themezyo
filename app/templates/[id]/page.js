import { notFound } from 'next/navigation'
import TemplateDetailContent from '../../../components/TemplateDetailContent'
import { getTemplateById, templates } from '../../../data/templates'

function createTemplateKeywords(template) {
  const title = template.title
  const category = template.category
  const normalizedCategory = String(category || '').toLowerCase()
  const titleSlugWords = String(template.id || '').replace(/-/g, ' ')

  return [
    title,
    `${title} template`,
    `${title} HTML template`,
    `${title} website template`,
    titleSlugWords,
    `${titleSlugWords} HTML template`,
    category,
    `${category} website template`,
    `${category} HTML template`,
    `free ${normalizedCategory} website template`,
    `free ${normalizedCategory} HTML template`,
    `responsive ${normalizedCategory} website template`,
    `responsive ${normalizedCategory} HTML template`,
    `download ${normalizedCategory} website template`,
    `download ${normalizedCategory} HTML template`,
    template.layoutType,
    'free HTML website template',
    'free responsive HTML template',
    'HTML CSS JavaScript template',
    'mobile friendly website template',
    'Themezyo template',
    ...(template.features || []),
    ...(template.sections || []),
  ]
    .filter(Boolean)
    .map((keyword) => String(keyword).trim())
    .filter((keyword, index, keywords) => keywords.indexOf(keyword) === index)
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

  return {
    title,
    description,
    keywords: createTemplateKeywords(template),
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
