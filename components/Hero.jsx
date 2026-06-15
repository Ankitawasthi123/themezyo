'use client'

import Link from 'next/link'
import { Formik } from 'formik'
import { useState } from 'react'
import AiCanvasBackground from './AiCanvasBackground'
import { useI18n } from './I18nProvider'
import { readJsonResponse } from '../lib/readJsonResponse'

const ideaInitialValues = {
  name: '',
  email: '',
  ideaTitle: '',
  category: 'SaaS',
  details: '',
}

export default function Hero(){
  const { t } = useI18n()
  const [isIdeaModalOpen, setIsIdeaModalOpen] = useState(false)
  const [isIdeaSubmitted, setIsIdeaSubmitted] = useState(false)
  const [ideaSubmitError, setIdeaSubmitError] = useState('')

  function openIdeaModal() {
    setIsIdeaSubmitted(false)
    setIdeaSubmitError('')
    setIsIdeaModalOpen(true)
  }

  function closeIdeaModal() {
    setIsIdeaModalOpen(false)
  }

  function validateIdeaForm(values) {
    const errors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!values.name.trim()) errors.name = t('ideaModal.nameRequired')
    if (!values.email.trim()) {
      errors.email = t('ideaModal.emailRequired')
    } else if (!emailPattern.test(values.email)) {
      errors.email = t('ideaModal.emailInvalid')
    }
    if (!values.ideaTitle.trim()) errors.ideaTitle = t('ideaModal.ideaTitleRequired')
    if (!values.details.trim()) {
      errors.details = t('ideaModal.detailsRequired')
    } else if (values.details.trim().length < 20) {
      errors.details = t('ideaModal.detailsShort')
    }

    return errors
  }

  async function handleIdeaSubmit(values, helpers) {
    setIdeaSubmitError('')

    try {
      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const result = await readJsonResponse(response)

      if (!response.ok) {
        if (result.errors) {
          helpers.setErrors(result.errors)
        }

        throw new Error(result.message || t('ideaModal.submitError'))
      }

      helpers.resetForm()
      setIsIdeaSubmitted(true)
    } catch (error) {
      setIdeaSubmitError(error.message || t('ideaModal.submitError'))
    } finally {
      helpers.setSubmitting(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <AiCanvasBackground intensity={1.14} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <p className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">{t('hero.eyebrow')}</p>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight">
              {t('hero.titlePrefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-gray-600">{t('hero.description')}</p>
            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold text-gray-800">{t('hero.requirement')}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 text-white shadow-md transition hover:shadow-lg" href="/templates">{t('hero.download')}</Link>
              <button type="button" onClick={openIdeaModal} className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">{t('hero.shareIdea')}</button>
            </div>
          </div>
        </div>
      </div>

      {isIdeaModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/55 px-4 py-6">
          <div className="absolute inset-0" onClick={closeIdeaModal} />
          <div role="dialog" aria-modal="true" aria-labelledby="idea-modal-title" className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-blue-100 bg-white p-6 shadow-2xl sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 to-sky-500" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-bold uppercase tracking-wide text-blue-600">{t('ideaModal.eyebrow')}</p>
                <h2 id="idea-modal-title" className="mt-2 text-2xl font-extrabold text-slate-800 sm:text-3xl">{t('ideaModal.title')}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">{t('ideaModal.intro')}</p>
              </div>
              <button type="button" onClick={closeIdeaModal} aria-label={t('ideaModal.close')} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-blue-100 text-xl leading-none text-gray-500 transition hover:bg-blue-50 hover:text-blue-700">
                x
              </button>
            </div>

            {isIdeaSubmitted ? (
              <div className="mt-7 rounded-xl border border-blue-100 bg-blue-50 p-5 text-slate-800">
                <h3 className="text-lg font-bold text-blue-900">{t('ideaModal.successTitle')}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{t('ideaModal.successText')}</p>
                <button type="button" onClick={closeIdeaModal} className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700">{t('ideaModal.done')}</button>
              </div>
            ) : (
              <Formik initialValues={ideaInitialValues} validate={validateIdeaForm} onSubmit={handleIdeaSubmit}>
                {({ values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit }) => {
                  const fieldClass = (field) => {
                    const hasError = touched[field] && errors[field]
                    return `mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:ring-4 ${hasError ? 'border-rose-300 bg-rose-50 focus:border-rose-400 focus:ring-rose-100' : 'border-gray-200 bg-white focus:border-blue-500 focus:ring-blue-100'}`
                  }
                  const showError = (field) => touched[field] && errors[field] ? <p className="mt-1.5 text-xs font-semibold text-rose-600">{errors[field]}</p> : null

                  return (
                    <form onSubmit={handleSubmit} noValidate className="mt-7 grid gap-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="text-sm font-semibold text-slate-800">{t('ideaModal.name')}</span>
                          <input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" className={fieldClass('name')} placeholder={t('ideaModal.namePlaceholder')} />
                          {showError('name')}
                        </label>
                        <label className="block">
                          <span className="text-sm font-semibold text-slate-800">{t('ideaModal.email')}</span>
                          <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" className={fieldClass('email')} placeholder={t('ideaModal.emailPlaceholder')} />
                          {showError('email')}
                        </label>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="text-sm font-semibold text-slate-800">{t('ideaModal.ideaTitle')}</span>
                          <input name="ideaTitle" value={values.ideaTitle} onChange={handleChange} onBlur={handleBlur} type="text" className={fieldClass('ideaTitle')} placeholder={t('ideaModal.ideaTitlePlaceholder')} />
                          {showError('ideaTitle')}
                        </label>
                        <label className="block">
                          <span className="text-sm font-semibold text-slate-800">{t('ideaModal.category')}</span>
                          <select name="category" value={values.category} onChange={handleChange} onBlur={handleBlur} className={fieldClass('category')}>
                            <option value="SaaS">{t('ideaModal.categorySaas')}</option>
                            <option value="E-commerce">{t('ideaModal.categoryEcommerce')}</option>
                            <option value="Business">{t('ideaModal.categoryBusiness')}</option>
                            <option value="Portfolio">{t('ideaModal.categoryPortfolio')}</option>
                            <option value="Other">{t('ideaModal.categoryOther')}</option>
                          </select>
                        </label>
                      </div>

                      <label className="block">
                        <span className="text-sm font-semibold text-slate-800">{t('ideaModal.details')}</span>
                        <textarea name="details" value={values.details} onChange={handleChange} onBlur={handleBlur} className={`${fieldClass('details')} min-h-32`} placeholder={t('ideaModal.detailsPlaceholder')}></textarea>
                        {showError('details')}
                      </label>

                      {ideaSubmitError ? (
                        <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">{ideaSubmitError}</p>
                      ) : null}

                      <button type="submit" disabled={isSubmitting} className="rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70">
                        {isSubmitting ? t('ideaModal.submitting') : t('ideaModal.submit')}
                      </button>
                    </form>
                  )
                }}
              </Formik>
            )}
          </div>
        </div>
      ) : null}
    </section>
  )
}
