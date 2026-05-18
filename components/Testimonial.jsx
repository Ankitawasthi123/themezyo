'use client'

import { useI18n } from './I18nProvider'

export default function Testimonial(){
  const { t } = useI18n()
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{t('testimonial.title')}</h3>
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start gap-6">
            <img src="/avatar.svg" alt="Brooklyn Simmons" className="w-16 h-16 rounded-full flex-shrink-0" />
            <div>
              <p className="text-gray-700">{t('testimonial.quote')}</p>
              <div className="mt-4">
                <div className="font-semibold">Brooklyn Simmons</div>
                <div className="text-sm text-gray-500">{t('testimonial.role')}</div>
                <div className="text-sm text-yellow-500 mt-2">{t('testimonial.rating')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
