import Header from '../components/Header'
import Hero from '../components/Hero'
import SmartTemplatePicker from '../components/SmartTemplatePicker'
import Categories from '../components/Categories'
import TemplatesGrid from '../components/TemplatesGrid'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Launch Faster With Ready-to-Use Templates',
  description: 'Browse free responsive HTML templates for SaaS startups, agencies, e-commerce stores, real estate platforms, resume builders, and creator businesses.',
  alternates: {
    canonical: '/',
  },  
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <SmartTemplatePicker />
        <Categories />
        <TemplatesGrid />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
