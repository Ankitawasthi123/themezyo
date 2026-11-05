import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Application Development Services',
  description:
    'Explore Themezyo services for websites, AI-enabled applications, mobile apps, full-stack platforms, automation, integrations, e-commerce, and ongoing product support.',
  alternates: {
    canonical: '/services',
  },
}

const services = [
  {
    number: '01',
    title: 'Business Websites',
    description:
      'Fast, responsive, conversion-focused websites built around your brand, content, audience, and business goals.',
    capabilities: ['UX and interface design', 'Responsive development', 'CMS and content setup', 'SEO and performance'],
  },
  {
    number: '02',
    title: 'AI Websites and Applications',
    description:
      'Purpose-built products that use AI to improve search, recommendations, content, support, analysis, and decision-making.',
    capabilities: ['AI assistants and chat', 'RAG and semantic search', 'Recommendations and generation', 'Model evaluation and safeguards'],
  },
  {
    number: '03',
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile experiences for customers, teams, marketplaces, communities, and service businesses.',
    capabilities: ['iOS and Android apps', 'Cross-platform development', 'Push notifications and payments', 'API and cloud integration'],
  },
  {
    number: '04',
    title: 'Full-Stack Web Platforms',
    description:
      'Complete SaaS products, portals, dashboards, marketplaces, and internal tools with secure backend systems.',
    capabilities: ['Frontend and backend engineering', 'Databases and APIs', 'Authentication and permissions', 'Admin panels and analytics'],
  },
  {
    number: '05',
    title: 'AI Automation and Agents',
    description:
      'Automate repetitive business processes and connect AI to the tools, documents, and approvals your team already uses.',
    capabilities: ['Workflow automation', 'Document processing', 'Agentic task flows', 'Human review and escalation'],
  },
  {
    number: '06',
    title: 'API and System Integrations',
    description:
      'Connect your application with payment providers, CRMs, communication tools, analytics, and third-party services.',
    capabilities: ['Custom API development', 'Payment and subscription systems', 'CRM and business tools', 'Data migration and synchronization'],
  },
  {
    number: '07',
    title: 'E-commerce Development',
    description:
      'Digital storefronts and commerce platforms designed for smooth discovery, checkout, fulfillment, and customer retention.',
    capabilities: ['Storefront and catalogue UX', 'Cart and secure checkout', 'Inventory and order workflows', 'AI product discovery'],
  },
  {
    number: '08',
    title: 'Modernization and Support',
    description:
      'Improve an existing product, add AI capabilities, resolve performance issues, and keep the application reliable after launch.',
    capabilities: ['Application modernization', 'AI feature integration', 'Performance and security reviews', 'Monitoring and ongoing releases'],
  },
]

const process = [
  ['Discover', 'Clarify the users, business outcome, requirements, constraints, and success measures.'],
  ['Design', 'Define the experience, architecture, data flows, AI approach, and delivery roadmap.'],
  ['Build', 'Develop, integrate, test, and review the complete application in focused releases.'],
  ['Launch and improve', 'Deploy, monitor, support users, measure quality, and continue improving the product.'],
]

const technologyTracks = [
  {
    number: '01',
    title: 'Web and Frontend',
    description: 'Responsive interfaces, dashboards, portals, and high-performance customer experiences.',
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Backend and APIs',
    description: 'Secure application logic, services, authentication, integrations, and scalable APIs.',
    technologies: ['Node.js', 'Python', 'FastAPI', 'Django', 'Express', 'REST and GraphQL'],
  },
  {
    number: '03',
    title: 'Mobile Applications',
    description: 'Cross-platform and native-ready mobile products connected to your backend and business systems.',
    technologies: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android', 'Firebase'],
  },
  {
    number: '04',
    title: 'AI and Data',
    description: 'Production AI workflows grounded in business data, evaluation, observability, and safeguards.',
    technologies: ['OpenAI', 'Anthropic', 'Gemini', 'LangChain', 'Vector Databases', 'RAG Pipelines'],
  },
  {
    number: '05',
    title: 'Data and Storage',
    description: 'Reliable structured, document, cache, search, and object storage selected for the workload.',
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Elasticsearch'],
  },
  {
    number: '06',
    title: 'Cloud and DevOps',
    description: 'Repeatable deployment, monitoring, security, scaling, and delivery automation.',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Vercel', 'Docker', 'GitHub Actions'],
  },
  {
    number: '07',
    title: 'Commerce and Payments',
    description: 'Storefront, subscription, invoicing, checkout, and payment workflows for digital products.',
    technologies: ['Stripe', 'PayPal', 'Shopify', 'WooCommerce', 'Razorpay', 'Subscription Billing'],
  },
  {
    number: '08',
    title: 'Business Integrations',
    description: 'Connect applications to communication, analytics, CRM, productivity, and automation platforms.',
    technologies: ['Salesforce', 'HubSpot', 'Slack', 'Twilio', 'Google Workspace', 'Zapier'],
  },
]

function ServiceGraphic({ number, title }) {
  const commonProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.8,
  }

  const graphics = {
    '01': (
      <>
        <rect x="5" y="7" width="54" height="38" rx="5" />
        <path d="M5 15h54M12 11h.1M17 11h.1M22 11h.1" />
        <path d="M12 22h18M12 28h29M12 35h12M44 22h8v13H30" />
      </>
    ),
    '02': (
      <>
        <circle cx="32" cy="26" r="10" />
        <circle cx="32" cy="26" r="3" />
        <path d="M32 7v9M32 36v9M13 26h9M42 26h9M19 13l6 6M39 33l6 6M45 13l-6 6M25 33l-6 6" />
        <path d="M48 44c4-2 7-6 8-11M16 44c-4-2-7-6-8-11" />
      </>
    ),
    '03': (
      <>
        <rect x="19" y="5" width="26" height="46" rx="6" />
        <path d="M27 10h10M29 45h6" />
        <rect x="24" y="16" width="16" height="12" rx="2" />
        <path d="M24 34h7M35 34h5M24 39h16" />
      </>
    ),
    '04': (
      <>
        <rect x="6" y="8" width="22" height="15" rx="3" />
        <rect x="36" y="8" width="22" height="15" rx="3" />
        <rect x="21" y="36" width="22" height="15" rx="3" />
        <path d="M17 23v6h30v-6M32 29v7" />
        <path d="M11 14h12M41 14h12M26 42h12" />
      </>
    ),
    '05': (
      <>
        <circle cx="11" cy="28" r="5" />
        <circle cx="32" cy="12" r="5" />
        <circle cx="53" cy="28" r="5" />
        <circle cx="32" cy="45" r="5" />
        <path d="M15 25l13-10M36 15l13 10M49 32 36 42M28 42 15 32" />
        <path d="m29 28 3-3 3 3-3 7-3-7Z" />
      </>
    ),
    '06': (
      <>
        <rect x="5" y="17" width="18" height="26" rx="4" />
        <rect x="41" y="17" width="18" height="26" rx="4" />
        <path d="M23 26h18M23 34h18" />
        <path d="m35 22 6 4-6 4M29 30l-6 4 6 4" />
        <path d="M10 24h8M10 30h8M46 24h8M46 30h8" />
      </>
    ),
    '07': (
      <>
        <path d="M8 20h48l-4-11H12L8 20Z" />
        <path d="M11 20v30h42V20M11 28h42" />
        <path d="M18 34h12v16H18zM37 35h9M37 41h9" />
        <path d="M17 9v11M27 9v11M37 9v11M47 9v11" />
      </>
    ),
    '08': (
      <>
        <path d="M48 17a21 21 0 1 0 3 25" />
        <path d="M48 8v9h-9" />
        <path d="M23 24h18v17H23zM27 19h10M28 30h8M28 35h8" />
        <path d="m48 42 3 3 7-8" />
      </>
    ),
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-5">
      <div className="absolute -right-7 -top-7 h-24 w-24 rounded-full bg-blue-100/60" />
      <div className="absolute -bottom-8 left-12 h-20 w-20 rounded-full bg-sky-100/70" />
      <div className="relative flex items-center justify-between gap-5">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-600">Service {number}</p>
          <p className="mt-2 max-w-44 text-sm font-bold leading-5 text-slate-700">{title}</p>
        </div>
        <svg viewBox="0 0 64 58" className="h-24 w-28 shrink-0 text-blue-600" role="img" aria-label={`${title} illustration`} {...commonProps}>
          {graphics[number]}
        </svg>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="border-b border-gray-200 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Our services</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
              Everything needed to build and grow your application
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Themezyo combines product thinking, design, full-stack engineering, AI, integrations, deployment, and ongoing support so you can work with one team from idea to production.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 font-bold text-white shadow-sm transition hover:shadow-md">
                Discuss Your Project
              </Link>
              <Link href="/templates" className="rounded-lg border border-blue-200 bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50">
                Explore Our Work
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Capabilities</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800">Services for the complete product lifecycle</h2>
              <p className="mt-4 leading-7 text-gray-600">Start with one focused service or bring us the full product. We shape the delivery around your goals, existing systems, team, and stage of growth.</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
                  <ServiceGraphic number={service.number} title={service.title} />
                  <div className="flex items-start gap-4">
                    <span className="mt-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-700">{service.number}</span>
                    <div>
                      <h2 className="mt-6 text-xl font-extrabold text-slate-800">{service.title}</h2>
                      <p className="mt-3 leading-7 text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-3 border-t border-gray-100 pt-5 sm:grid-cols-2">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-2 text-sm font-semibold leading-6 text-gray-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-blue-100 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Technology tracks</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800">The right stack for the required outcome</h2>
              </div>
              <p className="leading-7 text-gray-600">
                We do not force every project into one technology stack. The final architecture is selected according to product requirements, expected scale, security, budget, delivery speed, existing systems, and your team’s long-term ownership needs.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {technologyTracks.map((track) => (
                <article key={track.title} className="flex h-full flex-col rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xs font-extrabold text-white">{track.number}</span>
                    <h3 className="font-extrabold text-slate-800">{track.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{track.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-200 pt-4">
                    {track.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-blue-100 bg-white px-2.5 py-1 text-xs font-bold text-blue-700">
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <h3 className="font-extrabold text-slate-800">Already have a preferred or existing stack?</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">We can work within your current architecture, modernize it incrementally, or recommend a migration path where the benefits justify the change.</p>
              </div>
              <Link href="/contact" className="mt-4 inline-flex shrink-0 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 sm:mt-0">
                Review Your Requirements
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">How we deliver</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800">One clear path from idea to production</h2>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map(([title, description], index) => (
                <div key={title} className="rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                  <div className="text-sm font-extrabold text-blue-600">0{index + 1}</div>
                  <h3 className="mt-3 text-lg font-extrabold text-slate-800">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-600 to-sky-500 px-6 py-10 text-center text-white shadow-sm sm:px-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">Have a project in mind?</p>
              <h2 className="mt-3 text-3xl font-extrabold">Let’s define the right solution together</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">Share your idea, current product, workflow, or technical challenge. We will review the requirements and recommend a practical next step.</p>
              <Link href="/contact" className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50">
                Contact Themezyo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
