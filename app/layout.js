import '../styles/globals.css'
import { I18nProvider } from '../components/I18nProvider'
import ScrollReveal from '../components/ScrollReveal'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Themezyo - Free Responsive HTML & AI Website Templates',
    template: '%s | Themezyo',
  },
  description: 'Design, build, and launch end-to-end web and mobile applications with full-stack engineering, practical AI integration, deployment, and ongoing support.',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: '/brand/themezyo-icon.png',
  },
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
    description: 'Build complete web and mobile products with full-stack engineering, useful AI capabilities, integrations, deployment, and ongoing support.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Themezyo - Free Responsive HTML & AI Website Templates',
    description: 'End-to-end application development for startups, businesses, creators, and product teams.',
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
        description: 'End-to-end web, mobile, and AI application development for startups, teams, and businesses.',
        areaServed: 'Worldwide',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Themezyo',
        description: 'Full-stack application development with practical AI integration, deployment, and ongoing support.',
        inLanguage: ['en', 'fr', 'ar', 'de'],
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/plain" href={`${siteUrl}/llms.txt`} title="Themezyo AI content guide" />
      </head>
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xpjp8h1zya");
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ScrollReveal />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
