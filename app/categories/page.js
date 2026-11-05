'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getTemplateCategories } from '../../data/templates'
import { useI18n } from '../../components/I18nProvider'
import { localizeTemplateCategory } from '../../lib/templateLocalization'

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
  const { language, t } = useI18n()
  const localizedDescription = (category) => {
    const categoryName = localizeTemplateCategory(category.title, language)
    if (language === 'fr') return `Découvrez des concepts de solutions IA, des parcours utilisateur et des possibilités de réalisation pour les projets du secteur ${categoryName}.`
    if (language === 'de') return `Entdecken Sie KI-Lösungskonzepte, Nutzerabläufe und Umsetzungsmöglichkeiten für Projekte im Bereich ${categoryName}.`
    if (language === 'ar') return `استكشف مفاهيم حلول الذكاء الاصطناعي ورحلات المستخدم وإمكانيات التنفيذ لمشاريع قطاع ${categoryName}.`
    return categoryMeta[category.title]?.desc || `AI-based solution concepts for ${category.title} projects.`
  }
  const categories = getTemplateCategories().map((category) => ({
    ...category,
    localizedTitle: localizeTemplateCategory(category.title, language),
    desc: localizedDescription(category),
    icon: categoryMeta[category.title]?.icon || '/icons/landing.svg',
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="border-b border-gray-200 bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{t('categories.pageEyebrow')}</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-800">{t('categories.pageTitle')}</h1>
            <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-gray-600">{t('categories.pageIntro')}</p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(cat=> (
                <div key={cat.title} className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                    <img src={cat.icon} alt={cat.localizedTitle} className="h-8 w-8" style={{filter:'invert(0.3) hue-rotate(250deg) saturate(2)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{cat.localizedTitle}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{cat.desc}</p>
                  <div className="mt-4 font-bold text-blue-600">{cat.count} {t('common.templates')}</div>
                  <div className="mt-4 space-y-2">
                    {cat.templates.map((template) => (
                      <a key={template.id} href={`/templates/${template.id}`} className="block rounded-lg bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-700">
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
