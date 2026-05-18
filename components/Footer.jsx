'use client'

import Link from 'next/link'
import { useI18n } from './I18nProvider'

export default function Footer(){
  const { t } = useI18n()
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <img
              src="/brand/themezyo-logo.png"
              alt="Themezyo"
              className="h-16 w-auto max-w-[220px] object-contain"
            />
            <p className="mt-2 text-sm text-gray-600 max-w-md">{t('footer.tagline')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h5 className="text-sm font-semibold">{t('footer.quick')}</h5>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li><Link href="/" className="hover:text-indigo-600">{t('nav.home')}</Link></li>
                <li><Link href="/templates" className="hover:text-indigo-600">{t('nav.templates')}</Link></li>
                <li><Link href="/categories" className="hover:text-indigo-600">{t('nav.categories')}</Link></li>
                <li><Link href="/help" className="hover:text-indigo-600">{t('footer.license')}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold">{t('footer.resources')}</h5>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li><Link href="/help" className="hover:text-indigo-600">{t('footer.documentation')}</Link></li>
                <li><Link href="/help" className="hover:text-indigo-600">{t('footer.help')}</Link></li>
                <li><Link href="/templates" className="hover:text-indigo-600">{t('footer.releases')}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold">{t('footer.company')}</h5>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li><Link href="/about" className="hover:text-indigo-600">{t('nav.about')}</Link></li>
                <li><Link href="/contact" className="hover:text-indigo-600">{t('nav.contact')}</Link></li>
                <li><Link href="/help" className="hover:text-indigo-600">{t('footer.licensing')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm text-gray-500 border-t pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>&copy; 2026 Themezyo. {t('footer.rights')}</div>
            <div className="flex gap-4">
              <Link href="/help" className="hover:text-indigo-600">{t('footer.privacy')}</Link>
              <Link href="/help" className="hover:text-indigo-600">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
