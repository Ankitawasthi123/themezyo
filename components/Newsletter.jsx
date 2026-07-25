'use client'

import { useState } from 'react'
import { useI18n } from './I18nProvider'
import { readJsonResponse } from '../lib/readJsonResponse'

export default function Newsletter(){
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const benefits = [
    'New free template releases',
    'Fresh screenshots and preview links',
    'Customization and launch notes',
  ]

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const result = await readJsonResponse(response)

      if (!response.ok) {
        throw new Error(result.message || 'Unable to subscribe right now.')
      }

      setEmail('')
      setStatus('success')
      setMessage('Subscribed successfully.')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Unable to subscribe right now.')
    }
  }

  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-emerald-50 shadow-sm">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1fr_400px]">
            <div>
              <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Template updates</p>
                <h4 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-800 sm:text-4xl">{t('newsletter.title')}</h4>
                <p className="mt-4 max-w-2xl leading-7 text-gray-600">{t('newsletter.intro')}</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="rounded-lg border border-white bg-white/75 p-3 shadow-sm">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="mt-2 text-sm font-bold leading-5 text-slate-800">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex border-t border-blue-100 bg-white/80 p-5 sm:p-6 lg:border-l lg:border-t-0">
              <div className="flex w-full flex-col justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h5 className="text-lg font-extrabold text-slate-800">Join the template list</h5>
                <p className="mt-2 text-sm leading-6 text-gray-600">Get occasional updates when new templates, screenshots, and practical editing notes are published.</p>

                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="flex flex-col gap-3">
                    <input aria-label="email" type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={t('newsletter.placeholder')} className="min-h-12 flex-1 rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                    <button disabled={status === 'loading'} className="min-h-11 rounded-lg bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70">
                      {status === 'loading' ? 'Subscribing...' : t('newsletter.subscribe')}
                    </button>
                  </div>
                  {message ? (
                    <p className={`mt-4 px-1 text-sm font-semibold ${status === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>{message}</p>
                  ) : null}
                  <p className="mt-4 px-1 text-xs leading-5 text-gray-500">No spam. Just template releases and useful project updates.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
