'use client'

import Link from 'next/link'
import { getTemplatePageCount, templates } from '../data/templates'
import { useI18n } from './I18nProvider'

export default function Hero(){
  const { t } = useI18n()
  const templateCount = templates.length
  const pageCount = getTemplatePageCount()

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
              <div className="flex items-center gap-3"><span className="font-semibold text-gray-900">{templateCount}</span> {t('hero.templates')}</div>
              <div className="flex items-center gap-3"><span className="font-semibold text-gray-900">{pageCount}</span> HTML pages</div>
              <div className="flex items-center gap-3"><span className="font-semibold text-gray-900">{t('hero.paid')}</span> {t('hero.help')}</div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 p-4 shadow-2xl">
                <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-indigo-500 via-fuchsia-500 to-amber-400" />

                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">Featured template</p>
                      <h2 className="mt-1 text-xl font-extrabold text-gray-950">AIFlow SaaS Kit</h2>
                    </div>
                    <Link href="/templates/aiflow" className="rounded-full bg-gray-950 px-4 py-2 text-xs font-bold text-white">
                      View
                    </Link>
                  </div>

                  <a href="/templates/aiflow/index.html" target="_blank" rel="noreferrer" className="group block">
                    <div className="rounded-2xl bg-gray-950 p-2.5 shadow-xl">
                      <div className="mb-2 flex items-center justify-between px-1">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">index.html</span>
                      </div>
                      <div className="overflow-hidden rounded-2xl bg-white">
                        <img
                          src="/templates/aiflow/screenshots/home.png"
                          alt="AIFlow SaaS template screenshot"
                          className="h-48 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02] sm:h-56"
                        />
                      </div>
                    </div>
                  </a>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                      <p className="text-xl font-extrabold text-indigo-600">26</p>
                      <p className="mt-1 text-[11px] font-semibold text-gray-500">HTML pages</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                      <p className="text-xl font-extrabold text-emerald-600">4</p>
                      <p className="mt-1 text-[11px] font-semibold text-gray-500">Screenshots</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                      <p className="text-xl font-extrabold text-amber-500">Free</p>
                      <p className="mt-1 text-[11px] font-semibold text-gray-500">Download</p>
                    </div>
                  </div>
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
