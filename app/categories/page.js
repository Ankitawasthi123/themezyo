'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getTemplateCategories } from '../../data/templates'
import { useI18n } from '../../components/I18nProvider'

const categoryMeta = {
  SaaS: {
    desc: 'AI SaaS platforms, dashboards, pricing pages, docs, and product workflows.',
    icon: '/icons/saas.svg',
  },
  'Digital Agency': {
    desc: 'Agency websites, service pages, portfolios, testimonials, and lead-focused sections.',
    icon: '/icons/business.svg',
  },
  'E-commerce': {
    desc: 'Shopping experiences, product pages, carts, checkout flows, and order tracking.',
    icon: '/icons/ecommerce.svg',
  },
  'Real Estate': {
    desc: 'Property listings, home planning, requirement flows, dashboards, and pricing pages.',
    icon: '/icons/landing.svg',
  },
}

export default function CategoriesPage(){
  const { t } = useI18n()
  const categories = getTemplateCategories().map((category) => ({
    ...category,
    desc: categoryMeta[category.title]?.desc || `Templates for ${category.title} projects.`,
    icon: categoryMeta[category.title]?.icon || '/icons/landing.svg',
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="bg-white border-b py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">{t('categories.pageTitle')}</h1>
            <p className="mt-2 text-gray-600">{t('categories.pageIntro')}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(cat=> (
                <div key={cat.title} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
                  <img src={cat.icon} alt={cat.title} className="w-12 h-12 mb-4" style={{filter:'invert(0.3) hue-rotate(250deg) saturate(2)'}} />
                  <h3 className="text-xl font-semibold text-gray-900">{cat.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{cat.desc}</p>
                  <div className="mt-4 text-indigo-600 font-semibold">{cat.count} {t('common.templates')}</div>
                  <div className="mt-4 space-y-2">
                    {cat.templates.map((template) => (
                      <a key={template.id} href={`/templates/${template.id}`} className="block rounded-lg bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-100">
                        {template.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
