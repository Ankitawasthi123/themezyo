'use client'

import { useI18n } from './I18nProvider'

export default function Newsletter(){
  const { t } = useI18n()
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-purple-600 to-pink-500 p-8 text-white">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div>
              <h4 className="text-xl font-bold">{t('newsletter.title')}</h4>
              <p className="mt-2 text-white/90">{t('newsletter.intro')}</p>
            </div>
            <div className="w-full sm:w-auto flex gap-2">
              <input aria-label="email" type="email" placeholder={t('newsletter.placeholder')} className="px-4 py-3 rounded-lg text-gray-900" />
              <button className="px-4 py-3 bg-black/90 rounded-lg">{t('newsletter.subscribe')}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
