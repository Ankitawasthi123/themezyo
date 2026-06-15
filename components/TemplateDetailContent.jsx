'use client'

import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import TemplateImageSlider from './TemplateImageSlider'
import { useI18n } from './I18nProvider'

export default function TemplateDetailContent({ template }) {
  const { t } = useI18n()
  const summary = template.summary || template.description
  const layoutType = template.layoutType || `${template.category} website template`
  const sections = template.sections || template.features?.slice(0, 4) || []
  const stats = template.stats || [
    { label: 'Rating', value: `${template.rating}` },
    { label: 'Reviews', value: `${template.reviews}` },
    { label: 'Price', value: template.price },
  ]
  const sourceText = template.sourceText || t('detail.defaultSource')
  const format = template.format || 'HTML, Tailwind CSS'
  const updated = template.updated || 'June 2026'
  const support = template.support || 'Paid customization available'
  const ctaDescription = template.ctaDescription || t('detail.ctaDescription')
  const downloadHref = template.zipPath || `/downloads/${template.id}`
  const coffeeUrl = process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="border-b border-gray-200 bg-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/templates" className="text-sm font-bold text-blue-600 hover:text-blue-700">{t('common.backToTemplates')}</Link>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <TemplateImageSlider template={template} />

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                  <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">{template.title}</h1>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">{template.category}</span>
                  </div>

                  <p className="mt-6 text-gray-700 leading-relaxed">{summary}</p>

                  {template.hero ? (
                    <div className="mt-8 rounded-xl border border-gray-200 bg-slate-50 p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{template.hero.tagline}</p>
                      <h2 className="mt-3 text-2xl font-bold text-slate-800">{template.hero.headline}</h2>
                      <p className="mt-3 text-gray-700">{template.hero.subtext}</p>
                    </div>
                  ) : null}

                  {layoutType ? (
                    <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6">
                      <h3 className="text-xl font-semibold text-slate-800">{t('detail.layout')}</h3>
                      <p className="mt-3 text-gray-700">{layoutType}</p>
                      {sections.length ? (
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {sections.map((section) => (
                            <div key={section} className="rounded-lg bg-white p-4 shadow-sm">
                              <p className="text-sm font-semibold text-slate-800">{section}</p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  {stats ? (
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {stats.map((stat) => (
                        <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                          <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                          <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {sourceText ? (
                    <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6">
                      <h3 className="text-xl font-semibold text-slate-800">{t('detail.source')}</h3>
                      <p className="mt-3 text-gray-700">{sourceText}</p>
                    </div>
                  ) : null}

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-slate-800">{t('detail.features')}</h3>
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {template.features.map((feature)=> (
                        <div key={feature} className="flex items-start gap-2 rounded-lg bg-gray-50 p-3">
                          <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-slate-800">{t('detail.includes')}</h3>
                    <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {template.includes.map((item)=> (
                        <li key={item} className="rounded-lg bg-gray-50 px-3 py-2 text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="text-4xl font-extrabold text-emerald-600">{template.price === 'Free' ? t('common.free') : template.price}</div>
                  <p className="mt-2 text-gray-600">{ctaDescription}</p>

                  <a href={downloadHref} download className="mt-6 block w-full rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 text-center font-bold text-white shadow-sm transition hover:shadow-md">
                    {t('detail.download')}
                  </a>

                  {template.previewPath ? (
                    <a href={template.previewPath} target="_blank" rel="noreferrer" className="mt-3 block w-full rounded-lg border border-blue-200 px-6 py-3 text-center font-bold text-blue-700 transition hover:bg-blue-50">
                      {t('detail.browser')}
                    </a>
                  ) : null}

                  <Link href="/contact" className="mt-3 block w-full rounded-lg border border-blue-200 px-6 py-3 text-center font-bold text-blue-700 transition hover:bg-blue-50">
                    {t('common.requestPaidSupport')}
                  </Link>

                  <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <h3 className="text-lg font-bold text-slate-800">{t('detail.frameworkTitle')}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">{t('detail.frameworkText')}</p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {['React', 'Angular', 'Vue.js'].map((framework) => (
                        <div key={framework} className="rounded-lg bg-white px-3 py-2 text-center text-xs font-bold text-blue-700 shadow-sm">
                          {framework}
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
                      {t('detail.frameworkButton')}
                    </Link>
                  </div>

                  {coffeeUrl ? (
                  <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-center shadow-sm">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-white shadow-sm">
                      <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 8h11v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 10h2a3 3 0 0 1 0 6h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 4v1M11 4v1M15 4v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-800">{t('detail.coffeeTitle')}</h3>
                    <p className="mt-2 text-sm text-gray-700">{t('detail.coffeeText')}</p>
                    <a href={coffeeUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-amber-500 px-6 py-3 font-bold text-white shadow-md transition hover:bg-amber-600">
                      {t('detail.coffeeButton')}
                    </a>
                  </div>
                  ) : null}

                  <div className="mt-6 space-y-4 border-t pt-6">
                    <div>
                      <p className="text-sm text-gray-600">{t('detail.format')}</p>
                      <p className="font-semibold text-slate-800">{format}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t('detail.updated')}</p>
                      <p className="font-semibold text-slate-800">{updated}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t('detail.support')}</p>
                      <p className="font-semibold text-slate-800">{support}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg space-y-2">
                    <p className="text-sm text-blue-900">{t('detail.license1')}</p>
                    <p className="text-sm text-blue-900">{t('detail.license2')}</p>
                    <p className="text-sm text-blue-900">{t('detail.license3')}</p>
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
