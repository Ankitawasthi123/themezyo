import '../styles/globals.css'
import { I18nProvider } from '../components/I18nProvider'

export const metadata = {
  title: 'Themezyo - AI-Based Ideas',
  description: 'Discover AI-based business, content, product, and launch ideas for creators, founders, teams, and agencies.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><I18nProvider>{children}</I18nProvider></body>
    </html>
  )
}
