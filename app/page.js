import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import TemplatesGrid from '../components/TemplatesGrid'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Categories />
        <TemplatesGrid />
        <Features />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
