'use client'

import Link from 'next/link'
import { useI18n } from './I18nProvider'

export default function Hero(){
  const { t } = useI18n()
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">{t('hero.eyebrow')}</p>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              {t('hero.titlePrefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="mt-6 text-gray-600 max-w-xl">{t('hero.description')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-md" href="/templates">{t('hero.download')}</Link>
              <Link className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg text-gray-700" href="/help">{t('hero.how')}</Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-3"><span className="font-semibold text-gray-900">2,000+</span> {t('hero.templates')}</div>
              <div className="flex items-center gap-3"><span className="font-semibold text-gray-900">50,000+</span> {t('hero.customers')}</div>
              <div className="flex items-center gap-3"><span className="font-semibold text-gray-900">{t('hero.paid')}</span> {t('hero.help')}</div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <div className="absolute -left-10 -top-10 h-44 w-44 rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-400 opacity-90 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-2xl">
                <img
                  src="/templates/pixelnovate/Pixelnovate-1.png"
                  alt="Pixelnovate AI idea preview"
                  className="h-[26rem] w-full object-cover sm:h-[30rem]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                  <p className="text-sm font-semibold">{t('hero.preview')}</p>
                </div>
              </div>
              <div className="absolute -bottom-8 right-0 grid w-full max-w-[360px] grid-cols-3 gap-3 px-3">
                <img src="/templates/pixelnovate/Pixelnovate-2.png" alt="AI idea preview thumb" className="h-24 w-full rounded-2xl object-cover shadow-lg" />
                <img src="/templates/pixelnovate/Pixelnovate-3.png" alt="AI idea preview thumb" className="h-24 w-full rounded-2xl object-cover shadow-lg" />
                <div className="hidden sm:block rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-500 p-4 text-white shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em]">{t('hero.moreShots')}</p>
                  <p className="mt-2 text-sm font-bold">{t('hero.pixelnovate')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 opacity-70 flex-wrap">
          <img src="/logos/slack.svg" alt="Slack" className="h-6 w-auto" />
          <img src="/logos/google.svg" alt="Google" className="h-6 w-auto" />
          <img src="/logos/microsoft.svg" alt="Microsoft" className="h-6 w-auto" />
          <img src="/logos/airbnb.svg" alt="Airbnb" className="h-6 w-auto" />
          <img src="/logos/hubspot.svg" alt="HubSpot" className="h-6 w-auto" />
        </div>
      </div>
    </section>
  )
}
