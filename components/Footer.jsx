'use client'

import Link from 'next/link'
import { useI18n } from './I18nProvider'

export default function Footer(){
  const { t } = useI18n()
  const socialLinks = [
    {
      label: 'LinkedIn',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.94 8.98H3.75V20h3.19V8.98ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.72c0-3.01-1.61-4.41-3.77-4.41a3.25 3.25 0 0 0-2.93 1.61h-.04V8.98h-3.05V20h3.18v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.64 1.78 2.92V20h3.18l-.4-6.28Z" />
        </svg>
      ),
    },
    {
      label: 'X',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.8 10.47 20.83 2h-1.67l-6.1 7.35L8.19 2H2.56l7.37 11.12L2.56 22h1.67l6.44-7.76L15.81 22h5.63l-7.64-11.53Zm-2.28 2.74-.75-1.11-5.94-8.8h2.56l4.8 7.12.75 1.11 6.23 9.24h-2.56l-5.09-7.56Z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="15.5" height="15.5" x="4.25" y="4.25" rx="4" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16.75" cy="7.35" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: 'YouTube',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.58 7.2a2.75 2.75 0 0 0-1.94-1.95C17.93 4.8 12 4.8 12 4.8s-5.93 0-7.64.45A2.75 2.75 0 0 0 2.42 7.2 28.65 28.65 0 0 0 2 12a28.65 28.65 0 0 0 .42 4.8 2.75 2.75 0 0 0 1.94 1.95c1.71.45 7.64.45 7.64.45s5.93 0 7.64-.45a2.75 2.75 0 0 0 1.94-1.95A28.65 28.65 0 0 0 22 12a28.65 28.65 0 0 0-.42-4.8ZM10 15.2V8.8l5.4 3.2L10 15.2Z" />
        </svg>
      ),
    },
  ]
  const categoryLinks = ['SaaS', 'E-commerce', 'Healthcare', 'Education', 'Real Estate']

  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/brand/themezyo-icon.png"
                alt="Themezyo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-extrabold text-slate-800">Themezyo</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">{t('footer.tagline')}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {categoryLinks.map((category) => (
                <Link
                  key={category}
                  href={`/templates?category=${encodeURIComponent(category)}`}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-bold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {category}
                </Link>
              ))}
            </div>

            {/* Social links can be restored after the accounts are created.
            <div className="mt-6 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className="h-5 w-5">{item.icon}</span>
                </a>
              ))}
            </div>
            */}
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h5 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-800">{t('footer.quick')}</h5>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li><Link href="/" className="transition hover:text-blue-600">{t('nav.home')}</Link></li>
                <li><Link href="/templates" className="transition hover:text-blue-600">{t('nav.templates')}</Link></li>
                <li><Link href="/categories" className="transition hover:text-blue-600">{t('nav.categories')}</Link></li>
                <li><Link href="/templates?category=SaaS" className="transition hover:text-blue-600">SaaS Templates</Link></li>
                <li><Link href="/templates?category=Healthcare" className="transition hover:text-blue-600">Healthcare Templates</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-800">{t('footer.resources')}</h5>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li><Link href="/help" className="transition hover:text-blue-600">{t('footer.documentation')}</Link></li>
                <li><Link href="/help" className="transition hover:text-blue-600">{t('footer.help')}</Link></li>
                <li><Link href="/templates" className="transition hover:text-blue-600">{t('footer.releases')}</Link></li>
                <li><Link href="/contact" className="transition hover:text-blue-600">{t('common.requestPaidSupport')}</Link></li>
                <li><Link href="/terms" className="transition hover:text-blue-600">{t('footer.license')}</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-800">{t('footer.company')}</h5>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li><Link href="/about" className="transition hover:text-blue-600">{t('nav.about')}</Link></li>
                <li><Link href="/contact" className="transition hover:text-blue-600">{t('nav.contact')}</Link></li>
                <li><Link href="/privacy" className="transition hover:text-blue-600">{t('footer.privacy')}</Link></li>
                <li><Link href="/terms" className="transition hover:text-blue-600">{t('footer.terms')}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">&copy; 2026 Themezyo. {t('footer.rights')}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/templates" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700">
                Browse Templates
              </Link>
              <Link href="/contact" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                Request Customization
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
