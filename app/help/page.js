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
        <section className="bg-white border-b py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">{t('help.title')}</h1>
            <p className="mt-2 text-gray-600">{t('help.intro')}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map(([question, answer])=> (
                <div key={question} className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
                  <p className="mt-4 text-gray-700">{answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold">{t('help.ctaTitle')}</h3>
              <p className="mt-2">{t('help.ctaText')}</p>
              <a href="/contact" className="inline-block mt-4 px-6 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition">
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
