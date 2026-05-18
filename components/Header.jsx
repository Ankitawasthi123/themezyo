'use client'

import Link from 'next/link'
import { useI18n } from './I18nProvider'

export default function Header() {
  const { language, languages, setLanguage, t } = useI18n()
  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/templates', label: t('nav.templates') },
    { href: '/categories', label: t('nav.categories') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5 md:py-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/brand/themezyo-logo.png"
                alt="Themezyo"
                className="h-12 w-auto max-w-[180px] object-contain"
              />
            </Link>

            <nav className="hidden lg:flex gap-6 text-sm text-gray-600">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-indigo-600">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              aria-label={t('nav.language')}
              className="rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm text-gray-700"
            >
              {languages.map((item) => (
                <option key={item.code} value={item.code}>{item.nativeLabel}</option>
              ))}
            </select>
            <Link href="/help" className="hidden md:inline text-gray-600 hover:text-indigo-600">{t('nav.docs')}</Link>
            <Link href="/contact" className="hidden md:inline text-gray-600 hover:text-indigo-600">{t('nav.support')}</Link>
            <Link className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg text-sm shadow-md" href="/templates">{t('nav.downloadFree')}</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
