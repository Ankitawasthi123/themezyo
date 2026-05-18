'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useI18n } from '../../components/I18nProvider'

export default function ContactPage(){
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="bg-white border-b py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">{t('contact.title')}</h1>
            <p className="mt-2 text-gray-600">{t('contact.intro')}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{t('contact.info')}</h2>
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('contact.email')}</h3>
                    <p className="mt-1 text-gray-600">support@templix.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('contact.phone')}</h3>
                    <p className="mt-1 text-gray-600">+1 (234) 567-8900</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('contact.address')}</h3>
                    <p className="mt-1 text-gray-600">123 Main Street<br/>San Francisco, CA 94102<br/>United States</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('contact.hours')}</h3>
                    <p className="mt-1 text-gray-600 whitespace-pre-line">{t('contact.hoursText')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">{t('contact.name')}</label>
                    <input type="text" className="mt-2 w-full px-4 py-2 border rounded-lg" placeholder={t('contact.namePlaceholder')} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">{t('contact.email')}</label>
                    <input type="email" className="mt-2 w-full px-4 py-2 border rounded-lg" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">{t('contact.subject')}</label>
                    <input type="text" className="mt-2 w-full px-4 py-2 border rounded-lg" placeholder={t('contact.subjectPlaceholder')} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">{t('contact.message')}</label>
                    <textarea className="mt-2 w-full px-4 py-2 border rounded-lg h-32" placeholder={t('contact.messagePlaceholder')}></textarea>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition">
                    {t('common.sendMessage')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
