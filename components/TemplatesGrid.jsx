'use client'

import Link from 'next/link'
import { templates } from '../data/templates'
import { useI18n } from './I18nProvider'

export default function TemplatesGrid(){
  const { t } = useI18n()
  const featuredTemplates = templates.slice(0, 8)

  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">{t('templatesPage.handpicked')}</h3>
          <Link className="text-sm font-semibold text-blue-600 hover:text-blue-700" href="/templates">{t('common.viewAllTemplates')}</Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTemplates.map((template)=> {
            const pages = template.stats?.find((stat) => stat.label === 'Pages')?.value

            return (
              <Link key={template.id} href={`/templates/${template.id}`} className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="h-40 overflow-hidden bg-gradient-to-br">
                  {template.thumbnail ? (
                    <img
                      src={template.thumbnail}
                      alt={`${template.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div
                      className="h-full"
                      style={{backgroundImage: `linear-gradient(135deg, ${template.color}80, ${template.color}40)`}}
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="inline-block self-start rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">{template.category}</div>
                  <h4 className="mt-3 text-base font-bold text-slate-800">{template.title}</h4>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{template.summary || template.description}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <div>
                      <div className="text-sm font-bold text-emerald-600">{template.price === 'Free' ? t('common.free') : template.price}</div>
                      {pages ? <div className="mt-0.5 text-xs font-semibold text-gray-500">{pages} pages</div> : null}
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600 transition group-hover:bg-blue-100">{t('common.view')}</span>
                  </div>
                </div>
              </Link>
            )
          })}
            </div>
      </div>
    </section>
  )
}
