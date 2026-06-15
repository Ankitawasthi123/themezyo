import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Themezyo handles contact messages, newsletter subscriptions, and website usage information.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: June 15, 2026</p>

          <div className="mt-8 space-y-7 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-slate-800">Information we collect</h2>
              <p className="mt-2 leading-7">We collect information you submit through contact, newsletter, and template request forms, such as your name, email address, subject, and message.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-800">How we use information</h2>
              <p className="mt-2 leading-7">We use submitted information to respond to requests, provide support, send requested updates, improve our templates, and protect the service from misuse.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-800">Service providers</h2>
              <p className="mt-2 leading-7">We may use hosting, database, email, and analytics providers to operate the website. These providers process information only as needed to deliver their services.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-800">Your choices</h2>
              <p className="mt-2 leading-7">You may request access, correction, or deletion of information you submitted, and you may unsubscribe from marketing emails at any time.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-800">Contact</h2>
              <p className="mt-2 leading-7">For privacy questions, contact us through the website contact form.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
