import LegalContent from '../../components/LegalContent'

export const metadata = {
  title: 'Website Disclaimer',
  description: 'Read important information about Themezyo templates, demonstrations, and third-party services.',
  alternates: { canonical: '/disclaimer' },
}

export default function DisclaimerPage() {
  return <LegalContent type="disclaimer" />
}
