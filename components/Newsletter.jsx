'use client'

import { useState } from 'react'
import { useI18n } from './I18nProvider'
import { readJsonResponse } from '../lib/readJsonResponse'

export default function Newsletter(){
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

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
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 shadow-sm sm:px-10 lg:px-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_420px]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Template updates</p>
              <h4 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-slate-800 sm:text-4xl lg:text-5xl">{t('newsletter.title')}</h4>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">{t('newsletter.intro')}</p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-gray-50 p-3">
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <input aria-label="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={t('newsletter.placeholder')} className="min-h-14 flex-1 rounded-lg border border-gray-200 bg-white px-5 text-base font-medium text-slate-800 outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                <button disabled={status === 'loading'} className="min-h-12 rounded-lg bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70">
                  {status === 'loading' ? 'Subscribing...' : t('newsletter.subscribe')}
                </button>
              </div>
              {message ? (
                <p className={`mt-4 px-1 text-sm font-semibold ${status === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>{message}</p>
              ) : null}
              <p className="mt-4 px-1 text-sm text-gray-500">New releases, customization tips, and project updates.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
