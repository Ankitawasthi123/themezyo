'use client'

import Link from 'next/link'
import { useI18n } from './I18nProvider'

export default function Footer(){
  const { t } = useI18n()
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <img
              src="/brand/themezyo-icon.png"
              alt="Themezyo"
              className="h-14 w-14 object-contain"
            />
            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">{t('footer.tagline')}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <h5 className="text-sm font-bold text-slate-800">{t('footer.quick')}</h5>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li><Link href="/" className="hover:text-blue-600">{t('nav.home')}</Link></li>
                <li><Link href="/templates" className="hover:text-blue-600">{t('nav.templates')}</Link></li>
                <li><Link href="/categories" className="hover:text-blue-600">{t('nav.categories')}</Link></li>
                <li><Link href="/help" className="hover:text-blue-600">{t('footer.license')}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-800">{t('footer.resources')}</h5>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li><Link href="/help" className="hover:text-blue-600">{t('footer.documentation')}</Link></li>
                <li><Link href="/help" className="hover:text-blue-600">{t('footer.help')}</Link></li>
                <li><Link href="/templates" className="hover:text-blue-600">{t('footer.releases')}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-800">{t('footer.company')}</h5>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li><Link href="/about" className="hover:text-blue-600">{t('nav.about')}</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600">{t('nav.contact')}</Link></li>
                <li><Link href="/help" className="hover:text-blue-600">{t('footer.licensing')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-100 pt-6 text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>&copy; 2026 Themezyo. {t('footer.rights')}</div>
            <div className="flex gap-4">
              <Link href="/help" className="hover:text-blue-600">{t('footer.privacy')}</Link>
              <Link href="/help" className="hover:text-blue-600">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
