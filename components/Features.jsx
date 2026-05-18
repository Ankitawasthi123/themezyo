'use client'

import { useI18n } from './I18nProvider'

export default function Features(){
  const { t } = useI18n()
  const labels = t('features.items')
  const icons = ['/icons/responsive.svg', '/icons/customize.svg', '/icons/performance.svg', '/icons/updates.svg']
  const items = labels.map(([title, desc], index) => ({ title, desc, icon: icons[index] }))
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{t('features.title')}</h3>
        <p className="text-center text-gray-600 mt-2">{t('features.intro')}</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(it=> (
            <div key={it.title} className="bg-white rounded-xl p-6 shadow-sm">
              <img src={it.icon} alt={it.title} className="w-8 h-8 mb-4 text-indigo-600" style={{filter:'invert(0.3) hue-rotate(250deg) saturate(2)'}} />
              <h4 className="font-semibold text-gray-900">{it.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
