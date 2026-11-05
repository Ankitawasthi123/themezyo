import LegalContent from '../../components/LegalContent'

export const metadata = {
  title: 'Terms of Service',
  description: 'Review the terms for using Themezyo website templates, downloads, previews, and customization services.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return <LegalContent type="terms" />
}
