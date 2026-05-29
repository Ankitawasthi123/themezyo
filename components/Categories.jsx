'use client'

import Link from 'next/link'
import { getTemplateCategories } from '../data/templates'
import { useI18n } from './I18nProvider'

const categoryIcons = {
  SaaS: '/icons/saas.svg',
  'Digital Agency': '/icons/business.svg',
  'E-commerce': '/icons/ecommerce.svg',
  'Real Estate': '/icons/landing.svg',
  Career: '/icons/portfolio.svg',
}

export default function Categories(){
  const { t } = useI18n()
  const items = getTemplateCategories().map((category) => ({
    ...category,
    icon: categoryIcons[category.title] || '/icons/landing.svg',
  }))

  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">{t('categories.title')}</h3>
          <Link className="text-sm font-semibold text-blue-600 hover:text-blue-700" href="/categories">{t('common.viewAllCategories')}</Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map((it)=> (
            <Link key={it.title} href="/categories" className="rounded-xl border border-gray-200 bg-white p-5 text-center text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-md">
              <img src={it.icon} alt={it.title} className="mx-auto mb-3 h-9 w-9" style={{filter:'invert(0.3) hue-rotate(250deg) saturate(2)'}} />
              <div className="font-bold text-slate-800">{it.title}</div>
              <div className="mt-1 text-xs font-medium text-gray-500">{it.count} {t('common.templates')}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
