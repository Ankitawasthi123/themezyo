'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useI18n } from '../../components/I18nProvider'

export default function HelpPage(){
  const { t } = useI18n()
  const faqs = t('help.faqs')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="border-b border-gray-200 bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">{t('help.title')}</h1>
            <p className="mt-3 text-gray-600">{t('help.intro')}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map(([question, answer])=> (
                <div key={question} className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-800">{question}</h3>
                  <p className="mt-4 leading-7 text-gray-700">{answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-blue-100 bg-white p-8 text-center shadow-sm">
              <h3 className="text-2xl font-extrabold text-slate-800">{t('help.ctaTitle')}</h3>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">{t('help.ctaText')}</p>
              <a href="/contact" className="mt-5 inline-block rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 font-bold text-white shadow-sm transition hover:shadow-md">
                {t('common.requestPaidSupport')}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
