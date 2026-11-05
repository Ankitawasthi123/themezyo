'use client'

import { useI18n } from './I18nProvider'

export default function Features(){
  const { t } = useI18n()
  const labels = t('features.items')
  const icons = ['/icons/responsive.svg', '/icons/customize.svg', '/icons/performance.svg', '/icons/updates.svg']
  const details = [
    ['Product strategy and experience design', 'We shape requirements, user journeys, architecture, and interfaces around a measurable business outcome.'],
    ['Frontend, backend, and cloud delivery', 'We build responsive interfaces, APIs, databases, authentication, integrations, deployment, and monitoring.'],
    ['Useful AI inside the workflow', 'Add assistants, recommendations, search, document intelligence, generation, or automation where they create real value.'],
    ['Iteration after launch', 'Improve the product using feedback, analytics, model evaluation, performance reviews, and new feature releases.'],
  ]
  const items = labels.map(([title, desc], index) => ({
    title,
    desc,
    icon: icons[index],
    detailTitle: details[index]?.[0],
    detailText: details[index]?.[1],
  }))
  const workflow = [
    ['1', 'Discover', 'Define users, requirements, data, and success measures.'],
    ['2', 'Design', 'Plan the architecture, workflows, and product experience.'],
    ['3', 'Build', 'Develop the full stack and integrate the right AI models.'],
    ['4', 'Launch', 'Deploy, monitor, support, and improve the application.'],
  ]

  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">End-to-end delivery</p>
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">{t('features.title')}</h3>
          <p className="mt-3 leading-7 text-gray-600">
            From the first product decision to production deployment, Themezyo brings design, engineering, AI, and ongoing support into one delivery process.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(it=> (
            <div key={it.title} className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-md">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <img src={it.icon} alt="" aria-hidden="true" className="h-7 w-7" style={{filter:'invert(0.3) hue-rotate(250deg) saturate(2)'}} />
              </div>
              <h4 className="text-lg font-bold text-slate-800">{it.title}</h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">{it.desc}</p>
              <div className="mt-5 rounded-lg bg-gray-50 p-4">
                <p className="text-sm font-bold text-slate-800">{it.detailTitle}</p>
                <p className="mt-2 text-sm leading-6 text-gray-600">{it.detailText}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map(([step, title, desc]) => (
              <div key={step} className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-extrabold text-white">{step}</div>
                <div>
                  <p className="font-bold text-slate-800">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
