import LegalContent from '../../components/LegalContent'

export const metadata = {
  title: 'Cookie Policy',
  description: 'Learn how Themezyo uses cookies, browser storage, analytics, and live-chat services.',
  alternates: { canonical: '/cookies' },
}

export default function CookiePolicyPage() {
  return <LegalContent type="cookies" />
}
