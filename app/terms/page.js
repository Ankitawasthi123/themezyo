import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Terms of Service',
  description: 'Review the terms for using Themezyo website templates, downloads, previews, and customization services.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">Terms of Service</h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: June 15, 2026</p>

          <div className="mt-8 space-y-7 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-slate-800">Template use</h2>
              <p className="mt-2 leading-7">Unless a template states otherwise, you may use and modify downloaded templates for personal and commercial projects. You may not resell, redistribute, or publish the source package as a competing template download.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-800">Third-party assets</h2>
              <p className="mt-2 leading-7">Some previews may reference third-party fonts, libraries, images, or services. You are responsible for reviewing and complying with their licenses before production use.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-800">Customization services</h2>
              <p className="mt-2 leading-7">Setup, framework conversion, design changes, and custom development are separate paid services. Scope, pricing, delivery, and support terms are agreed before work begins.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-800">No warranty</h2>
              <p className="mt-2 leading-7">Templates are provided as available. Test security, accessibility, browser support, integrations, and legal compliance for your own project before launch.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-800">Changes</h2>
              <p className="mt-2 leading-7">We may update templates and these terms. Continued use of the website after an update means you accept the revised terms.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
