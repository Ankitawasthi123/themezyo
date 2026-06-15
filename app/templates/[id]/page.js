import { notFound } from 'next/navigation'
import TemplateDetailContent from '../../../components/TemplateDetailContent'
import { getTemplateById, templates } from '../../../data/templates'

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
    keywords: [
      template.title,
      template.category,
      template.layoutType,
      'free HTML template',
      'AI website template',
      ...(template.features || []),
    ].filter(Boolean),
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
