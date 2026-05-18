'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useI18n } from '../../components/I18nProvider'

export default function CategoriesPage(){
  const { t } = useI18n()
  const categories = [
    {title:t('categories.names.landing'),count:'120+',desc:t('categories.descriptions.landing'),icon:'/icons/landing.svg'},
    {title:t('categories.names.business'),count:'180+',desc:t('categories.descriptions.business'),icon:'/icons/business.svg'},
    {title:t('categories.names.portfolio'),count:'90+',desc:t('categories.descriptions.portfolio'),icon:'/icons/portfolio.svg'},
    {title:t('categories.names.ecommerce'),count:'150+',desc:t('categories.descriptions.ecommerce'),icon:'/icons/ecommerce.svg'},
    {title:t('categories.names.saas'),count:'110+',desc:t('categories.descriptions.saas'),icon:'/icons/saas.svg'},
    {title:t('categories.names.blog'),count:'80+',desc:t('categories.descriptions.blog'),icon:'/icons/blog.svg'},
    {title:t('categories.names.dashboard'),count:'60+',desc:t('categories.descriptions.dashboard'),icon:'/icons/dashboard.svg'},
  ]

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
                <div key={cat.title} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition cursor-pointer">
                  <img src={cat.icon} alt={cat.title} className="w-12 h-12 mb-4" style={{filter:'invert(0.3) hue-rotate(250deg) saturate(2)'}} />
                  <h3 className="text-xl font-semibold text-gray-900">{cat.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{cat.desc}</p>
                  <div className="mt-4 text-indigo-600 font-semibold">{cat.count} {t('common.templates')} -&gt;</div>
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
