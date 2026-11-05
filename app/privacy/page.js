import LegalContent from '../../components/LegalContent'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Themezyo handles contact messages, newsletter subscriptions, and website usage information.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return <LegalContent type="privacy" />
}
