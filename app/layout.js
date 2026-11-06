import '../styles/globals.css'
import { I18nProvider } from '../components/I18nProvider'
import ScrollReveal from '../components/ScrollReveal'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Themezyo - AI-Based Solutions and End-to-End Product Development',
    template: '%s | Themezyo',
  },
  description: 'Design, build, and launch end-to-end web and mobile applications with full-stack engineering, practical AI integration, deployment, and ongoing support.',
  keywords: [
    'Themezyo',
    'Themezyo AI solutions',
    'AI-based business solutions',
    'AI application development',
    'custom AI software development',
    'end-to-end product development',
    'full-stack application development',
    'AI SaaS solutions',
    'healthcare AI solutions',
    'ecommerce AI solutions',
    'real estate AI solutions',
    'education AI solutions',
    'home services AI solutions',
    'AI workflow automation',
    'AI product ideas',
    'web and mobile app development',
    'source code prototypes',
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
    title: 'Themezyo - AI-Based Solutions and End-to-End Product Development',
    description: 'Build complete web and mobile products with full-stack engineering, useful AI capabilities, integrations, deployment, and ongoing support.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Themezyo - AI-Based Solutions and End-to-End Product Development',
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
        inLanguage: ['en', 'fr', 'ar', 'de', 'es', 'pt', 'hi', 'ja'],
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
        <Script id="tawk-live-chat" strategy="afterInteractive">
          {`
            window.Tawk_API = window.Tawk_API || {};
            window.Tawk_LoadStart = new Date();
            (function () {
              var s1 = document.createElement('script');
              var s0 = document.getElementsByTagName('script')[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/6aec8c639da81c3c2dd115be/1k6m08psb';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
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
