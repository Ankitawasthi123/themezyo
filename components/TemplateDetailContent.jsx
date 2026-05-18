'use client'

import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import TemplateImageSlider from './TemplateImageSlider'
import { useI18n } from './I18nProvider'

export default function TemplateDetailContent({ template }) {
  const { t } = useI18n()
  const summary = template.summary || template.description
  const layoutType = template.layoutType || `${template.category} AI idea pack`
  const sections = template.sections || template.features?.slice(0, 4) || []
  const stats = template.stats || [
    { label: 'Rating', value: `${template.rating}` },
    { label: 'Reviews', value: `${template.reviews}` },
    { label: 'Price', value: template.price },
  ]
  const sourceText = template.sourceText || t('detail.defaultSource')
  const format = template.format || 'HTML, Tailwind CSS'
  const updated = template.updated || 'May 2026'
  const support = template.support || 'Paid, based on idea and work'
  const ctaDescription = template.ctaDescription || t('detail.ctaDescription')
  const mainImage = template.images?.[0] || template.thumbnail
  const downloadHref = template.zipPath || `/downloads/${template.id}`

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="bg-white border-b py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/templates" className="text-indigo-600 hover:text-indigo-700">{t('common.backToTemplates')}</Link>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <TemplateImageSlider template={template} />

                <div className="bg-white rounded-xl shadow-md p-8">
                  <h1 className="text-3xl font-bold text-gray-900">{template.title}</h1>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <span className="text-gray-700">{template.rating} {t('common.rating')} ({template.reviews} {t('common.reviews')})</span>
                    <span className="text-indigo-600 font-semibold">{template.category}</span>
                  </div>

                  {mainImage ? (
                    <div className="mt-6 overflow-hidden rounded-3xl shadow-lg">
                      <img src={mainImage} alt={`${template.title} preview`} className="w-full h-80 object-cover" />
                    </div>
                  ) : null}

                  <p className="mt-6 text-gray-700 leading-relaxed">{summary}</p>

                  {template.hero ? (
                    <div className="mt-8 rounded-3xl border border-line bg-slate-50 p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">{template.hero.tagline}</p>
                      <h2 className="mt-3 text-2xl font-bold text-gray-900">{template.hero.headline}</h2>
                      <p className="mt-3 text-gray-700">{template.hero.subtext}</p>
                    </div>
                  ) : null}

                  {layoutType ? (
                    <div className="mt-8 rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
                      <h3 className="text-xl font-semibold text-gray-900">{t('detail.layout')}</h3>
                      <p className="mt-3 text-gray-700">{layoutType}</p>
                      {sections.length ? (
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {sections.map((section) => (
                            <div key={section} className="rounded-2xl bg-white p-4 shadow-sm">
                              <p className="text-sm font-semibold text-gray-900">{section}</p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  {stats ? (
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {stats.map((stat) => (
                        <div key={stat.label} className="rounded-3xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                          <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
                          <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {sourceText ? (
                    <div className="mt-8 rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
                      <h3 className="text-xl font-semibold text-gray-900">{t('detail.source')}</h3>
                      <p className="mt-3 text-gray-700">{sourceText}</p>
                    </div>
                  ) : null}

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900">{t('detail.features')}</h3>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {template.features.map((feature)=> (
                        <div key={feature} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900">{t('detail.includes')}</h3>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {template.includes.map((item)=> (
                        <li key={item} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-md p-8 sticky top-8">
                  <div className="text-4xl font-bold text-green-600">{template.price === 'Free' ? t('common.free') : template.price}</div>
                  <p className="mt-2 text-gray-600">{ctaDescription}</p>

                  <a href={downloadHref} download className="block text-center w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition">
                    {t('detail.download')}
                  </a>

                  {template.previewPath ? (
                    <a href={template.previewPath} target="_blank" rel="noreferrer" className="block text-center w-full mt-3 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition">
                      {t('detail.browser')}
                    </a>
                  ) : null}

                  <Link href="/contact" className="block text-center w-full mt-3 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition">
                    {t('common.requestPaidSupport')}
                  </Link>

                  <div className="mt-6 rounded-xl border-2 border-amber-300 bg-amber-50 p-6 text-center shadow-sm">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-white shadow-md">
                      <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 8h11v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 10h2a3 3 0 0 1 0 6h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 4v1M11 4v1M15 4v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">{t('detail.coffeeTitle')}</h3>
                    <p className="mt-2 text-sm text-gray-700">{t('detail.coffeeText')}</p>
                    <a href="https://www.buymeacoffee.com/" target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-amber-500 px-6 py-3 font-bold text-white shadow-md transition hover:bg-amber-600">
                      {t('detail.coffeeButton')}
                    </a>
                  </div>

                  <div className="mt-6 space-y-4 border-t pt-6">
                    <div>
                      <p className="text-sm text-gray-600">{t('detail.format')}</p>
                      <p className="font-semibold text-gray-900">{format}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t('detail.updated')}</p>
                      <p className="font-semibold text-gray-900">{updated}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t('detail.support')}</p>
                      <p className="font-semibold text-gray-900">{support}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-indigo-50 rounded-lg space-y-2">
                    <p className="text-sm text-indigo-900">{t('detail.license1')}</p>
                    <p className="text-sm text-indigo-900">{t('detail.license2')}</p>
                    <p className="text-sm text-indigo-900">{t('detail.license3')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
