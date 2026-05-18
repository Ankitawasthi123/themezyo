import { notFound } from 'next/navigation'
import TemplateDetailContent from '../../../components/TemplateDetailContent'
import { getTemplateById, templates } from '../../../data/templates'

export const metadata = {
  title: 'AI Idea Details - Templix',
  description: 'View AI idea details and preview'
}

export function generateStaticParams() {
  return templates.map((template) => ({ id: template.id }))
}

export default async function TemplateDetailPage({ params }){
  const { id } = await params
  const template = getTemplateById(id)

  if (!template) {
    notFound()
  }

  return <TemplateDetailContent template={template} />
}
