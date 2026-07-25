'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useI18n } from '../../components/I18nProvider'
import { readJsonResponse } from '../../lib/readJsonResponse'

const initialFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@themezyo.com'

export default function ContactPage(){
  const { t } = useI18n()
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  function handleChange(event) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [event.target.name]: event.target.value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')
    setFormErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })
      const result = await readJsonResponse(response)

      if (!response.ok) {
        if (result.errors) {
          setFormErrors(result.errors)
        }

        throw new Error(result.message || 'Unable to send message right now.')
      }

      setFormValues(initialFormValues)
      setStatus('success')
      setMessage('Message sent successfully.')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Unable to send message right now.')
    }
  }

  function fieldClass(field) {
    const hasError = formErrors[field]

    return `mt-2 min-h-11 w-full rounded-lg border px-4 text-sm outline-none transition focus:ring-4 ${hasError ? 'border-rose-300 bg-rose-50 focus:border-rose-400 focus:ring-rose-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'}`
  }

  function renderError(field) {
    return formErrors[field] ? <p className="mt-1.5 text-xs font-semibold text-rose-600">{formErrors[field]}</p> : null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="border-b border-gray-200 bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">{t('contact.title')}</h1>
            <p className="mt-3 text-gray-600">{t('contact.intro')}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <aside className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">Support</p>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-800">Need help with a template?</h2>
              <p className="mt-3 leading-7 text-gray-600">
                Send template questions, customization requests, download issues, and setup support details.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-gray-500">Email</p>
                  <a className="mt-1 inline-block font-bold text-blue-600 hover:text-blue-700" href={`mailto:${supportEmail}`}>
                    {supportEmail}
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500">Best for</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Template setup, paid customization, framework conversion, bug reports, and account or download questions.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500">Download help</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    If you are not able to download a template, email us and we can send you a direct download link for the file.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500">Helpful details</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Include the template name, page link, your preferred framework, and what you want changed.
                  </p>
                </div>
              </div>
            </aside>

            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800">{t('contact.name')}</label>
                    <input type="text" name="name" value={formValues.name} onChange={handleChange} className={fieldClass('name')} placeholder={t('contact.namePlaceholder')} />
                    {renderError('name')}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800">{t('contact.email')}</label>
                    <input type="email" name="email" value={formValues.email} onChange={handleChange} className={fieldClass('email')} placeholder="your@email.com" />
                    {renderError('email')}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800">{t('contact.subject')}</label>
                    <input type="text" name="subject" value={formValues.subject} onChange={handleChange} className={fieldClass('subject')} placeholder={t('contact.subjectPlaceholder')} />
                    {renderError('subject')}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800">{t('contact.message')}</label>
                    <textarea name="message" value={formValues.message} onChange={handleChange} className={`${fieldClass('message')} h-32 py-3`} placeholder={t('contact.messagePlaceholder')}></textarea>
                    {renderError('message')}
                  </div>
                  {message ? (
                    <p className={`rounded-lg px-4 py-3 text-sm font-semibold ${status === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>{message}</p>
                  ) : null}
                  <button disabled={status === 'loading'} className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 font-bold text-white shadow-sm transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70">
                    {status === 'loading' ? 'Sending...' : t('common.sendMessage')}
                  </button>
                </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
