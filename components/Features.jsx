'use client'

import { useI18n } from './I18nProvider'

export default function Features(){
  const { t } = useI18n()
  const labels = t('features.items')
  const icons = ['/icons/responsive.svg', '/icons/customize.svg', '/icons/performance.svg', '/icons/updates.svg']
  const items = labels.map(([title, desc], index) => ({ title, desc, icon: icons[index] }))
  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">{t('features.title')}</h3>
          <p className="mt-3 text-gray-600">{t('features.intro')}</p>
        </div>
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(it=> (
            <div key={it.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                <img src={it.icon} alt={it.title} className="h-6 w-6" style={{filter:'invert(0.3) hue-rotate(250deg) saturate(2)'}} />
              </div>
              <h4 className="font-bold text-slate-800">{it.title}</h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
