import '../styles/globals.css'
import { I18nProvider } from '../components/I18nProvider'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Themezyo - Free Responsive HTML & AI Website Templates',
    template: '%s | Themezyo',
  },
  description: 'Download free responsive HTML and AI website templates for SaaS startups, agencies, online stores, real estate platforms, creators, and global businesses.',
  keywords: [
    'free responsive HTML templates',
    'AI website templates',
    'startup website templates',
    'SaaS website templates',
    'business website templates',
    'landing page templates',
    'agency website templates',
    'e-commerce HTML templates',
    'developer website templates',
    'free website templates',
    'Themezyo',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
