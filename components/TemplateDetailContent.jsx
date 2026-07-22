'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import TemplateImageSlider from './TemplateImageSlider'
import { useI18n } from './I18nProvider'
import { templates } from '../data/templates'

const analyticsTimeout = 600

function sendAnalyticsEvent(eventName, params = {}, callback) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    callback?.()
    return
  }

  let callbackFired = false
  const finish = () => {
    if (callbackFired) return
    callbackFired = true
    callback?.()
  }

  window.gtag('event', eventName, {
    ...params,
    event_callback: finish,
    event_timeout: analyticsTimeout,
  })

  window.setTimeout(finish, analyticsTimeout)
}

export default function TemplateDetailContent({ template }) {
  const { t } = useI18n()
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
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
  const sameCategoryTemplates = templates.filter(
    (item) => item.id !== template.id && item.category === template.category
  )
  const fallbackTemplates = templates.filter(
    (item) => item.id !== template.id && item.category !== template.category
  )
  const relatedTemplates = [...sameCategoryTemplates, ...fallbackTemplates].slice(0, 4)
  const paypalPaymentUrl = process.env.NEXT_PUBLIC_PAYPAL_PAYMENT_URL
  const paymentOptions = [
    paypalPaymentUrl
      ? {
          key: 'paypal',
          label: t('detail.paypalButton'),
          href: paypalPaymentUrl,
          target: '_blank',
          rel: 'noreferrer',
          className: 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100',
        }
      : null,
  ].filter(Boolean)
  const hasPaymentOptions = paymentOptions.length > 0

  useEffect(() => {
    sendAnalyticsEvent('template_view', {
      template_id: template.id,
      template_name: template.title,
      template_category: template.category,
    })
  }, [template.category, template.id, template.title])

  const closeDownloadModal = () => {
    setIsDownloadModalOpen(false)
  }

  const handleDownloadClick = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      sendAnalyticsEvent('template_download', {
        template_id: template.id,
        template_name: template.title,
        template_category: template.category,
      })
      return
    }

    event.preventDefault()
    setIsDownloadModalOpen(true)
  }

  const handleConfirmDownload = () => {
    sendAnalyticsEvent(
      'template_download',
      {
        template_id: template.id,
        template_name: template.title,
        template_category: template.category,
      },
      () => {
        window.location.href = downloadHref
      }
    )
  }

  const handlePaymentClick = (provider) => {
    sendAnalyticsEvent('template_payment_click', {
      payment_provider: provider,
      template_id: template.id,
      template_name: template.title,
      template_category: template.category,
    })
  }

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

                  <a href={downloadHref} download onClick={handleDownloadClick} className="mt-6 block w-full rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 text-center font-bold text-white shadow-sm transition hover:shadow-md">
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

            {relatedTemplates.length ? (
              <section className="mt-12 border-t border-gray-200 pt-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                      {t('detail.relatedEyebrow', 'More templates')}
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
                      {t('detail.relatedTitle', 'Related templates')}
                    </h2>
                  </div>
                  <Link className="text-sm font-semibold text-blue-600 hover:text-blue-700" href="/templates">
                    {t('common.viewAllTemplates')}
                  </Link>
                </div>

                <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {relatedTemplates.map((relatedTemplate) => (
                    <Link
                      key={relatedTemplate.id}
                      href={`/templates/${relatedTemplate.id}`}
                      className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                        {relatedTemplate.thumbnail ? (
                          <img
                            src={relatedTemplate.thumbnail}
                            alt={`${relatedTemplate.title} screenshot`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div
                            className="h-full w-full"
                            style={{
                              backgroundImage: `linear-gradient(135deg, ${relatedTemplate.color}80, ${relatedTemplate.color}35)`,
                            }}
                          />
                        )}
                      </div>
                      <div className="p-4">
                        <div className="inline-block rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
                          {relatedTemplate.category}
                        </div>
                        <h3 className="mt-3 text-base font-bold text-slate-800">{relatedTemplate.title}</h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                          {relatedTemplate.summary || relatedTemplate.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-sm font-bold text-emerald-600">
                            {relatedTemplate.price === 'Free' ? t('common.free') : relatedTemplate.price}
                          </div>
                          <span className="text-sm font-bold text-blue-600">{t('common.view')}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </section>
      </main>

      {isDownloadModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/55 px-4 py-6">
          <div className="absolute inset-0" onClick={closeDownloadModal} />
          <div role="dialog" aria-modal="true" aria-labelledby="download-modal-title" className="relative w-full max-w-md rounded-xl border border-blue-100 bg-white p-6 text-center shadow-2xl sm:p-8">
            <button type="button" onClick={closeDownloadModal} aria-label={t('detail.downloadModalClose')} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-gray-200 text-xl leading-none text-gray-500 transition hover:bg-gray-50 hover:text-slate-800">
              x
            </button>
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blue-50 text-blue-600">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3v11m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 id="download-modal-title" className="mt-5 text-2xl font-extrabold text-slate-800">{t('detail.downloadModalTitle')}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{t('detail.downloadModalText')}</p>

            <button type="button" onClick={handleConfirmDownload} className="mt-6 w-full rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 font-bold text-white shadow-sm transition hover:shadow-md">
              {t('detail.downloadModalButton')}
            </button>

            <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4 text-left">
              <h3 className="text-sm font-bold text-slate-800">{t('detail.supportUsTitle')}</h3>
              <p className="mt-1 text-xs leading-5 text-gray-600">{t('detail.paymentText')}</p>
              {hasPaymentOptions ? (
                <div className="mt-3 grid gap-2">
                  {paymentOptions.map((option) => (
                    <a
                      key={option.key}
                      href={option.href}
                      target={option.target}
                      rel={option.rel}
                      onClick={() => handlePaymentClick(option.key)}
                      className={`inline-flex items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-bold transition ${option.className}`}
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-3 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-gray-600">{t('detail.paymentMissingText')}</p>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  )
}
