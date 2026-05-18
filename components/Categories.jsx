'use client'

import Link from 'next/link'
import { useI18n } from './I18nProvider'

export default function Categories(){
  const { t } = useI18n()
  const items = [
    {title:t('categories.names.landing'),count:'120+',icon:'/icons/landing.svg'},
    {title:t('categories.names.business'),count:'180+',icon:'/icons/business.svg'},
    {title:t('categories.names.portfolio'),count:'90+',icon:'/icons/portfolio.svg'},
    {title:t('categories.names.ecommerce'),count:'150+',icon:'/icons/ecommerce.svg'},
    {title:t('categories.names.saas'),count:'110+',icon:'/icons/saas.svg'},
    {title:t('categories.names.blog'),count:'80+',icon:'/icons/blog.svg'},
    {title:t('categories.names.dashboard'),count:'60+',icon:'/icons/dashboard.svg'},
  ]
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{t('categories.title')}</h3>
          <Link className="text-sm text-indigo-600" href="/categories">{t('common.viewAllCategories')}</Link>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {items.map((it)=> (
            <Link key={it.title} href="/categories" className="p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm text-center text-sm hover:shadow-md transition">
              <img src={it.icon} alt={it.title} className="h-8 w-8 mx-auto mb-2" style={{filter:'invert(0.3) hue-rotate(250deg) saturate(2)'}} />
              <div className="text-gray-800 font-medium">{it.title}</div>
              <div className="text-xs text-gray-500">{it.count} {t('common.templates')}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
