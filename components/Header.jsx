'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useI18n } from './I18nProvider'

export default function Header() {
  const { language, languages, setLanguage, t } = useI18n()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/templates', label: t('nav.templates') },
    { href: '/categories', label: t('nav.categories') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/brand/themezyo-icon.png"
                alt="Themezyo"
                className="h-11 w-11 object-contain"
              />
            </Link>

            <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-600">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-blue-600">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="ml-auto flex items-center justify-end gap-2 sm:gap-3">
            <Link href="/help" className="hidden text-sm font-medium text-gray-600 transition hover:text-blue-600 md:inline">{t('nav.docs')}</Link>
            <Link href="/contact" className="hidden text-sm font-medium text-gray-600 transition hover:text-blue-600 md:inline">{t('nav.support')}</Link>
            <Link className="hidden items-center rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:shadow-md sm:inline-flex" href="/services">{t('nav.downloadFree')}</Link>
            {languages.length > 1 ? (
              <label className="relative flex shrink-0 items-center" title={t('nav.language')}>
                <span className="pointer-events-none absolute left-3 text-sm" aria-hidden="true">◎</span>
                <span className="sr-only">{t('nav.language')}</span>
                <select
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                  aria-label={t('nav.language')}
                  className="min-h-10 max-w-[8.5rem] appearance-none rounded-full border border-blue-100 bg-blue-50 py-2 pl-8 pr-7 text-xs font-bold text-blue-800 outline-none transition hover:border-blue-200 hover:bg-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:max-w-none sm:text-sm"
                >
                  {languages.map((item) => (
                    <option key={item.code} value={item.code}>{item.nativeLabel}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2.5 text-[9px] text-blue-700" aria-hidden="true">▼</span>
              </label>
            ) : null}
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 text-xl text-slate-700 lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <span aria-hidden="true">x</span>
              ) : (
                <span className="grid gap-1" aria-hidden="true">
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                </span>
              )}
            </button>
          </div>
        </div>
        {isMenuOpen ? (
          <nav className="grid gap-1 border-t border-gray-100 py-3 lg:hidden">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                {item.label}
              </Link>
            ))}
            <Link href="/help" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700">{t('nav.docs')}</Link>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
