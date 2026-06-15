'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getTemplateCategories, templates } from '../../data/templates'
import { useI18n } from '../../components/I18nProvider'

const sortOptions = {
  popular: 'popular',
  newest: 'newest',
  priceLow: 'priceLow',
  priceHigh: 'priceHigh',
}

export default function TemplatesPage(){
  const { t } = useI18n()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSort, setSelectedSort] = useState(sortOptions.popular)
  const categories = getTemplateCategories()
  const filteredTemplates = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return templates
      .filter((template) => {
        const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
        const searchableText = [
          template.title,
          template.category,
          template.description,
          template.summary,
          ...(template.features || []),
        ].join(' ').toLowerCase()

        return matchesCategory && (!normalizedSearch || searchableText.includes(normalizedSearch))
      })
      .sort((first, second) => {
        if (selectedSort === sortOptions.newest) {
          return templates.indexOf(second) - templates.indexOf(first)
        }

        if (selectedSort === sortOptions.priceLow || selectedSort === sortOptions.priceHigh) {
          const firstPrice = first.price === 'Free' ? 0 : Number.parseFloat(first.price) || 0
          const secondPrice = second.price === 'Free' ? 0 : Number.parseFloat(second.price) || 0

          return selectedSort === sortOptions.priceLow ? firstPrice - secondPrice : secondPrice - firstPrice
        }

        return (second.rating * second.reviews) - (first.rating * first.reviews)
      })
  }, [searchTerm, selectedCategory, selectedSort])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="border-b border-gray-200 bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">{t('templatesPage.title')}</h1>
            <p className="mt-3 max-w-2xl text-gray-600">{t('templatesPage.intro')}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={t('templatesPage.search')}
                className="min-h-11 flex-1 rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                aria-label={t('templatesPage.search')}
              />
              <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} className="min-h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" aria-label="Filter by category">
                <option value="all">{t('templatesPage.allCategories')}</option>
                {categories.map((category) => (
                  <option key={category.title} value={category.title}>{category.title} ({category.count})</option>
                ))}
              </select>
              <select value={selectedSort} onChange={(event) => setSelectedSort(event.target.value)} className="min-h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" aria-label="Sort templates">
                <option value={sortOptions.popular}>{t('templatesPage.sortPopular')}</option>
                <option value={sortOptions.newest}>{t('templatesPage.newest')}</option>
                <option value={sortOptions.priceLow}>{t('templatesPage.priceLow')}</option>
                <option value={sortOptions.priceHigh}>{t('templatesPage.priceHigh')}</option>
              </select>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredTemplates.length ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTemplates.map((template)=> {
                const imageSrc = template.thumbnail || template.images?.[0]

                return (
                  <div key={template.id} className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    {imageSrc ? (
                      <img src={imageSrc} alt={`${template.title} thumbnail`} className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
                    ) : (
                      <div
                        className="h-44 bg-gradient-to-br"
                        style={{backgroundImage: `linear-gradient(135deg, ${template.color}80, ${template.color}40)`}}
                      />
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <div className="inline-block self-start rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">{template.category}</div>
                      <h4 className="mt-3 text-base font-bold text-slate-800">{template.title}</h4>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">{template.description}</p>
                      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                        <div className="text-sm font-bold text-emerald-600">{template.price === 'Free' ? t('common.free') : template.price}</div>
                        <Link
                          href={`/templates/${template.id}`}
                          className="inline-flex items-center rounded-full border border-blue-600 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
                        >
                          {t('common.view')}
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
              </div>
            ) : (
              <div className="rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm">
                <h2 className="text-xl font-bold text-slate-800">No templates found</h2>
                <p className="mt-2 text-gray-600">Try a different search term or category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
