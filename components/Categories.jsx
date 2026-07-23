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
  Healthcare: '/icons/business.svg',
  Education: '/icons/blog.svg',
  Nonprofit: '/icons/customize.svg',
}

const categoryDescriptions = {
  SaaS: 'Product pages, pricing layouts, dashboards, docs, AI tools, and account screens for software ideas.',
  'Digital Agency': 'Portfolio-ready layouts for services, case studies, testimonials, and client enquiry pages.',
  'E-commerce': 'Storefront concepts with product browsing, cart, checkout-style pages, and order tracking layouts.',
  'Real Estate': 'Property listings, buyer flows, home planning concepts, dashboards, and listing detail pages.',
  Career: 'Resume builders, ATS tools, candidate dashboards, template galleries, and job seeker experiences.',
  Healthcare: 'Clinic, therapy, dental, physiotherapy, and wellness layouts with service and booking-style pages.',
  Education: 'School, academy, course, dashboard, admissions, and student resource website templates.',
  Nonprofit: 'Mission-led layouts for programs, impact stories, donations, volunteers, and community resources.',
}

export default function Categories(){
  const { t } = useI18n()
  const items = getTemplateCategories().map((category) => ({
    ...category,
    icon: categoryIcons[category.title] || '/icons/landing.svg',
    description: categoryDescriptions[category.title] || `Ready-to-edit templates for ${category.title.toLowerCase()} websites and product ideas.`,
    previewTemplates: category.templates.slice(0, 3),
  }))
  const visibleItems = items.slice(0, 8)

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Browse by use case</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">{t('categories.title')}</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Start with the type of website you want to build. Each category groups templates by real project needs, so you can jump straight to designs with relevant pages, screenshots, previews, and editable source files.
            </p>
          </div>
          <Link className="inline-flex self-start rounded-lg border border-blue-200 px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-50 sm:self-auto" href="/categories">{t('common.viewAllCategories')}</Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((it)=> (
            <Link key={it.title} href={`/templates?category=${encodeURIComponent(it.title)}`} className="group flex h-full flex-col rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-blue-100 hover:bg-white hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition group-hover:bg-blue-50">
                  <img src={it.icon} alt="" aria-hidden="true" className="h-7 w-7" style={{filter:'invert(0.3) hue-rotate(250deg) saturate(2)'}} />
                </div>
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-blue-700 shadow-sm">{it.count} {t('common.templates')}</span>
              </div>
              <div className="mt-5 font-bold text-slate-800">{it.title}</div>
              <p className="mt-2 flex-1 leading-6 text-gray-600">{it.description}</p>
              <div className="mt-4 space-y-2 border-t border-gray-200 pt-4">
                {it.previewTemplates.map((template) => (
                  <div key={template.id} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{template.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-sm font-bold text-blue-600 transition group-hover:text-blue-700">
                Explore {it.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
