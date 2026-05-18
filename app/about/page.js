'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getTemplateCategories, templates } from '../../data/templates'
import { useI18n } from '../../components/I18nProvider'

export default function AboutPage(){
  const { t } = useI18n()
  const values = t('about.values')
  const categoryCount = getTemplateCategories().length

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="bg-white border-b py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">{t('about.title')}</h1>
            <p className="mt-2 text-gray-600">{t('about.intro')}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900">{t('about.missionTitle')}</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">{t('about.mission')}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="text-4xl font-bold text-indigo-600">{templates.length}</div>
                <p className="mt-2 text-gray-700 font-semibold">{t('hero.templates')}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="text-4xl font-bold text-indigo-600">{categoryCount}</div>
                <p className="mt-2 text-gray-700 font-semibold">{t('nav.categories')}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="text-4xl font-bold text-indigo-600">Free</div>
                <p className="mt-2 text-gray-700 font-semibold">{t('common.templates')}</p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900">{t('about.storyTitle')}</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">{t('about.story')}</p>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900">{t('about.valuesTitle')}</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map(([title, description]) => (
                  <div key={title}>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-gray-700">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
