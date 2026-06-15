import '../styles/globals.css'
import { I18nProvider } from '../components/I18nProvider'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'),
  title: {
    default: 'Themezyo - Free AI Website Templates',
    template: '%s | Themezyo',
  },
  description: 'Download free AI website templates for SaaS, social media, e-commerce, real estate, resume builders, agencies, and creator projects.',
  keywords: [
    'free AI website templates',
    'HTML templates',
    'SaaS template',
    'AI templates',
    'website templates',
    'Themezyo',
  ],
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
    title: 'Themezyo - Free AI Website Templates',
    description: 'Explore free AI-ready HTML templates with live previews, screenshots, and downloads.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Themezyo - Free AI Website Templates',
    description: 'Explore free AI-ready HTML templates with live previews, screenshots, and downloads.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><I18nProvider>{children}</I18nProvider></body>
    </html>
  )
}
