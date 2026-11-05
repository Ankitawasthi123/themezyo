import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

const helpFaqs = [
  ['How do I use a template?', 'Open a template details page, review the screenshots and live preview, then download the source package.'],
  ['Are the templates free?', 'Yes. The listed template downloads are free for personal and commercial projects, subject to the license terms.'],
  ['Is customization free?', 'No. Downloads are free, while setup, framework conversion, design changes, and custom development are quoted separately.'],
  ['Can I customize the files myself?', 'Yes. The packages include editable source files intended for developers and project teams.'],
  ['Can I request a custom template?', 'Yes. Use the contact page or customization button and describe the pages, features, and framework you need.'],
  ['What file formats do I get?', 'Each details page lists the included formats and files before you download.'],
  ['Can I use templates in different countries?', 'Yes. You can adapt the language, content, currency, and business details for your target market.'],
]

export const metadata = {
  title: 'Help',
  description: 'Find answers about downloading, previewing, customizing, and using Themezyo free HTML website templates.',
  alternates: {
    canonical: '/help',
  },
}

export default function HelpLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteUrl}/help#faq`,
    url: `${siteUrl}/help`,
    mainEntity: helpFaqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <>
      <Script
        id="help-faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}
