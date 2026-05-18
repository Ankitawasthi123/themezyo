'use client'

import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { templates } from '../../data/templates'
import { useI18n } from '../../components/I18nProvider'

export default function TemplatesPage(){
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="bg-white border-b py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{t('templatesPage.title')}</h1>
            <p className="mt-2 text-gray-600">{t('templatesPage.intro')}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder={t('templatesPage.search')}
                className="px-4 py-2 border rounded-lg flex-1"
                aria-label={t('templatesPage.search')}
              />
              <select className="px-4 py-2 border rounded-lg" aria-label="Filter by category">
                <option>{t('templatesPage.allCategories')}</option>
                <option>{t('categories.names.business')}</option>
                <option>{t('categories.names.ecommerce')}</option>
                <option>{t('categories.names.saas')}</option>
                <option>{t('categories.names.blog')}</option>
                <option>{t('categories.names.portfolio')}</option>
              </select>
              <select className="px-4 py-2 border rounded-lg" aria-label="Sort ideas">
                <option>{t('templatesPage.sortPopular')}</option>
                <option>{t('templatesPage.newest')}</option>
                <option>{t('templatesPage.priceLow')}</option>
                <option>{t('templatesPage.priceHigh')}</option>
              </select>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {templates.map((template)=> {
                const imageSrc = template.thumbnail || template.images?.[0]

                return (
                  <div key={template.id} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition h-full flex flex-col">
                    {imageSrc ? (
                      <img src={imageSrc} alt={`${template.title} thumbnail`} className="h-40 w-full object-cover" />
                    ) : (
                      <div
                        className="h-40 bg-gradient-to-br"
                        style={{backgroundImage: `linear-gradient(135deg, ${template.color}80, ${template.color}40)`}}
                      />
                    )}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="text-xs text-indigo-600 font-medium bg-indigo-50 inline-block px-2 py-1 rounded">{template.category}</div>
                      <h4 className="mt-2 text-sm font-semibold text-gray-900">{template.title}</h4>
                      <p className="mt-2 text-xs text-gray-500 line-clamp-2">{template.description}</p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold text-green-600">{template.price === 'Free' ? t('common.free') : template.price}</div>
                        <Link
                          href={template.previewPath || `/templates/${template.id}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-indigo-600 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100"
                        >
                          {t('common.view')}
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
