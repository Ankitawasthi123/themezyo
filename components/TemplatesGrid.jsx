'use client'

import Link from 'next/link'
import { templates } from '../data/templates'
import { useI18n } from './I18nProvider'

export default function TemplatesGrid(){
  const { t } = useI18n()
  const featuredTemplates = templates.slice(0, 5)

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{t('templatesPage.handpicked')}</h3>
          <Link className="text-sm text-indigo-600" href="/templates">{t('common.viewAllTemplates')}</Link>
        </div>

        <div className="mt-6">
          <div className="-mx-4 px-4 overflow-x-auto hide-scrollbar">
            <div className="flex gap-6 w-max">
              {featuredTemplates.map((template)=> (
                <Link key={template.id} href={`/templates/${template.id}`} className="bg-white rounded-lg shadow-md overflow-hidden w-72 hover:shadow-lg transition">
                  <div className="h-40 overflow-hidden bg-gradient-to-br">
                    {template.thumbnail ? (
                      <img src={template.thumbnail} alt={`${template.title} screenshot`} className="h-full w-full object-cover" />
                    ) : (
                      <div
                        className="h-full"
                        style={{backgroundImage: `linear-gradient(135deg, ${template.color}80, ${template.color}40)`}}
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-indigo-100 font-medium bg-indigo-700 inline-block px-2 py-1 rounded">{template.category}</div>
                    <h4 className="mt-2 text-sm font-semibold text-gray-900">{template.title}</h4>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-sm font-semibold text-green-600">{template.price === 'Free' ? t('common.free') : template.price}</div>
                      <span className="text-purple-600 text-sm font-semibold">{t('common.view')}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
