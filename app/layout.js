import '../styles/globals.css'
import { I18nProvider } from '../components/I18nProvider'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Themezyo - Free Responsive HTML & AI Website Templates',
    template: '%s | Themezyo',
  },
  description: 'Download free responsive HTML and AI website templates for SaaS startups, agencies, online stores, real estate platforms, creators, and global businesses.',
  keywords: [
    'Themezyo',
    'Themezyo templates',
    'free HTML website templates',
    'free responsive HTML templates',
    'responsive website templates',
    'download free website templates',
    'free website templates with source code',
    'HTML CSS JavaScript templates',
    'AI-ready website templates',
    'AI SaaS website templates',
    'startup landing page templates',
    'SaaS landing page templates',
    'digital agency website templates',
    'ecommerce website templates',
    'real estate website templates',
    'healthcare website templates',
    'clinic website templates',
    'education website templates',
    'service business website templates',
    'portfolio website templates',
    'business landing page templates',
    'landing page templates',
    'mobile friendly HTML templates',
    'commercial use website templates',
  ],
  category: 'technology',
  authors: [{ name: 'Themezyo' }],
  creator: 'Themezyo',
  publisher: 'Themezyo',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'Themezyo',
    locale: 'en_US',
    alternateLocale: ['en_CA', 'en_GB', 'en_AE'],
    title: 'Themezyo - Free Responsive HTML & AI Website Templates',
    description: 'Explore free responsive website templates with live previews, screenshots, source files, and downloads for modern global projects.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Themezyo - Free Responsive HTML & AI Website Templates',
    description: 'Explore free responsive website templates for startups, agencies, online stores, creators, and product teams.',
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Themezyo',
        url: siteUrl,
        description: 'Free responsive HTML and AI website templates for global creators, startups, agencies, and businesses.',
        areaServed: 'Worldwide',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Themezyo',
        description: 'Free responsive HTML and AI website templates for modern web projects.',
        inLanguage: ['en', 'fr', 'ar', 'de'],
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
    ],
  }

  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TMHWVJKDQ3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TMHWVJKDQ3');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
