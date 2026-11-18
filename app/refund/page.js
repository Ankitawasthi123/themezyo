import LegalContent from '../../components/LegalContent'

export const metadata = {
  title: 'Refund Policy',
  description: 'Review Themezyo refund terms for digital products, custom services, and billing errors.',
  alternates: { canonical: '/refund' },
}

export default function RefundPage() {
  return <LegalContent type="refund" />
}
