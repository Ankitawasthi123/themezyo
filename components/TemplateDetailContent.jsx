'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import TemplateImageSlider from './TemplateImageSlider'
import { useI18n } from './I18nProvider'
import { templates } from '../data/templates'

const analyticsTimeout = 600

function sendAnalyticsEvent(eventName, params = {}, callback) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    callback?.()
    return
  }

  let callbackFired = false
  const finish = () => {
    if (callbackFired) return
    callbackFired = true
    callback?.()
  }

  window.gtag('event', eventName, {
    ...params,
    event_callback: finish,
    event_timeout: analyticsTimeout,
  })

  window.setTimeout(finish, analyticsTimeout)
}

const categoryAudience = {
  Automotive: 'auto repair shops, detailing studios, vehicle service centers, dealerships, fleet teams, and car care businesses',
  Career: 'job boards, resume tools, coaching businesses, hiring platforms, and career-focused SaaS products',
  'Cleaning Services': 'residential cleaners, commercial cleaning companies, janitorial teams, facility service providers, and local service brands',
  Cybersecurity: 'security consultancies, managed security providers, compliance teams, IT service companies, and B2B technology vendors',
  'Digital Agency': 'creative agencies, marketing studios, product teams, consultants, and independent service providers',
  'E-commerce': 'online stores, product brands, fashion retailers, marketplaces, and shopping experience prototypes',
  Education: 'schools, online academies, course creators, coaching platforms, and learning management products',
  Energy: 'solar installers, renewable energy companies, consultants, home energy providers, and commercial energy teams',
  Events: 'event planners, venues, wedding businesses, celebration studios, and premium service providers',
  Finance: 'accounting firms, tax consultants, bookkeeping teams, finance advisors, and professional service businesses',
  Healthcare: 'clinics, care providers, wellness practices, appointment-led businesses, and health service teams',
  'Health & Beauty': 'aesthetic clinics, spa businesses, beauty brands, wellness providers, and appointment-based services',
  'Home Services': 'contractors, HVAC teams, plumbers, electricians, roofing companies, repair teams, and local service businesses',
  Industrial: 'industrial suppliers, manufacturers, engineering vendors, B2B distributors, procurement teams, and equipment providers',
  Legal: 'law firms, legal consultants, immigration practices, advisory teams, and professional service offices',
  Nonprofit: 'charities, foundations, community programs, volunteer groups, and social impact organizations',
  'Real Estate': 'property portals, real estate agencies, home search products, brokers, and housing platforms',
  SaaS: 'software startups, AI tools, product teams, B2B platforms, dashboards, and subscription businesses',
  'Social Media': 'creator communities, social platforms, content tools, community apps, and media products',
  Travel: 'resorts, hotels, boutique stays, villas, guest experience teams, and hospitality brands',
}

const categoryIntent = {
  Automotive: 'present diagnostic, service package, booking, tracking, and customer-care concepts in a clear front-end layout',
  Career: 'present resume, career profile, optimization, and preview concepts with confidence',
  'Cleaning Services': 'present quote, recurring plan, service-area, and enquiry concepts for a local cleaning website',
  Cybersecurity: 'explain risk, service, assessment, managed support, and proof-of-expertise sections for business buyers',
  'Digital Agency': 'present services, case studies, credibility, process, and enquiry paths for client acquisition',
  'E-commerce': 'present product discovery, selection, cart, checkout, and post-purchase tracking page concepts',
  Education: 'organize program, dashboard, resource, and enrollment-style page concepts for education websites',
  Energy: 'explain savings, installation option, financing, quote, and renewable energy content sections clearly',
  Events: 'show package, venue, planning, gallery, vendor, and consultation-style page concepts',
  Finance: 'present financial service, tax timeline, package, consultation, and advisory content sections',
  Healthcare: 'create a credible front-end path through symptom, service, provider, resource, and booking-style sections',
  'Health & Beauty': 'show treatment, provider, booking, pricing, membership, and gallery-style content sections',
  'Home Services': 'present estimate, service-area, financing, review, and contact sections for home service businesses',
  Industrial: 'make product, specification, certification, industry, and RFQ-style sections easy for buyers to review',
  Legal: 'explain practice area, attorney profile, case result, consultation-style, and client education sections',
  Nonprofit: 'organize mission, program, impact, donation, volunteer, event, and resource sections',
  'Real Estate': 'present property search, buyer requirement, layout planning, dashboard, and listing detail concepts',
  SaaS: 'explain product value, pricing, documentation, dashboard, tool, and account page concepts',
  'Social Media': 'present discovery, feed, profile, messaging, creator workflow, and AI-assisted content page concepts',
  Travel: 'present stay, room, experience, booking, offer, concierge, and guest planning content sections',
}

const categoryDelivery = {
  Automotive: ['Service booking and customer accounts', 'Vehicle diagnosis and repair tracking', 'Payments, estimates and notifications', 'Workshop dashboard and integrations'],
  Career: ['User profiles and secure accounts', 'Resume or application workflows', 'AI writing and matching tools', 'Subscriptions and admin dashboard'],
  'Cleaning Services': ['Instant quote and recurring bookings', 'Service-area and team scheduling', 'Customer portal and online payments', 'CRM, reminders and operations dashboard'],
  Cybersecurity: ['Assessment and lead qualification', 'Secure client and reporting portal', 'Monitoring or ticketing integrations', 'Role-based administration and audit logs'],
  'Digital Agency': ['Conversion-focused marketing website', 'CMS-managed work and case studies', 'Client intake and project portal', 'CRM, analytics and automation'],
  'E-commerce': ['Product catalog and intelligent search', 'Cart, checkout and secure payments', 'Customer accounts and order tracking', 'Inventory, shipping and admin operations'],
  Education: ['Course catalog and enrollment', 'Student learning dashboard', 'Assessments, progress and certificates', 'Payments, content management and admin'],
  Energy: ['Savings calculator and lead qualification', 'Survey and installation workflow', 'Financing and document collection', 'Customer project tracking portal'],
  Events: ['Package discovery and availability', 'Consultation and booking workflow', 'Payments, contracts and guest tools', 'Event operations dashboard'],
  Finance: ['Secure client onboarding', 'Document collection and workflows', 'Advisory tools and appointment booking', 'Client portal, billing and reporting'],
  Healthcare: ['Service discovery and appointment requests', 'Secure patient intake and consent', 'Provider, schedule and resource management', 'Compliant integrations and staff dashboard'],
  'Health & Beauty': ['Treatment discovery and consultation', 'Online booking and memberships', 'Customer profiles and reminders', 'Payments, inventory and staff dashboard'],
  'Home Services': ['Estimate and service booking flows', 'Service-area and technician scheduling', 'Customer updates, financing and payments', 'CRM and field-operations dashboard'],
  Industrial: ['Product catalog and specification search', 'RFQ and procurement workflows', 'Customer and distributor portal', 'ERP, inventory and sales integrations'],
  Legal: ['Matter qualification and consultation booking', 'Secure client intake and documents', 'Case-status and communication portal', 'CRM, billing and practice integrations'],
  Nonprofit: ['Donation and recurring-giving flows', 'Volunteer, program and event registration', 'Impact content and supporter accounts', 'CRM, email and operations dashboard'],
  'Real Estate': ['Property search and saved listings', 'Buyer, seller and agent workflows', 'Viewing requests and lead automation', 'MLS, maps, CRM and admin dashboard'],
  Restaurant: ['Menu, ordering and delivery journey', 'Cart, checkout and secure payments', 'Catering, reservations and loyalty tools', 'Kitchen, order and location management'],
  SaaS: ['Production web application and accounts', 'Subscription billing and plan controls', 'Product dashboard and core workflows', 'APIs, analytics and administration'],
  'Social Media': ['Profiles, feeds and content creation', 'Messaging and notifications', 'Moderation, privacy and safety controls', 'Creator analytics and admin tools'],
  Travel: ['Live availability and booking journey', 'Guest accounts and trip management', 'Payments, offers and concierge requests', 'Property and reservation integrations'],
  'AI Apps': ['Production AI workflow and interface', 'Model, data and retrieval integration', 'Authentication, usage limits and billing', 'Evaluation, monitoring and safeguards'],
}

function getProjectDelivery(template) {
  const searchableText = [template.title, template.summary, template.description, ...(template.features || []), ...(template.sections || [])]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
  const possibilities = [...(categoryDelivery[template.category] || [
    'Responsive production website or application',
    'Backend, database and secure user accounts',
    'Business integrations and automated workflows',
    'Deployment, analytics and ongoing support',
  ])]

  if (/\b(ai|artificial intelligence|chatbot|recommendation|rag|diagnosis)\b/.test(searchableText) && template.category !== 'AI Apps') {
    possibilities[3] = 'Practical AI features with evaluation and safeguards'
  }

  return possibilities.slice(0, 4)
}

const templateSpecificSections = {
  cloudcrave: [
    {
      heading: 'Cloud Kitchen Ordering Experience',
      paragraphs: [
        'CloudCrave is designed for delivery-first restaurants, shared kitchens, meal-prep brands, and food businesses that need to turn hungry visitors into customers quickly. Its bold visual hierarchy keeps menus, delivery coverage, catering, and ordering actions easy to find on desktop and mobile.',
        'The included menu filters, cart interactions, delivery-area content, and AI recipe suggestion concept give you a practical foundation for presenting dishes while also creating a memorable branded experience.',
      ],
    },
    {
      heading: 'Catering And Franchise Growth',
      paragraphs: [
        'Dedicated catering and franchise pages let growing food brands speak to two different audiences without crowding the main ordering journey. Replace the demo content with real package sizes, service locations, kitchen capabilities, delivery policies, and franchise qualification details.',
        'Blog and contact layouts provide additional space for local food content, announcements, corporate enquiries, and search-friendly landing copy.',
      ],
    },
  ],
  'bug-busters': [
    {
      heading: 'Pest Control Lead Generation',
      paragraphs: [
        'Bug Busters uses a high-contrast, urgent design for pest control companies that need visitors to identify a problem and request help quickly. Emergency calls to action, pest categories, service information, inspection booking, and pricing content form a clear path from concern to enquiry.',
        'The layout suits residential exterminators, commercial pest management teams, inspection businesses, and local home-service providers. Add real coverage areas, response times, treatment methods, certifications, and guarantees before launch.',
      ],
    },
    {
      heading: 'Inspection And AI Suggestion Flow',
      paragraphs: [
        'The inspection and AI suggestion concepts help visitors describe signs of infestation before contacting the business. These front-end interactions can be connected to your preferred form service, CRM, scheduling system, or custom diagnosis workflow.',
        'Result and recommendation copy should always be reviewed by a qualified pest professional so the published site sets accurate expectations and directs urgent cases appropriately.',
      ],
    },
  ],
  workwell: [
    {
      heading: 'Occupational Health Services',
      paragraphs: [
        'WorkWell is structured for occupational health providers, workplace screening companies, corporate wellness teams, and testing services. It organizes clinical services, employer packages, workplace testing, safety information, and corporate enquiries into a professional business-facing experience.',
        'Use the service pages to explain appointment requirements, testing standards, turnaround times, reporting processes, on-site availability, and the industries your organization supports.',
      ],
    },
    {
      heading: 'Employer Recommendation Journey',
      paragraphs: [
        'The recommendation flow gives employers a simple way to explore suitable service packages based on workforce needs. It can remain a guided front-end experience or be connected to a rules engine, CRM, or consultation form.',
        'Replace all sample health and compliance language with information reviewed for your location, services, and applicable workplace regulations.',
      ],
    },
  ],
  'revive-iv': [
    {
      heading: 'Mobile IV Therapy Booking Journey',
      paragraphs: [
        'Revive IV presents treatment choices, service areas, pricing, safety information, group bookings, and appointment requests in a calm premium layout. It is suited to mobile hydration teams, concierge wellness providers, and clinic-based IV services.',
        'Treatment cards can be customized with real ingredients, eligibility requirements, session length, clinician credentials, availability, and pricing so visitors understand the service before requesting an appointment.',
      ],
    },
    {
      heading: 'Therapy Suggestion And Safety Content',
      paragraphs: [
        'The therapy suggestion pages demonstrate a guided selection experience and can be connected to a booking platform or reviewed recommendation workflow. They should not be presented as medical diagnosis without appropriate clinical design and oversight.',
        'Before publishing, have a qualified professional review treatment claims, contraindications, consent language, emergency guidance, and all location-specific healthcare requirements.',
      ],
    },
  ],
  'recovery-path': [
    {
      heading: 'Compassionate Admissions Journey',
      paragraphs: [
        'RecoveryPath is designed for treatment centers and behavioral health organizations that need to communicate clearly with people seeking immediate support. Programs, admissions steps, insurance verification, team information, resources, contact options, and hotline content are organized into a calm and reassuring journey.',
        'Replace the demonstration copy with verified levels of care, eligibility information, facility details, clinical credentials, accepted insurance, admissions availability, and real crisis resources.',
      ],
    },
    {
      heading: 'Assessment And Insurance Verification',
      paragraphs: [
        'The assessment and insurance pages are front-end concepts for confidential lead intake. They can be connected to secure, compliant systems selected by the treatment provider, with appropriate consent, privacy notices, data retention rules, and staff follow-up procedures.',
        'Because recovery enquiries can involve sensitive health information, production forms should be reviewed for privacy, security, accessibility, and healthcare compliance before collecting visitor data.',
      ],
    },
  ],
  'early-learning': [
    {
      heading: 'Early Learning Website Purpose',
      paragraphs: [
        'LittleBloom School is written for early education teams that need to communicate warmth, structure, safety, and trust in the first few moments of a website visit. Parents visiting a preschool or daycare website usually want to know whether the environment feels caring, whether the programs match their child age, and whether the school has a clear admissions process.',
        'The template supports that journey with dedicated areas for programs, admissions, tours, parent resources, gallery content, school story, and contact enquiries. This makes the page useful for daycares, nursery schools, kindergarten programs, Montessori-inspired schools, playgroups, and private early-learning centers that want a friendly but professional online presence.',
      ],
    },
    {
      heading: 'Parent Decision Journey',
      paragraphs: [
        'A strong early-learning website should help parents move from curiosity to confidence. LittleBloom School gives you front-end content areas where you can explain the daily routine, age-based learning groups, teacher approach, classroom environment, safety practices, meals, activities, outdoor play, communication style, and tour enquiry steps.',
        'For Google and AI search, this is valuable because parents often search for specific questions such as preschool programs, daycare admissions, nursery tours, kindergarten readiness, early childhood curriculum, and parent resources. Rewriting these editable sections with your real local details can make the final website more specific and more helpful.',
      ],
    },
    {
      heading: 'Program Content Opportunities',
      paragraphs: [
        'The programs page can be expanded with individual descriptions for toddlers, preschoolers, pre-kindergarten students, after-school care, summer camps, or enrichment activities. Each program can include age range, learning goals, daily rhythm, social-emotional development, creative activities, language development, and parent communication notes.',
        'This gives the final website more unique indexable content than a short brochure page. Search engines can understand exactly which programs are offered, and AI answer engines can summarize the school more accurately when the content answers real parent questions.',
      ],
    },
    {
      heading: 'Admissions And Tour Flow',
      paragraphs: [
        'The admissions and tour sections are important conversion areas for this template. They can explain how families enquire, how visits may be scheduled, what documents may be needed, when seats may be available, and what parents can expect after contacting the school.',
        'Clear admissions copy can reduce back-and-forth communication and improve lead quality. It also adds natural long-tail search phrases around preschool admissions, daycare tour booking, school enquiry forms, enrollment steps, and early-learning center availability.',
      ],
    },
    {
      heading: 'Trust, Safety, And School Personality',
      paragraphs: [
        'Parents need reassurance before contacting an early-learning center. LittleBloom School gives space for teacher introductions, classroom photos, safety commitments, parent testimonials, learning philosophy, and practical details such as opening hours, location, communication channels, and visit expectations.',
        'When you customize the template, avoid generic promises and add concrete details: teacher qualifications, child-to-staff ratios, classroom routines, parent update methods, hygiene standards, outdoor play options, and school values. That turns the page from a simple template into a trustworthy local school website.',
      ],
    },
  ],
  'dental-care': [
    {
      heading: 'Dental Website Purpose',
      paragraphs: [
        'SmileCare Dental is built for dental clinics that need a front-end design for trust, clarity, appointment enquiry, and treatment education. Dental visitors often arrive with a specific concern, such as tooth pain, cleaning, braces, whitening, implants, emergency care, insurance questions, or payment options. The template gives you a clear content structure for explaining services and next steps.',
        'The structure is suitable for family dental clinics, orthodontic practices, cosmetic dentistry brands, multi-location clinics, pediatric dentists, implant centers, and general practices that want a modern website with treatment pages, booking, dentists, insurance, patient forms, payment information, and smile preview concepts.',
      ],
    },
    {
      heading: 'Patient Search Intent',
      paragraphs: [
        'A dental website should answer practical patient questions before asking for an appointment. SmileCare Dental includes editable areas where a clinic can explain treatments, describe the booking process, introduce dentists, list insurance information, outline payment options, link to patient forms, and help people choose the right next step.',
        'This matters for Google and AI search because dental patients search with clear intent. They may look for dental cleaning, emergency dentist, teeth whitening, dental implants, orthodontics, clear aligners, pediatric dentistry, root canal treatment, or dental insurance support. Customizing the copy around real services gives each page stronger topical relevance.',
      ],
    },
    {
      heading: 'Treatment Page Depth',
      paragraphs: [
        'The treatment directory and treatment detail pages can be expanded into useful educational content. Each treatment page can explain who it is for, common symptoms, how an appointment may work, expected duration, aftercare notes, benefits, limitations, and when a patient should contact the clinic.',
        'Adding this kind of content creates helpful pages instead of thin service listings. It also helps search engines understand the clinic expertise and gives AI systems better context when summarizing treatment options from the website.',
      ],
    },
    {
      heading: 'Booking, Insurance, And Payment Content',
      paragraphs: [
        'SmileCare Dental includes booking-style, insurance, patient form, financing, and payment-related page layouts because these details are often the final barrier before a patient contacts a clinic. Clear explanations can make the website feel easier to understand and reduce uncertainty before an enquiry.',
        'For clearer indexing and conversion, replace placeholder copy with actual appointment steps, insurance details, payment option notes, financing information, cancellation policies, emergency contact instructions, and location-specific contact information where appropriate.',
      ],
    },
    {
      heading: 'Clinic Trust And Provider Profiles',
      paragraphs: [
        'Dentist profiles, locations, FAQs, gallery content, and patient-focused language help build confidence. The template gives you areas to introduce providers, explain experience, show clinic environment, answer common questions, and present the practice as approachable and professional.',
        'When editing this template, add real dentist names, qualifications, years of experience, specialties, clinic values, equipment details, accessibility information, and patient comfort practices. Specific trustworthy content is more valuable than repeating broad terms like best dental clinic or modern dental care.',
      ],
    },
  ],
}

function createDetailSections(template, options) {
  const sections = options.sections || []
  const features = template.features || []
  const includes = template.includes || []
  const format = options.format
  const updated = options.updated
  const support = options.support
  const layoutType = options.layoutType
  const solutionCategory = template.category === 'AI Apps' ? 'AI application' : template.category.toLowerCase()
  const audience = categoryAudience[template.category] || 'founders, developers, designers, agencies, and business teams'
  const intent = categoryIntent[template.category] || 'present the offer clearly, build trust, and guide visitors toward the next action'
  const pageCount = template.stats?.find((stat) => stat.label === 'Pages')?.value
  const screenshotCount = template.stats?.find((stat) => stat.label === 'Screenshots')?.value
  const sectionText = sections.length ? sections.join(', ') : 'practical landing, content, conversion, and support sections'
  const featureText = features.length ? features.join(', ') : 'responsive layouts, editable content, reusable sections, and launch-ready pages'
  const includeText = includes.length ? includes.join(', ') : 'editable source files, preview assets, and downloadable project files'
  const specificSections = templateSpecificSections[template.id] || []
  const sectionDetails = sections.map((section) => ({
    heading: `${section} Details`,
    paragraphs: [
      `${section} is part of the ${template.title} solution experience and gives the concept more practical depth for the ${template.category} audience. This area can be adapted with original brand language, local service information, product-specific terms, customer objections, and proof points that match the production product.`,
      `For SEO, this section should answer a real searcher question instead of only repeating keywords. Add useful copy, descriptive headings, and internal links so Google and AI search systems can understand how ${section.toLowerCase()} supports the overall ${layoutType}.`,
    ],
  }))
  const featureDetails = features.map((feature) => ({
    heading: `${feature} Feature`,
    paragraphs: [
      `${feature} gives ${template.title} a more practical role than a simple visual mockup. It helps visitors understand the intended page concept and gives developers a clear front-end area that can be connected to forms, workflows, business logic, or content management later if needed.`,
      `When customizing this feature, replace the demo wording with specific benefits, examples, service details, process steps, or product outcomes. That creates unique page copy and can support clearer search relevance for more precise ${template.category} queries.`,
    ],
  }))

  return [
    {
      heading: `About ${template.title}`,
      paragraphs: [
        `${template.title} is an AI-based ${solutionCategory} solution idea designed for ${audience}. It demonstrates the user journey, organizes the most important workflows, and provides a practical foundation for planning a complete digital product.`,
        template.description || template.summary,
        template.hero?.subtext || `${template.title} focuses on clear navigation, useful content blocks, responsive presentation, and conversion-friendly page structure for real project launches.`,
      ].filter(Boolean),
    },
    {
      heading: 'Best Fit',
      paragraphs: [
        `This ${template.category} AI-based solution idea is useful when you need to validate a real business workflow, demonstrate the user experience, and define what a production application could include.`,
        `The primary goal of this category is to ${intent}. ${template.title} gives that journey a structured front end, so visitors can understand the offer quickly and keep moving through the page instead of stopping at a thin description.`,
        `The design works well for prototypes, client demos, static website starters, portfolio pieces, internal experiments, and landing pages that need to explain an offer clearly. Developers can also use it as a front-end base before adding their own backend, CMS, payments, accounts, or application logic.`,
      ],
    },
    ...specificSections,
    {
      heading: 'Pages And Sections',
      paragraphs: [
        pageCount
          ? `${template.title} includes ${pageCount} workflow page${pageCount === '1' ? '' : 's'} covering ${sectionText}. This gives the solution enough depth to demonstrate a realistic product journey instead of a single thin landing page.`
          : `${template.title} includes a practical page structure covering ${sectionText}.`,
        screenshotCount
          ? `The solution also includes ${screenshotCount} preview screenshot${screenshotCount === '1' ? '' : 's'} so visitors can inspect its workflow and visual direction.`
          : 'Preview assets help visitors understand the solution workflow and visual direction.',
        `The included sections are arranged to help users scan the offer, understand the value, compare important details, and move toward a front-end contact, signup, booking-style, purchase-style, download, or enquiry section depending on the project type.`,
      ],
    },
    {
      heading: 'Key Features',
      paragraphs: [
        `Important possibilities in this solution include ${featureText}. These capabilities show how the idea can support a focused product, service, organization, or operational workflow.`,
        `Each feature is written as editable front-end content, so you can replace demo text with your own service details, pricing notes, product benefits, testimonials, FAQs, operational workflows, and brand language.`,
      ],
    },
    ...sectionDetails,
    ...featureDetails,
    {
      heading: 'Design Quality',
      paragraphs: [
        `${template.title} uses a modern responsive layout with clear spacing, readable typography, structured content blocks, and mobile-friendly behavior. The visual system is intended to feel professional while staying simple enough for fast editing.`,
        `The solution concept does not lock a production build into one narrow implementation. Its workflows can be prioritized, extended, integrated, or redesigned around your users and business requirements.`,
      ],
    },
    {
      heading: 'SEO And AI Search Readiness',
      paragraphs: [
        `This page includes descriptive content around the solution purpose, category, workflows, possible features, prototype files, and recommended use cases. That helps traditional search engines and AI answer engines understand what ${template.title} is and who it is for.`,
        `For best indexing results, customize the downloaded template with original business copy, specific service names, helpful headings, accurate image alt text, local contact details where relevant, and clear page titles. Unique content is more useful than repeated keywords and gives Google stronger context.`,
        `AI search systems also benefit from plain language descriptions, consistent terminology, and page sections that answer real user questions. The more specific the final content is to your product or business, the better it can be understood and summarized.`,
      ],
    },
    {
      heading: 'Customization Notes',
      paragraphs: [
        `The source prototype is delivered in ${format}, making it straightforward to inspect and edit with a normal code editor. It demonstrates the solution experience while production technology can be selected around the final scope.`,
        `If you want to turn this into a production website, replace placeholder copy with real brand messaging, compress final images, connect any forms or actions to your own backend, review accessibility labels, add analytics only where needed, and test every page on mobile and desktop before launch.`,
        `For stronger organic reach, rewrite every demo paragraph with specific language from your niche. Include service areas, product categories, customer types, common questions, trust signals, and clear comparison points where they naturally belong.`,
      ],
    },
    {
      heading: 'Included Files',
      paragraphs: [
        `The download package includes ${includeText}. These files provide the source materials needed to preview, edit, and adapt the design for your own project.`,
        `Because the files are editable, ${template.title} can be used as a design reference, a client presentation starter, a static HTML website, or the front-end foundation for a larger application.`,
      ],
    },
    {
      heading: 'Launch Guidance',
      paragraphs: [
        `Before publishing a website based on ${template.title}, review each page for accuracy, update metadata, add real contact or business details, connect any form behavior you need, and verify that all buttons point to the right destinations.`,
        `The solution prototype was last updated in ${updated}. ${support} if you want to turn the concept into a complete production project with frontend, backend, integrations, deployment, and ongoing support.`,
      ],
    },
  ]
}

export default function TemplateDetailContent({ template }) {
  const { t } = useI18n()
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const summary = template.description || template.summary
  const layoutType = template.layoutType || `${template.category} AI-based solution idea`
  const sections = template.sections || template.features?.slice(0, 4) || []
  const stats = template.stats || [
    { label: 'Rating', value: `${template.rating}` },
    { label: 'Reviews', value: `${template.reviews}` },
    { label: 'Price', value: template.price },
  ]
  const sourceText = template.sourceText || t('detail.defaultSource')
  const format = template.format || 'HTML, Tailwind CSS'
  const updated = template.updated || 'June 2026'
  const support = template.support || 'Paid customization available'
  const ctaDescription = template.ctaDescription || t('detail.ctaDescription')
  const downloadHref = `/downloads/${template.id}`
  const detailSections = createDetailSections(template, { sections, format, updated, support, layoutType })
  const sameCategoryTemplates = templates.filter(
    (item) => item.id !== template.id && item.category === template.category
  )
  const fallbackTemplates = templates.filter(
    (item) => item.id !== template.id && item.category !== template.category
  )
  const relatedTemplates = [...sameCategoryTemplates, ...fallbackTemplates].slice(0, 4)
  const projectDelivery = getProjectDelivery(template)
  const projectContactHref = `/contact?template=${encodeURIComponent(template.id)}&service=end-to-end-delivery`
  const paypalPaymentUrl = process.env.NEXT_PUBLIC_PAYPAL_PAYMENT_URL
  const paymentOptions = [
    paypalPaymentUrl
      ? {
          key: 'paypal',
          label: t('detail.paypalButton'),
          href: paypalPaymentUrl,
          target: '_blank',
          rel: 'noreferrer',
          className: 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100',
        }
      : null,
  ].filter(Boolean)
  const hasPaymentOptions = paymentOptions.length > 0

  useEffect(() => {
    sendAnalyticsEvent('template_view', {
      template_id: template.id,
      template_name: template.title,
      template_category: template.category,
    })
  }, [template.category, template.id, template.title])

  const closeDownloadModal = () => {
    setIsDownloadModalOpen(false)
  }

  const handleDownloadClick = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      sendAnalyticsEvent('template_download', {
        template_id: template.id,
        template_name: template.title,
        template_category: template.category,
      })
      return
    }

    event.preventDefault()
    setIsDownloadModalOpen(true)
  }

  const handleConfirmDownload = () => {
    closeDownloadModal()

    sendAnalyticsEvent(
      'template_download',
      {
        template_id: template.id,
        template_name: template.title,
        template_category: template.category,
      },
      () => {
        window.location.href = downloadHref
      }
    )
  }

  const handlePaymentClick = (provider) => {
    sendAnalyticsEvent('template_payment_click', {
      payment_provider: provider,
      template_id: template.id,
      template_name: template.title,
      template_category: template.category,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="border-b border-gray-200 bg-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/templates" className="text-sm font-bold text-blue-600 hover:text-blue-700">{t('common.backToTemplates')}</Link>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <TemplateImageSlider template={template} />

                <section className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm" aria-labelledby="website-features-title">
                  <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Available project enhancements</p>
                      <h2 id="website-features-title" className="mt-1 text-xl font-extrabold text-slate-800">We can provide these features</h2>
                      <p className="mt-1 max-w-2xl text-xs leading-5 text-gray-600">These are optional customization and development services based on your project requirements; they are not automatically included in the free download.</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                      <span className="h-5 w-5 rounded-full border-2 border-white shadow" style={{ backgroundColor: template.color || '#2563eb' }} />
                      Custom branding available
                    </div>
                  </div>
                  <div className="grid gap-px bg-gray-100 sm:grid-cols-2 xl:grid-cols-4">
                    {[
                      ['Responsive refinement', 'We can optimize every screen and interaction for desktop, tablet, and mobile.'],
                      ['Multilingual setup', 'We can add language switching, translated routes, and localized content structure.'],
                      ['Color and branding', 'We can apply your colors, typography, imagery, logo, and visual guidelines.'],
                      ['Custom development', `We can extend the ${format} foundation with the features your project needs.`],
                    ].map(([title, description], index) => (
                      <article key={title} className="bg-white p-5">
                        <div className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-sm font-extrabold text-blue-700">{index + 1}</div>
                        <h3 className="mt-3 text-sm font-bold text-slate-800">{title}</h3>
                        <p className="mt-1 text-xs leading-5 text-gray-600">{description}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <div
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
                  data-scroll-reveal="off"
                >
                  <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">{template.title}</h1>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">{template.category}</span>
                  </div>

                  {summary ? (
                    <section className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <h2 className="text-xl font-bold text-slate-800">
                        {t('detail.description', 'Description')}
                      </h2>
                      <p className="mt-3 leading-7 text-gray-700">{summary}</p>
                    </section>
                  ) : null}

                  {template.hero ? (
                    <div className="mt-8 rounded-xl border border-gray-200 bg-slate-50 p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{template.hero.tagline}</p>
                      <h2 className="mt-3 text-2xl font-bold text-slate-800">{template.hero.headline}</h2>
                      <p className="mt-3 text-gray-700">{template.hero.subtext}</p>
                    </div>
                  ) : null}

                  {layoutType ? (
                    <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6">
                      <h3 className="text-xl font-semibold text-slate-800">{t('detail.layout')}</h3>
                      <p className="mt-3 text-gray-700">{layoutType}</p>
                      {sections.length ? (
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {sections.map((section) => (
                            <div key={section} className="rounded-lg bg-white p-4 shadow-sm">
                              <p className="text-sm font-semibold text-slate-800">{section}</p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  {stats ? (
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {stats.map((stat) => (
                        <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                          <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                          <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {sourceText ? (
                    <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6">
                      <h3 className="text-xl font-semibold text-slate-800">{t('detail.source')}</h3>
                      <p className="mt-3 text-gray-700">{sourceText}</p>
                    </div>
                  ) : null}

                  <section className="mt-10 border-t border-gray-200 pt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                      {t('detail.longDescriptionEyebrow', 'Solution details')}
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
                      {t('detail.longDescriptionTitle', 'How this AI-based solution can work')}
                    </h2>
                    <div className="mt-6 space-y-8">
                      {detailSections.map((detailSection) => (
                        <article key={detailSection.heading}>
                          <h3 className="text-xl font-bold text-slate-800">{detailSection.heading}</h3>
                          <div className="mt-3 space-y-4">
                            {detailSection.paragraphs.map((paragraph) => (
                              <p key={paragraph} className="leading-7 text-gray-700">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-slate-800">{t('detail.features')}</h3>
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {template.features.map((feature)=> (
                        <div key={feature} className="flex items-start gap-2 rounded-lg bg-gray-50 p-3">
                          <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-slate-800">{t('detail.includes')}</h3>
                    <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {template.includes.map((item)=> (
                        <li key={item} className="rounded-lg bg-gray-50 px-3 py-2 text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="text-4xl font-extrabold text-emerald-600">{template.price === 'Free' ? t('common.free') : template.price}</div>
                  <p className="mt-2 text-gray-600">{ctaDescription}</p>

                  <a href={downloadHref} download onClick={handleDownloadClick} className="mt-6 block w-full rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 text-center font-bold text-white shadow-sm transition hover:shadow-md">
                    {t('detail.download')}
                  </a>

                  {template.previewPath ? (
                    <a href={template.previewPath} target="_blank" rel="noreferrer" className="mt-3 block w-full rounded-lg border border-blue-200 px-6 py-3 text-center font-bold text-blue-700 transition hover:bg-blue-50">
                      {t('detail.browser')}
                    </a>
                  ) : null}

                  <Link href="/contact" className="mt-3 block w-full rounded-lg border border-blue-200 px-6 py-3 text-center font-bold text-blue-700 transition hover:bg-blue-50">
                    {t('common.requestPaidSupport')}
                  </Link>

                  <div className="mt-6 overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50">
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Possible for this project</p>
                      <h3 className="mt-2 text-lg font-bold text-slate-800">End-to-end project delivery</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-700">
                        We can turn {template.title} into a complete, production-ready {template.category.toLowerCase()} project based on your users, workflow, integrations, budget, and launch goals.
                      </p>
                      <div className="mt-4 space-y-2">
                        {projectDelivery.map((possibility) => (
                          <div key={possibility} className="flex items-start gap-2 rounded-lg bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 shadow-sm">
                            <svg className="mt-0.5 h-4 w-4 flex-none text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{possibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-blue-100 bg-white/70 p-4">
                      <p className="text-xs leading-5 text-gray-600">Final scope and feasibility are confirmed after reviewing your requirements.</p>
                      <Link href={projectContactHref} className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
                        Discuss this project
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 border-t pt-6">
                    <div>
                      <p className="text-sm text-gray-600">{t('detail.format')}</p>
                      <p className="font-semibold text-slate-800">{format}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t('detail.updated')}</p>
                      <p className="font-semibold text-slate-800">{updated}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t('detail.support')}</p>
                      <p className="font-semibold text-slate-800">{support}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg space-y-2">
                    <p className="text-sm text-blue-900">{t('detail.license1')}</p>
                    <p className="text-sm text-blue-900">{t('detail.license2')}</p>
                    <p className="text-sm text-blue-900">{t('detail.license3')}</p>
                  </div>
                </div>
              </div>
            </div>

            {relatedTemplates.length ? (
              <section className="mt-12 border-t border-gray-200 pt-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                      {t('detail.relatedEyebrow', 'More solutions')}
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
                      {t('detail.relatedTitle', 'Related AI-based solutions')}
                    </h2>
                  </div>
                  <Link className="text-sm font-semibold text-blue-600 hover:text-blue-700" href="/templates">
                    {t('common.viewAllTemplates')}
                  </Link>
                </div>

                <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {relatedTemplates.map((relatedTemplate) => (
                    <Link
                      key={relatedTemplate.id}
                      href={`/templates/${relatedTemplate.id}`}
                      className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                        {relatedTemplate.thumbnail ? (
                          <img
                            src={relatedTemplate.thumbnail}
                            alt={`${relatedTemplate.title} screenshot`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div
                            className="h-full w-full"
                            style={{
                              backgroundImage: `linear-gradient(135deg, ${relatedTemplate.color}80, ${relatedTemplate.color}35)`,
                            }}
                          />
                        )}
                      </div>
                      <div className="p-4">
                        <div className="inline-block rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
                          {relatedTemplate.category}
                        </div>
                        <h3 className="mt-3 text-base font-bold text-slate-800">{relatedTemplate.title}</h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                          {relatedTemplate.summary || relatedTemplate.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-sm font-bold text-emerald-600">
                            {relatedTemplate.price === 'Free' ? t('common.free') : relatedTemplate.price}
                          </div>
                          <span className="text-sm font-bold text-blue-600">{t('common.view')}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </section>
      </main>

      {isDownloadModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/55 px-4 py-6">
          <div className="absolute inset-0" onClick={closeDownloadModal} />
          <div role="dialog" aria-modal="true" aria-labelledby="download-modal-title" className="relative w-full max-w-md rounded-xl border border-blue-100 bg-white p-6 text-center shadow-2xl sm:p-8">
            <button type="button" onClick={closeDownloadModal} aria-label={t('detail.downloadModalClose')} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-gray-200 text-xl leading-none text-gray-500 transition hover:bg-gray-50 hover:text-slate-800">
              x
            </button>
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blue-50 text-blue-600">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3v11m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 id="download-modal-title" className="mt-5 text-2xl font-extrabold text-slate-800">{t('detail.downloadModalTitle')}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{t('detail.downloadModalText')}</p>

            <button type="button" onClick={handleConfirmDownload} className="mt-6 w-full rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 font-bold text-white shadow-sm transition hover:shadow-md">
              {t('detail.downloadModalButton')}
            </button>

            <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4 text-left">
              <h3 className="text-sm font-bold text-slate-800">{t('detail.supportUsTitle')}</h3>
              <p className="mt-1 text-xs leading-5 text-gray-600">{t('detail.paymentText')}</p>
              {hasPaymentOptions ? (
                <div className="mt-3 grid gap-2">
                  {paymentOptions.map((option) => (
                    <a
                      key={option.key}
                      href={option.href}
                      target={option.target}
                      rel={option.rel}
                      onClick={() => handlePaymentClick(option.key)}
                      className={`inline-flex items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-bold transition ${option.className}`}
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-3 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-gray-600">{t('detail.paymentMissingText')}</p>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  )
}
