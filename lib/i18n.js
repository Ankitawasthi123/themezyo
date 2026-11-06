import { additionalDictionaries } from './additionalTranslations.js'

export const languages = [
  { code: 'en', label: 'English', nativeLabel: 'English', dir: 'ltr' },
  { code: 'fr', label: 'French', nativeLabel: 'Français', dir: 'ltr' },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', dir: 'ltr' },
  { code: 'pt', label: 'Portuguese', nativeLabel: 'Português', dir: 'ltr' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', dir: 'ltr' },
  { code: 'ja', label: 'Japanese', nativeLabel: '日本語', dir: 'ltr' },
]

export const defaultLanguage = 'en'

export const dictionaries = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      templates: 'AI Solutions',
      categories: 'Categories',
      about: 'About',
      contact: 'Contact',
      docs: 'Help',
      support: 'Start a Project',
      downloadFree: 'Our Services',
      language: 'Language',
    },
    hero: {
      eyebrow: 'End-to-end AI application development',
      titlePrefix: 'Build and launch',
      titleHighlight: 'intelligent applications that work',
      description: 'We design, engineer, and deploy complete digital products—from responsive interfaces and secure backends to data pipelines, integrations, and production-ready AI capabilities.',
      requirement: 'Bring us an idea, workflow, or business problem. We will help shape it into a practical application and support it beyond launch.',
      download: 'Explore Our Work',
      shareIdea: 'Discuss Your Application',
      how: 'How it Works',
      templates: 'AI Solutions',
      customers: 'Customers',
      paid: 'Paid',
      help: 'Setup Help',
      preview: 'Pixelnovate solution preview',
      moreShots: 'More shots',
      pixelnovate: 'Pixelnovate Solution',
    },
    ideaModal: {
      eyebrow: 'Project enquiry',
      title: 'Tell us about your application',
      intro: 'Share the product, workflow, or business problem you want to develop. We will review it and recommend a practical next step.',
      close: 'Close form',
      name: 'Your name',
      namePlaceholder: 'Enter your name',
      email: 'Email address',
      emailPlaceholder: 'you@example.com',
      ideaTitle: 'Project or application',
      ideaTitlePlaceholder: 'AI invoice assistant, mobile marketplace, customer portal...',
      category: 'Category',
      categorySaas: 'SaaS',
      categoryEcommerce: 'E-commerce',
      categoryBusiness: 'Business',
      categoryPortfolio: 'Portfolio',
      categoryOther: 'Other',
      details: 'What do you need the application to do?',
      detailsPlaceholder: 'Share users, workflows, features, data, integrations, AI needs, timeline, or any existing systems.',
      nameRequired: 'Please enter your name.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address.',
      ideaTitleRequired: 'Please enter a project or application name.',
      detailsRequired: 'Please share a few details about the project.',
      detailsShort: 'Please add at least 20 characters so we understand the request.',
      submit: 'Send Request',
      submitting: 'Sending...',
      submitError: 'Unable to send your request right now. Please try again.',
      successTitle: 'Thanks, your project enquiry has been received.',
      successText: 'We will review your requirements and follow up with the most practical next step.',
      done: 'Done',
    },
    common: {
      view: 'View',
      viewAllCategories: 'View All Categories',
      viewAllTemplates: 'View All AI Solutions',
      free: 'Free',
      templates: 'AI Solutions',
      rating: 'rating',
      reviews: 'reviews',
      backToTemplates: 'Back to AI Solutions',
      requestPaidSupport: 'Start a Project',
      sendMessage: 'Send Message',
    },
    categories: {
      title: 'Explore AI Solutions by Industry',
      pageTitle: 'Browse by Category',
      pageIntro: 'Find an AI-based solution direction for your industry, workflow, and product goals.',
      names: {
        landing: 'Landing Pages',
        business: 'Business',
        portfolio: 'Portfolio',
        ecommerce: 'E-commerce',
        saas: 'SaaS',
        blog: 'Blog & Magazine',
        dashboard: 'Dashboard',
      },
      descriptions: {
        landing: 'Perfect for promoting your product or service',
        business: 'Ideal for business growth, service offers, and go-to-market plans',
        portfolio: 'Showcase your work and creative projects',
        ecommerce: 'Complete solutions for online stores',
        saas: 'Software and service platforms',
        blog: 'Content ideas for publishing, newsletters, and audience growth',
        dashboard: 'Admin panels and analytics dashboards',
      },
    },
    templatesPage: {
      title: 'AI-Based Solutions by Industry',
      intro: 'Explore AI-based solution concepts, product workflows, live previews, source prototypes, and end-to-end delivery possibilities for real business use cases.',
      search: 'Search AI solutions...',
      allCategories: 'All Categories',
      sortPopular: 'Sort By: Popular',
      newest: 'Newest First',
      priceLow: 'Price: Low to High',
      priceHigh: 'Price: High to Low',
      handpicked: 'Featured AI Solutions',
    },
    features: {
      title: 'One Team From Idea to Production',
      intro: 'Strategy, design, engineering, AI, deployment, and ongoing improvement in one delivery process.',
      items: [
        ['Product and UX', 'Turn requirements into clear journeys, interfaces, and a focused product roadmap.'],
        ['Full-Stack Engineering', 'Build robust frontends, APIs, databases, authentication, and third-party integrations.'],
        ['Applied AI', 'Embed search, generation, recommendations, assistants, and automation into real workflows.'],
        ['Launch and Scale', 'Deploy securely, monitor performance, evaluate AI quality, and iterate after release.'],
      ],
    },
    testimonial: {
      title: 'Built for Practical Projects',
      quote: '"Start with a complete design, review the live preview, and adapt the source files for your project."',
      role: 'Themezyo template collection',
      rating: 'Free to explore',
    },
    newsletter: {
      title: 'Get AI Product and Engineering Updates',
      intro: 'Join the newsletter for new application concepts, practical AI patterns, product releases, and engineering insights.',
      placeholder: 'Enter your email',
      subscribe: 'Subscribe',
    },
    footer: {
      tagline: 'End-to-end application design and development with full-stack engineering, practical AI integration, deployment, and ongoing support.',
      quick: 'Quick Links',
      resources: 'Resources',
      company: 'Company',
      license: 'License',
      documentation: 'Documentation',
      help: 'Help Center',
      releases: 'New releases',
      licensing: 'Licensing',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    about: {
      title: 'About Themezyo',
      intro: 'We turn ambitious product ideas and business workflows into complete AI-enabled applications.',
      missionTitle: 'Our Mission',
      mission: 'Themezyo helps founders and teams move from idea to production with one accountable partner for product strategy, experience design, full-stack engineering, AI integration, cloud deployment, and ongoing improvement.',
      users: 'Happy Users',
      countries: 'Countries Served',
      storyTitle: 'Our Story',
      story: 'Themezyo began with practical product concepts and reusable interfaces. That foundation now supports a broader goal: developing complete applications that connect polished user experiences to reliable backends, business data, automation, and useful AI. Our public reference library shows the industries and workflows we understand; custom delivery turns those directions into working products.',
      valuesTitle: 'Our Values',
      values: [
        ['Outcomes First', 'We start with the user problem and business result, then choose the right product and technical approach.'],
        ['End-to-End Ownership', 'We connect design, frontend, backend, data, AI, deployment, and support instead of treating them as isolated tasks.'],
        ['Responsible AI', 'We use AI where it adds measurable value, with evaluation, safeguards, and human oversight appropriate to the workflow.'],
        ['Built to Evolve', 'We favor maintainable systems that can improve as users, data, models, and business needs change.'],
      ],
    },
    help: {
      title: 'Help & Documentation',
      intro: 'Find answers to common questions.',
      ctaTitle: 'Need paid help?',
      ctaText: 'Send the template name and your requirements. We will review the scope and share a quote.',
      faqs: [
        ['How do I explore a solution?', 'Open a solution page to review its workflows, screenshots, live prototype, possible production features, and delivery options.'],
        ['Are the source prototypes free?', 'Yes. Listed source downloads are free for personal and commercial prototyping, subject to the license terms.'],
        ['Is customization free?', 'No. Downloads are free, while setup, framework conversion, design changes, and custom development are quoted separately.'],
        ['Can I customize the files myself?', 'Yes. Source packages are editable prototypes intended for developers and product teams.'],
        ['Can I request a production solution?', 'Yes. Share your users, workflows, integrations, AI requirements, and launch goals for an end-to-end delivery review.'],
        ['What file formats do I get?', 'Each details page lists the included formats and files before you download.'],
        ['Can I use templates in different countries?', 'Yes. You can adapt the language, content, currency, and business details for your target market.'],
      ],
    },
    contact: {
      title: 'Get in Touch',
      intro: "We'd love to hear from you. Send us a message!",
      info: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      hours: 'Response time',
      hoursText: 'We usually respond within 1-2 business days.',
      name: 'Name',
      subject: 'Subject',
      message: 'Message',
      namePlaceholder: 'Your name',
      subjectPlaceholder: 'How can we help?',
      messagePlaceholder: 'Your message here...',
    },
    detail: {
      layout: 'Solution overview',
      source: 'Source files',
      features: 'Features',
      includes: 'Package Includes',
      download: 'Download Source Prototype',
      browser: 'View in Browser',
      downloadModalTitle: 'Thanks for downloading!',
      downloadModalText: 'Your source prototype is ready. Use it to explore the solution concept or as an implementation reference.',
      downloadModalButton: 'Download source prototype',
      downloadModalClose: 'Close download dialog',
      paymentTitle: 'Support this template',
      supportUsTitle: 'Support us',
      paymentText: 'Optional support is available through PayPal.',
      paymentMissingText: 'Payment links are being configured.',
      paypalButton: 'Pay with PayPal',
      format: 'Format',
      updated: 'Updated',
      support: 'Support',
      license1: 'Free personal and commercial use',
      license2: 'Download is free',
      license3: 'Support and custom changes are paid',
      ctaDescription: 'Explore the prototype or discuss end-to-end delivery for your production project.',
      defaultSource: 'Includes the source files and assets listed for this AI-based solution prototype.',
      frameworkTitle: 'Need another framework?',
      frameworkText: 'Framework conversion and custom development are available as paid services. Share your requirements for a quote.',
      frameworkButton: 'Request a framework quote',
    },
    slider: {
      preview: 'Preview',
      homepage: 'Homepage preview',
      sections: 'Sections preview',
      mobile: 'Mobile preview',
      previous: 'Previous slide',
      next: 'Next slide',
      show: 'Show',
      upload: 'Upload Slider Images',
    },
  },
}

const fr = {
  nav: { home: 'Accueil', templates: 'Idees', categories: 'Categories', about: 'A propos', contact: 'Contact', docs: 'Docs', support: 'Support payant', downloadFree: 'Explorer les idees IA', language: 'Langue' },
  hero: { eyebrow: 'Idees basees sur l IA pour createurs modernes', titlePrefix: 'Decouvrez des', titleHighlight: 'idees propulsees par l IA', description: 'Explorez des packs d idees IA pour entreprises, contenu, produits, campagnes et lancements afin de passer plus vite de la page blanche a l action.', requirement: 'Nous avons ici des idees IA. Contactez-nous si vous avez une exigence specifique.', download: 'Explorer les idees IA', how: 'Comment ca marche', templates: 'Idees IA', customers: 'Clients satisfaits', paid: 'Payant', help: 'Aide a la strategie', preview: "Apercu de l idee IA Pixelnovate", moreShots: 'Plus de vues', pixelnovate: 'Pack d idees Pixelnovate' },
  common: { view: 'Voir', viewAllCategories: 'Voir toutes les categories', viewAllTemplates: 'Voir toutes les idees', free: 'Gratuit', templates: 'Idees', rating: 'note', reviews: 'avis', backToTemplates: 'Retour aux idees', requestPaidSupport: 'Demander un support payant', sendMessage: 'Envoyer le message' },
  categories: { title: 'Explorer les idees IA par categorie', pageTitle: 'Parcourir par categorie', pageIntro: 'Trouvez la bonne direction d idee pour votre prochain projet', names: { landing: 'Lancements', business: 'Entreprise', portfolio: 'Marque personnelle', ecommerce: 'E-commerce', saas: 'SaaS', blog: 'Contenu & Media', dashboard: 'Operations' }, descriptions: { landing: 'Idees pour offres, lancements et campagnes', business: 'Directions pour entreprises, services et croissance', portfolio: 'Idees pour presenter votre expertise', ecommerce: 'Concepts pour boutiques, produits et ventes', saas: 'Idees pour logiciels et plateformes de service', blog: 'Angles pour contenu, publication et audience', dashboard: 'Idees pour outils, workflows et analytics' } },
  templatesPage: { title: 'Toutes les idees IA', intro: 'Parcourez notre collection d idees basees sur l IA et de directions de lancement.', search: 'Rechercher des idees...', allCategories: 'Toutes les categories', sortPopular: 'Trier par : populaire', newest: 'Plus recentes', priceLow: 'Prix : croissant', priceHigh: 'Prix : decroissant', handpicked: 'Idees IA selectionnees pour vous' },
  features: { title: 'Tout pour transformer les idees en action', intro: 'Utilisez des prompts, angles et plans assistes par IA pour tester plus vite.', items: [['Prompts d idees IA', 'Chaque pack inclut des prompts et angles clairs a developper avec vos outils IA.'], ['Facile a adapter', 'Adaptez chaque idee a votre pays, audience, niche et modele economique.'], ['Oriente lancement', 'Chaque idee propose des prochaines etapes, accroches de contenu et actions pratiques.'], ['Mises a jour regulieres', 'Nous ajoutons des idees pour produits, marketing, contenu et business en ligne.']] },
  testimonial: { title: 'Aime par des milliers de clients', quote: '"Themezyo a transforme une idee floue en prompts IA, angles de contenu et plan de lancement clair."', role: 'Fondateur, TechFlow', rating: 'Note 5.0' },
  newsletter: { title: 'Recevez de nouvelles idees IA chaque semaine', intro: 'Rejoignez notre newsletter pour ne manquer aucun pack d idees, angle de prompt, insight marche et offre.', placeholder: 'Entrez votre email', subscribe: "S'abonner" },
  footer: { tagline: 'Idees basees sur l IA pour entreprises modernes, createurs, fondateurs et developpeurs.', quick: 'Liens rapides', resources: 'Ressources', company: 'Entreprise', license: 'Licence', documentation: 'Documentation', help: "Centre d'aide", releases: 'Nouveautes', licensing: 'Licences', rights: 'Tous droits reserves.', privacy: 'Confidentialite', terms: "Conditions d'utilisation" },
  about: { title: 'A propos de Themezyo', intro: 'Nous construisons un moteur d idees IA pour tous', missionTitle: 'Notre mission', mission: 'Chez Themezyo, nous aidons les createurs et equipes a transformer des pensees eparses en prompts clairs, directions business, angles de contenu et plans de lancement adaptables.', users: 'Utilisateurs satisfaits', countries: 'Pays servis', storyTitle: 'Notre histoire', story: 'Themezyo a ete cree par des builders qui voulaient rendre la generation d idees plus pratique et moins confuse.', valuesTitle: 'Nos valeurs', values: [['Qualite avant tout', 'Nous gardons un niveau eleve pour chaque pack d idees.'], ['Centre utilisateur', 'Votre succes est notre succes. Nous ecoutons et iterons.'], ['Assistance IA', 'Nous concevons des idees adaptees aux workflows de recherche, redaction, planification et localisation.'], ['Accessibilite', 'Les bonnes idees IA doivent etre faciles a obtenir et adapter.']] },
  help: { title: 'Aide & Documentation', intro: 'Trouvez les reponses aux questions courantes.', ctaTitle: "Besoin d'aide payante ?", ctaText: 'Envoyez le nom du pack d idees et les details du travail. Nous examinerons le besoin et partagerons un devis.', faqs: [['Comment demarrer avec une idee IA ?', 'Choisissez un pack d idees, ouvrez sa page detail, puis telechargez les notes de depart. Vous pouvez ensuite developper les prompts avec vos outils IA.'], ['Les idees sont-elles gratuites ?', 'Oui. Les packs d idees sont gratuits pour les projets personnels et commerciaux.'], ['Le support est-il gratuit ?', 'Non. Le telechargement est gratuit. La recherche, l aide au contenu IA, la validation et le travail sur mesure sont payants.'], ['Puis-je personnaliser moi-meme ?', 'Absolument. Les notes sont simples, modifiables et concues pour une expansion manuelle ou assistee par IA.'], ['Puis-je demander un pack personnalise ?', 'Oui. Utilisez la page contact ou le bouton de support payant.'], ['Quels formats vais-je recevoir ?', 'Les telechargements incluent actuellement une note HTML de depart avec contenu structure.'], ['Puis-je utiliser ces idees dans differents pays ?', 'Oui. Les packs sont concus pour etre adaptes a differents marches, audiences et langues.'], ['Pourquoi un bouton cafe ?', 'La contribution cafe est optionnelle et aide a garder les idees IA accessibles.']] },
  contact: { title: 'Contactez-nous', intro: 'Nous serions ravis de vous lire. Envoyez-nous un message !', info: 'Coordonnees', email: 'Email', phone: 'Telephone', address: 'Adresse', hours: 'Horaires', hoursText: 'Lundi - Vendredi : 9h - 18h PST\nSamedi - Dimanche : ferme', name: 'Nom', subject: 'Sujet', message: 'Message', namePlaceholder: 'Votre nom', subjectPlaceholder: 'Comment pouvons-nous aider ?', messagePlaceholder: 'Votre message...' },
  detail: { layout: 'Plan de l idee', source: 'Source', features: 'Angles', includes: 'Contenu du pack', download: 'Telecharger le pack d idees', browser: 'Voir dans le navigateur', format: 'Format', updated: 'Mis a jour', support: 'Support', license1: 'Usage personnel et commercial gratuit', license2: 'Telechargement gratuit', license3: 'Support et changements personnalises payants', ctaDescription: 'Telechargez le pack d idees IA et adaptez-le pour votre projet.', defaultSource: 'Construit comme un pack d idees assiste par IA avec prompts, angles et prochaines etapes.', frameworkTitle: 'Ce template est aussi disponible en React, Angular et Vue.js', frameworkText: 'Dites-nous si vous avez besoin de cette version pour votre projet. Contactez-nous et nous vous aiderons avec le bon framework.', frameworkButton: 'Demander cette version' },
  slider: { preview: 'Apercu', homepage: "Apercu d'accueil", sections: 'Apercu des sections', mobile: 'Apercu mobile', previous: 'Diapositive precedente', next: 'Diapositive suivante', show: 'Afficher', upload: 'Televerser des images' },
}

const de = {
  nav: { home: 'Start', templates: 'Ideen', categories: 'Kategorien', about: 'Uber uns', contact: 'Kontakt', docs: 'Docs', support: 'Bezahlter Support', downloadFree: 'KI-Ideen entdecken', language: 'Sprache' },
  hero: { eyebrow: 'KI-basierte Ideen fur moderne Creator', titlePrefix: 'Entdecke smartere', titleHighlight: 'KI-gestutzte Ideen', description: 'Entdecke einsatzbereite KI-Ideenpakete fur Business, Content, Produkte, Kampagnen und Launches.', requirement: 'Hier finden Sie KI-Ideen. Bitte fragen Sie uns, wenn Sie eine bestimmte Anforderung haben.', download: 'KI-Ideen entdecken', how: 'So funktioniert es', templates: 'KI-Ideen', customers: 'Zufriedene Kunden', paid: 'Bezahlt', help: 'Strategie-Hilfe', preview: 'Pixelnovate KI-Ideen Vorschau', moreShots: 'Mehr Ansichten', pixelnovate: 'Pixelnovate Ideenpaket' },
  common: { view: 'Ansehen', viewAllCategories: 'Alle Kategorien ansehen', viewAllTemplates: 'Alle Ideen ansehen', free: 'Kostenlos', templates: 'Ideen', rating: 'Bewertung', reviews: 'Bewertungen', backToTemplates: 'Zuruck zu Ideen', requestPaidSupport: 'Bezahlten Support anfragen', sendMessage: 'Nachricht senden' },
  categories: { title: 'KI-Ideen nach Kategorie entdecken', pageTitle: 'Nach Kategorie browsen', pageIntro: 'Finde die passende Ideenrichtung fur dein nachstes Projekt', names: { landing: 'Launches', business: 'Business', portfolio: 'Personal Brand', ecommerce: 'E-Commerce', saas: 'SaaS', blog: 'Content & Medien', dashboard: 'Operations' }, descriptions: { landing: 'Ideen fur Angebote, Launches und Kampagnen', business: 'Richtungen fur Services, Wachstum und Unternehmen', portfolio: 'Ideen, um Expertise sichtbar zu machen', ecommerce: 'Konzepte fur Shops, Produkte und Verkauf', saas: 'Ideen fur Software und Service-Plattformen', blog: 'Angles fur Content, Publishing und Audience', dashboard: 'Ideen fur Tools, Workflows und Analytics' } },
  templatesPage: { title: 'Alle KI-Ideen', intro: 'Durchsuche unsere Sammlung KI-basierter Ideen und Launch-Richtungen.', search: 'Ideen suchen...', allCategories: 'Alle Kategorien', sortPopular: 'Sortieren: Beliebt', newest: 'Neueste zuerst', priceLow: 'Preis: niedrig bis hoch', priceHigh: 'Preis: hoch bis niedrig', handpicked: 'KI-Ideen fur dich' },
  features: { title: 'Alles, um Ideen in Aktion zu verwandeln', intro: 'Nutze KI-gestutzte Prompts, Blickwinkel und Ausfuhrungsplane, um Ideen schneller zu testen.', items: [['KI-Ideenprompts', 'Jedes Ideenpaket enthalt klare Prompts und Blickwinkel fur deine bevorzugten KI-Tools.'], ['Einfach anpassbar', 'Passe jede Idee an Land, Zielgruppe, Nische und Geschaftsmodell an.'], ['Launch-orientiert', 'Jede Idee ist rund um nachste Schritte, Content-Hooks und praktische Aktionen organisiert.'], ['Regelmassige Updates', 'Wir erganzen neue Ideenpakete fur Produkte, Marketing, Content und Online-Business.']] },
  testimonial: { title: 'Von tausenden Kunden geliebt', quote: '"Themezyo machte aus einem groben Gedanken klare KI-Prompts, Content-Winkel und einen Launch-Plan."', role: 'Grunder, TechFlow', rating: '5.0 Bewertung' },
  newsletter: { title: 'Jede Woche neue KI-Ideen', intro: 'Abonniere unseren Newsletter und verpasse keine Ideenpakete, Prompt-Winkel, Markt-Insights und Angebote.', placeholder: 'E-Mail eingeben', subscribe: 'Abonnieren' },
  footer: { tagline: 'KI-basierte Ideen fur moderne Unternehmen, Creator, Grunder und Entwickler.', quick: 'Schnelllinks', resources: 'Ressourcen', company: 'Firma', license: 'Lizenz', documentation: 'Dokumentation', help: 'Hilfecenter', releases: 'Neue Releases', licensing: 'Lizenzierung', rights: 'Alle Rechte vorbehalten.', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen' },
  about: { title: 'Uber Themezyo', intro: 'Wir bauen eine KI-Ideenmaschine fur alle', missionTitle: 'Unsere Mission', mission: 'Themezyo hilft Creatorn und Teams, verstreute Gedanken in klare Prompts, Business-Richtungen, Content-Winkel und Launch-Plane zu verwandeln.', users: 'Zufriedene Nutzer', countries: 'Lander erreicht', storyTitle: 'Unsere Geschichte', story: 'Themezyo wurde von Buildern gegrundet, die Ideengenerierung praktischer und weniger uberfordernd machen wollten.', valuesTitle: 'Unsere Werte', values: [['Qualitat zuerst', 'Wir halten hohe Standards fur jedes Ideenpaket.'], ['Nutzerfokus', 'Dein Erfolg ist unser Erfolg. Wir horen zu und verbessern.'], ['KI-Unterstutzung', 'Wir gestalten Ideen fur KI-Workflows rund um Recherche, Text, Planung und Lokalisierung.'], ['Bezahlbarkeit', 'Gute KI-basierte Ideen sollen leicht zuganglich und einfach anpassbar sein.']] },
  help: { title: 'Hilfe & Dokumentation', intro: 'Finde Antworten auf haufige Fragen.', ctaTitle: 'Brauchst du bezahlte Hilfe?', ctaText: 'Sende den Ideenpaket-Namen und Details zur Arbeit. Wir prufen den Umfang und senden ein Angebot.', faqs: [['Wie starte ich mit einer KI-Idee?', 'Wahle ein Ideenpaket, offne die Detailseite und lade die Startnotizen herunter. Danach kannst du Prompts, Plan und Content mit deinen KI-Tools erweitern.'], ['Sind die Ideen kostenlos?', 'Ja. Ideenpakete sind fur private und kommerzielle Projekte kostenlos.'], ['Ist Support kostenlos?', 'Nein. Der Download ist kostenlos. Recherche, KI-Content-Hilfe, Validierung und individuelle Arbeit sind bezahlt.'], ['Kann ich Ideen selbst anpassen?', 'Ja. Die Notizen sind einfache, editierbare Starter fuer manuelle oder KI-gestutzte Erweiterung.'], ['Kann ich ein individuelles Ideenpaket anfragen?', 'Ja. Nutze die Kontaktseite oder den Support-Button.'], ['Welche Formate bekomme ich?', 'Downloads enthalten aktuell eine HTML-Startnotiz mit strukturierter Idee.'], ['Kann ich diese Ideen in verschiedenen Landern nutzen?', 'Ja. Die Ideenpakete sind fur verschiedene Markte, Zielgruppen und Sprachen anpassbar.'], ['Warum gibt es einen Kaffee-Button?', 'Ein Kaffee-Beitrag ist optional und hilft, KI-Ideen zuganglich zu halten.']] },
  contact: { title: 'Kontakt aufnehmen', intro: 'Wir freuen uns auf deine Nachricht!', info: 'Kontaktinformationen', email: 'E-Mail', phone: 'Telefon', address: 'Adresse', hours: 'Zeiten', hoursText: 'Montag - Freitag: 9 - 18 Uhr PST\nSamstag - Sonntag: geschlossen', name: 'Name', subject: 'Betreff', message: 'Nachricht', namePlaceholder: 'Dein Name', subjectPlaceholder: 'Wie konnen wir helfen?', messagePlaceholder: 'Deine Nachricht...' },
  detail: { layout: 'Ideenplan', source: 'Quelle', features: 'Angles', includes: 'Paket enthalt', download: 'Ideenpaket herunterladen', browser: 'Im Browser ansehen', format: 'Format', updated: 'Aktualisiert', support: 'Support', license1: 'Kostenlose private und kommerzielle Nutzung', license2: 'Download ist kostenlos', license3: 'Support und individuelle Anderungen sind bezahlt', ctaDescription: 'Lade das KI-Ideenpaket herunter und passe es fuer dein Projekt an.', defaultSource: 'Gebaut als KI-gestutztes Ideenpaket mit Prompts, Positionierungswinkeln und nachsten Schritten.', frameworkTitle: 'Dieses Template gibt es auch in React, Angular und Vue.js', frameworkText: 'Sag uns, wenn du diese Version fuer dein Projekt brauchst. Kontaktiere uns und wir helfen mit dem passenden Framework-Build.', frameworkButton: 'Diese Version anfragen' },
  slider: { preview: 'Vorschau', homepage: 'Startseitenvorschau', sections: 'Bereichsvorschau', mobile: 'Mobile Vorschau', previous: 'Vorherige Folie', next: 'Nachste Folie', show: 'Anzeigen', upload: 'Slider-Bilder hochladen' },
}

const ar = {
  nav: { home: 'الرئيسية', templates: 'الأفكار', categories: 'الفئات', about: 'من نحن', contact: 'اتصل بنا', docs: 'الدليل', support: 'دعم مدفوع', downloadFree: 'استكشف أفكار الذكاء الاصطناعي', language: 'اللغة' },
  hero: { eyebrow: 'أفكار مبنية على الذكاء الاصطناعي للمبدعين', titlePrefix: 'اكتشف', titleHighlight: 'أفكارا مدعومة بالذكاء الاصطناعي', description: 'استكشف حزم أفكار جاهزة للأعمال والمحتوى والمنتجات والحملات والإطلاقات حتى تنتقل من الصفحة الفارغة إلى التنفيذ بسرعة.', requirement: 'لدينا هنا أفكار ذكاء اصطناعي. يرجى سؤالنا إذا كان لديك متطلب محدد.', download: 'استكشف أفكار الذكاء الاصطناعي', how: 'كيف يعمل', templates: 'أفكار ذكاء اصطناعي', customers: 'عملاء سعداء', paid: 'مدفوع', help: 'مساعدة استراتيجية', preview: 'معاينة فكرة Pixelnovate', moreShots: 'لقطات أكثر', pixelnovate: 'حزمة أفكار Pixelnovate' },
  common: { view: 'عرض', viewAllCategories: 'عرض كل الفئات', viewAllTemplates: 'عرض كل الأفكار', free: 'مجاني', templates: 'أفكار', rating: 'تقييم', reviews: 'مراجعات', backToTemplates: 'العودة إلى الأفكار', requestPaidSupport: 'طلب دعم مدفوع', sendMessage: 'إرسال الرسالة' },
  categories: { title: 'استكشف أفكار الذكاء الاصطناعي حسب الفئة', pageTitle: 'تصفح حسب الفئة', pageIntro: 'اعثر على اتجاه الفكرة المناسب لمشروعك القادم', names: { landing: 'إطلاقات', business: 'أعمال', portfolio: 'علامة شخصية', ecommerce: 'تجارة إلكترونية', saas: 'SaaS', blog: 'محتوى وإعلام', dashboard: 'عمليات' }, descriptions: { landing: 'أفكار للعروض والإطلاقات والحملات', business: 'اتجاهات للنمو والخدمات والأعمال', portfolio: 'أفكار لإظهار خبرتك وبناء حضورك', ecommerce: 'مفاهيم للمتاجر والمنتجات والمبيعات', saas: 'أفكار للبرمجيات ومنصات الخدمات', blog: 'زوايا للمحتوى والنشر ونمو الجمهور', dashboard: 'أفكار للأدوات وسير العمل والتحليلات' } },
  templatesPage: { title: 'كل أفكار الذكاء الاصطناعي', intro: 'تصفح مجموعتنا من الأفكار المبنية على الذكاء الاصطناعي واتجاهات الإطلاق.', search: 'ابحث عن الأفكار...', allCategories: 'كل الفئات', sortPopular: 'ترتيب حسب: الأكثر شعبية', newest: 'الأحدث أولا', priceLow: 'السعر: من الأقل للأعلى', priceHigh: 'السعر: من الأعلى للأقل', handpicked: 'أفكار ذكاء اصطناعي مختارة لك' },
  features: { title: 'كل ما تحتاجه لتحويل الأفكار إلى تنفيذ', intro: 'استخدم موجهات وزوايا وخطط تنفيذ مدعومة بالذكاء الاصطناعي لاختبار الأفكار بسرعة.', items: [['موجهات أفكار بالذكاء الاصطناعي', 'كل حزمة أفكار تتضمن موجهات وزوايا واضحة يمكنك توسيعها بأدوات الذكاء الاصطناعي.'], ['سهلة التكييف', 'خصص كل فكرة حسب البلد والجمهور والمجال ونموذج العمل خلال دقائق.'], ['مركزة على الإطلاق', 'كل فكرة منظمة حول خطوات عملية وخطافات محتوى وتحركات قابلة للتنفيذ.'], ['تحديثات منتظمة', 'نضيف حزم أفكار جديدة للمنتجات والتسويق والمحتوى والأعمال الرقمية.']] },
  testimonial: { title: 'يثق بنا آلاف العملاء', quote: '"منحني Themezyo نقطة بداية احترافية وسهل استخدام الذكاء الاصطناعي للمحتوى والأقسام وتجهيز الإطلاق."', role: 'المؤسس، TechFlow', rating: 'تقييم 5.0' },
  newsletter: { title: 'احصل على أفكار ذكاء اصطناعي جديدة كل أسبوع', intro: 'انضم إلى النشرة ولا تفوت حزم الأفكار وزوايا الموجهات ورؤى السوق والعروض.', placeholder: 'أدخل بريدك الإلكتروني', subscribe: 'اشتراك' },
  footer: { tagline: 'أفكار مبنية على الذكاء الاصطناعي للشركات والمبدعين والمؤسسين والمطورين.', quick: 'روابط سريعة', resources: 'الموارد', company: 'الشركة', license: 'الرخصة', documentation: 'التوثيق', help: 'مركز المساعدة', releases: 'الإصدارات الجديدة', licensing: 'الترخيص', rights: 'جميع الحقوق محفوظة.', privacy: 'سياسة الخصوصية', terms: 'شروط الخدمة' },
  about: { title: 'عن Themezyo', intro: 'نبني محرك أفكار بالذكاء الاصطناعي للجميع', missionTitle: 'مهمتنا', mission: 'يساعد Themezyo المبدعين والفرق على تحويل الأفكار المتفرقة إلى موجهات واضحة واتجاهات أعمال وزوايا محتوى وخطط إطلاق قابلة للتكييف.', users: 'مستخدمون سعداء', countries: 'دول نخدمها', storyTitle: 'قصتنا', story: 'تأسس Themezyo بواسطة بناة أرادوا جعل توليد الأفكار عمليا وأقل إرباكا.', valuesTitle: 'قيمنا', values: [['الجودة أولا', 'نحافظ على معيار عال في كل حزمة أفكار.'], ['التركيز على المستخدم', 'نجاحك هو نجاحنا، نستمع ونطور باستمرار.'], ['مساعدة الذكاء الاصطناعي', 'نصمم أفكارا تناسب سير عمل البحث والكتابة والتخطيط والترجمة.'], ['سهولة الوصول', 'أفكار الذكاء الاصطناعي الجيدة يجب أن تكون سهلة الحصول والتعديل.']] },
  help: { title: 'المساعدة والتوثيق', intro: 'اعثر على إجابات للأسئلة الشائعة.', ctaTitle: 'هل تحتاج مساعدة مدفوعة؟', ctaText: 'أرسل اسم حزمة الأفكار وتفاصيل العمل، وسنراجع النطاق ونرسل عرض سعر.', faqs: [['كيف أبدأ بفكرة ذكاء اصطناعي؟', 'اختر حزمة أفكار وافتح صفحة التفاصيل وحمل ملاحظات البداية، ثم وسع الموجهات والخطة والمحتوى باستخدام أدوات الذكاء الاصطناعي.'], ['هل الأفكار مجانية؟', 'نعم، حزم الأفكار مجانية للاستخدام الشخصي والتجاري.'], ['هل الدعم مجاني؟', 'لا. التحميل مجاني. البحث ومساعدة محتوى الذكاء الاصطناعي والتحقق والعمل المخصص مدفوعة.'], ['هل يمكنني تخصيص الأفكار بنفسي؟', 'بالتأكيد. الملاحظات بسيطة وقابلة للتعديل ومصممة للتوسيع اليدوي أو بمساعدة الذكاء الاصطناعي.'], ['هل يمكنني طلب حزمة أفكار مخصصة؟', 'نعم. استخدم صفحة الاتصال أو زر الدعم المدفوع.'], ['ما صيغ الملفات؟', 'التحميلات تشمل حاليا ملاحظة HTML بداية مع فكرة منظمة.'], ['هل يمكن استخدام هذه الأفكار في دول مختلفة؟', 'نعم. حزم الأفكار مصممة للتكييف مع أسواق وجماهير ولغات مختلفة.'], ['لماذا يوجد زر قهوة؟', 'مساهمة القهوة اختيارية وتساعد في إبقاء أفكار الذكاء الاصطناعي متاحة.']] },
  contact: { title: 'تواصل معنا', intro: 'يسعدنا سماعك. أرسل لنا رسالة!', info: 'معلومات الاتصال', email: 'البريد الإلكتروني', phone: 'الهاتف', address: 'العنوان', hours: 'ساعات العمل', hoursText: 'الاثنين - الجمعة: 9 صباحا - 6 مساء PST\nالسبت - الأحد: مغلق', name: 'الاسم', subject: 'الموضوع', message: 'الرسالة', namePlaceholder: 'اسمك', subjectPlaceholder: 'كيف يمكننا المساعدة؟', messagePlaceholder: 'اكتب رسالتك هنا...' },
  detail: { layout: 'مخطط الفكرة', source: 'المصدر', features: 'الزوايا', includes: 'محتويات الحزمة', download: 'تحميل حزمة الأفكار', browser: 'عرض في المتصفح', format: 'الصيغة', updated: 'آخر تحديث', support: 'الدعم', license1: 'استخدام شخصي وتجاري مجاني', license2: 'التحميل مجاني', license3: 'الدعم والتغييرات المخصصة مدفوعة', ctaDescription: 'حمل حزمة أفكار الذكاء الاصطناعي وخصصها لمشروعك.', defaultSource: 'مبني كحزمة أفكار بمساعدة الذكاء الاصطناعي مع موجهات وزوايا وخطوات عملية.' },
  slider: { preview: 'معاينة', homepage: 'معاينة الرئيسية', sections: 'معاينة الأقسام', mobile: 'معاينة الجوال', previous: 'الشريحة السابقة', next: 'الشريحة التالية', show: 'عرض', upload: 'رفع صور السلايدر' },
}

const arSafe = {
  nav: {
    home: 'الرئيسية', services: 'الخدمات', templates: 'حلول الذكاء الاصطناعي', categories: 'القطاعات',
    about: 'من نحن', contact: 'اتصل بنا', docs: 'المساعدة', support: 'ابدأ مشروعاً',
    downloadFree: 'خدماتنا', language: 'اللغة',
  },
  hero: {
    eyebrow: 'تطوير تطبيقات الذكاء الاصطناعي من البداية إلى الإطلاق',
    titlePrefix: 'ابنِ وأطلق', titleHighlight: 'تطبيقات ذكية تعمل فعلياً',
    description: 'نصمم ونطور ونطلق منتجات رقمية متكاملة تشمل الواجهات والأنظمة الخلفية والتكاملات وقدرات الذكاء الاصطناعي الجاهزة للإنتاج.',
    requirement: 'شاركنا فكرتك أو سير العمل أو تحدي العمل، وسنساعدك على تحويله إلى تطبيق عملي.',
    download: 'استكشف حلولنا', shareIdea: 'ناقش تطبيقك', how: 'كيف نعمل', templates: 'حلول الذكاء الاصطناعي',
    customers: 'العملاء', paid: 'مدفوع', help: 'مساعدة الإعداد', preview: 'معاينة الحل', moreShots: 'صور إضافية', pixelnovate: 'حل Pixelnovate',
  },
  common: {
    view: 'عرض', viewAllCategories: 'عرض جميع القطاعات', viewAllTemplates: 'عرض جميع الحلول', free: 'مجاني',
    templates: 'حلول', rating: 'التقييم', reviews: 'المراجعات', backToTemplates: 'العودة إلى الحلول',
    requestPaidSupport: 'ابدأ مشروعاً', sendMessage: 'إرسال الرسالة',
  },
  categories: {
    title: 'استكشف حلول الذكاء الاصطناعي حسب القطاع', pageTitle: 'تصفح حسب القطاع',
    pageIntro: 'اعثر على اتجاه حل مناسب لقطاعك وسير العمل وأهداف المنتج.',
  },
  templatesPage: {
    title: 'حلول الذكاء الاصطناعي حسب القطاع',
    intro: 'استكشف أفكار الحلول الذكية ومسارات المنتجات والنماذج الأولية وخيارات التطوير المتكامل.',
    search: 'ابحث في الحلول...', allCategories: 'جميع القطاعات', sortPopular: 'الترتيب: الأكثر شيوعاً',
    newest: 'الأحدث أولاً', priceLow: 'السعر: من الأقل', priceHigh: 'السعر: من الأعلى', handpicked: 'حلول مميزة',
  },
  detail: {
    layout: 'نظرة عامة على الحل', source: 'ملفات النموذج الأولي', features: 'الإمكانات', includes: 'محتويات الحزمة',
    download: 'تحميل النموذج الأولي', browser: 'عرض في المتصفح', format: 'التنسيق', updated: 'آخر تحديث',
    support: 'الدعم', license1: 'استخدام شخصي وتجاري مجاني', license2: 'التحميل مجاني',
    license3: 'الدعم والتطوير المخصص مدفوعان', ctaDescription: 'استكشف النموذج الأولي أو ناقش تطوير مشروعك المتكامل.',
    defaultSource: 'يتضمن ملفات وأصول النموذج الأولي لهذا الحل.',
  },
  slider: { preview: 'معاينة', homepage: 'الصفحة الرئيسية', sections: 'الأقسام', mobile: 'الجوال', previous: 'السابق', next: 'التالي', show: 'عرض' },
}

fr.nav.services = 'Services'
fr.hero.shareIdea = 'Discuter de votre application'
fr.ideaModal = {
  eyebrow: 'Demande de projet', title: 'Parlez-nous de votre application',
  intro: 'Décrivez le produit, le flux de travail ou le problème métier à développer.', close: 'Fermer le formulaire',
  name: 'Votre nom', namePlaceholder: 'Saisissez votre nom', email: 'Adresse e-mail', emailPlaceholder: 'vous@exemple.com',
  ideaTitle: 'Projet ou application', ideaTitlePlaceholder: 'Assistant IA, marketplace mobile, portail client...',
  category: 'Catégorie', categorySaas: 'SaaS', categoryEcommerce: 'E-commerce', categoryBusiness: 'Entreprise', categoryPortfolio: 'Portfolio', categoryOther: 'Autre',
  details: "Que doit faire l'application ?", detailsPlaceholder: 'Décrivez les utilisateurs, fonctions, données, intégrations, besoins IA et délais.',
  nameRequired: 'Veuillez saisir votre nom.', emailRequired: 'Veuillez saisir votre e-mail.', emailInvalid: 'Saisissez une adresse e-mail valide.',
  ideaTitleRequired: 'Veuillez nommer le projet.', detailsRequired: 'Veuillez décrire le projet.', detailsShort: 'Ajoutez au moins 20 caractères.',
  submit: 'Envoyer la demande', submitting: 'Envoi...', submitError: "Impossible d'envoyer la demande. Réessayez.",
  successTitle: 'Votre demande a bien été reçue.', successText: 'Nous examinerons vos besoins et vous proposerons la prochaine étape.', done: 'Terminé',
}
Object.assign(fr.detail, {
  downloadModalTitle: 'Merci pour votre téléchargement !', downloadModalText: 'Votre prototype source est prêt.',
  downloadModalButton: 'Télécharger le prototype', downloadModalClose: 'Fermer', paymentTitle: 'Soutenir ce projet',
  supportUsTitle: 'Nous soutenir', paymentText: 'Un soutien facultatif est disponible via PayPal.',
  paymentMissingText: "L'option de paiement n'est pas configurée.", paypalButton: 'Soutenir avec PayPal',
})

de.nav.services = 'Leistungen'
de.hero.shareIdea = 'Anwendung besprechen'
de.ideaModal = {
  eyebrow: 'Projektanfrage', title: 'Erzählen Sie uns von Ihrer Anwendung',
  intro: 'Beschreiben Sie das Produkt, den Workflow oder das Geschäftsproblem, das Sie entwickeln möchten.', close: 'Formular schließen',
  name: 'Ihr Name', namePlaceholder: 'Name eingeben', email: 'E-Mail-Adresse', emailPlaceholder: 'sie@beispiel.de',
  ideaTitle: 'Projekt oder Anwendung', ideaTitlePlaceholder: 'KI-Assistent, mobiler Marktplatz, Kundenportal...',
  category: 'Kategorie', categorySaas: 'SaaS', categoryEcommerce: 'E-Commerce', categoryBusiness: 'Unternehmen', categoryPortfolio: 'Portfolio', categoryOther: 'Andere',
  details: 'Was soll die Anwendung leisten?', detailsPlaceholder: 'Nutzer, Funktionen, Daten, Integrationen, KI-Bedarf und Zeitplan beschreiben.',
  nameRequired: 'Bitte geben Sie Ihren Namen ein.', emailRequired: 'Bitte geben Sie Ihre E-Mail ein.', emailInvalid: 'Bitte geben Sie eine gültige E-Mail ein.',
  ideaTitleRequired: 'Bitte benennen Sie das Projekt.', detailsRequired: 'Bitte beschreiben Sie das Projekt.', detailsShort: 'Bitte mindestens 20 Zeichen eingeben.',
  submit: 'Anfrage senden', submitting: 'Wird gesendet...', submitError: 'Die Anfrage konnte nicht gesendet werden. Bitte erneut versuchen.',
  successTitle: 'Ihre Projektanfrage ist eingegangen.', successText: 'Wir prüfen Ihre Anforderungen und empfehlen den nächsten Schritt.', done: 'Fertig',
}
Object.assign(de.detail, {
  downloadModalTitle: 'Danke für den Download!', downloadModalText: 'Ihr Quellprototyp ist bereit.',
  downloadModalButton: 'Prototyp herunterladen', downloadModalClose: 'Schließen', paymentTitle: 'Projekt unterstützen',
  supportUsTitle: 'Unterstützen', paymentText: 'Optionale Unterstützung ist über PayPal möglich.',
  paymentMissingText: 'Die Zahlungsoption ist nicht eingerichtet.', paypalButton: 'Mit PayPal unterstützen',
})

arSafe.ideaModal = {
  eyebrow: 'طلب مشروع', title: 'أخبرنا عن تطبيقك', intro: 'شارك المنتج أو سير العمل أو مشكلة العمل التي تريد تطويرها.', close: 'إغلاق النموذج',
  name: 'الاسم', namePlaceholder: 'أدخل اسمك', email: 'البريد الإلكتروني', emailPlaceholder: 'you@example.com',
  ideaTitle: 'المشروع أو التطبيق', ideaTitlePlaceholder: 'مساعد فواتير ذكي، متجر جوال، بوابة عملاء...',
  category: 'الفئة', categorySaas: 'SaaS', categoryEcommerce: 'التجارة الإلكترونية', categoryBusiness: 'الأعمال', categoryPortfolio: 'معرض أعمال', categoryOther: 'أخرى',
  details: 'ماذا يجب أن يفعل التطبيق؟', detailsPlaceholder: 'اذكر المستخدمين والوظائف والبيانات والتكاملات واحتياجات الذكاء الاصطناعي والمدة.',
  nameRequired: 'يرجى إدخال الاسم.', emailRequired: 'يرجى إدخال البريد الإلكتروني.', emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح.',
  ideaTitleRequired: 'يرجى إدخال اسم المشروع.', detailsRequired: 'يرجى إضافة تفاصيل المشروع.', detailsShort: 'يرجى إضافة 20 حرفاً على الأقل.',
  submit: 'إرسال الطلب', submitting: 'جارٍ الإرسال...', submitError: 'تعذر إرسال الطلب. حاول مرة أخرى.',
  successTitle: 'تم استلام طلب مشروعك.', successText: 'سنراجع المتطلبات ونقترح الخطوة العملية التالية.', done: 'تم',
}
Object.assign(arSafe.categories, {
  names: { landing: 'صفحات الهبوط', business: 'الأعمال', portfolio: 'معرض الأعمال', ecommerce: 'التجارة الإلكترونية', saas: 'SaaS', blog: 'المحتوى والإعلام', dashboard: 'لوحات التحكم' },
  descriptions: { landing: 'حلول للعروض والإطلاقات', business: 'حلول للنمو والخدمات', portfolio: 'عرض الخبرات والمشاريع', ecommerce: 'تجارب التسوق والدفع', saas: 'منصات البرمجيات والخدمات', blog: 'حلول النشر ونمو الجمهور', dashboard: 'الأدوات وسير العمل والتحليلات' },
})
Object.assign(arSafe, {
  features: { title: 'فريق واحد من الفكرة إلى الإنتاج', intro: 'الاستراتيجية والتصميم والهندسة والذكاء الاصطناعي والإطلاق والتحسين المستمر.', items: [['المنتج وتجربة المستخدم','تحويل المتطلبات إلى رحلات وواجهات وخارطة طريق واضحة.'],['هندسة متكاملة','واجهات وأنظمة خلفية وقواعد بيانات وتكاملات موثوقة.'],['ذكاء اصطناعي تطبيقي','بحث وتوليد وتوصيات ومساعدون وأتمتة داخل سير العمل.'],['الإطلاق والتوسع','نشر آمن ومراقبة الأداء وتحسين الجودة.']] },
  testimonial: { title: 'يثق بنا العملاء', quote: 'نحوّل الأفكار إلى منتجات رقمية واضحة وقابلة للتنفيذ.', role: 'عميل Themezyo', rating: 'تقييم 5.0' },
  newsletter: { title: 'حلول وأفكار جديدة', intro: 'اشترك للحصول على تحديثات حول الحلول والمنتجات والذكاء الاصطناعي.', placeholder: 'أدخل بريدك الإلكتروني', subscribe: 'اشتراك' },
  footer: { tagline: 'حلول ذكاء اصطناعي وتطوير منتجات رقمية متكاملة.', quick: 'روابط سريعة', resources: 'الموارد', company: 'الشركة', license: 'الترخيص', documentation: 'التوثيق', help: 'مركز المساعدة', releases: 'إصدارات جديدة', licensing: 'التراخيص', rights: 'جميع الحقوق محفوظة.', privacy: 'الخصوصية', terms: 'الشروط' },
  about: { title: 'عن Themezyo', intro: 'نحوّل الأفكار إلى تطبيقات ذكية عملية', missionTitle: 'مهمتنا', mission: 'نساعد الفرق على تصميم وتطوير وإطلاق منتجات رقمية متكاملة.', users: 'مستخدمون سعداء', countries: 'دول نخدمها', storyTitle: 'قصتنا', story: 'تأسست Themezyo لتجعل تطوير المنتجات والذكاء الاصطناعي أكثر عملية ووضوحاً.', valuesTitle: 'قيمنا', values: [['الجودة أولاً','نلتزم بمعايير عالية في كل مشروع.'],['التركيز على المستخدم','نصمم حول احتياجات المستخدم الحقيقية.'],['ذكاء اصطناعي عملي','نستخدم الذكاء الاصطناعي داخل سير عمل مفيد.'],['وضوح التنفيذ','نحوّل المتطلبات إلى خطوات قابلة للتسليم.']] },
  help: { title: 'المساعدة والتوثيق', intro: 'اعثر على إجابات للأسئلة الشائعة.', ctaTitle: 'هل تحتاج إلى مساعدة؟', ctaText: 'شارك اسم الحل ومتطلباتك وسنراجع النطاق.', faqs: [['كيف أستكشف حلاً؟','افتح صفحة الحل وراجع سير العمل والمعاينة وخيارات التطوير.'],['هل النماذج الأولية مجانية؟','نعم، التنزيلات المدرجة مجانية وفق شروط الترخيص.'],['هل التخصيص مجاني؟','التنزيل مجاني، أما التطوير المخصص فيتم تسعيره حسب النطاق.'],['هل يمكنني تعديل الملفات؟','نعم، ملفات المصدر قابلة للتعديل.'],['هل يمكنني طلب حل إنتاجي؟','نعم، شارك المستخدمين وسير العمل والتكاملات المطلوبة.']] },
  contact: { title: 'اتصل بنا', intro: 'يسعدنا سماعك. أرسل لنا رسالة.', info: 'معلومات الاتصال', email: 'البريد الإلكتروني', phone: 'الهاتف', address: 'العنوان', hours: 'ساعات العمل', hoursText: 'الاثنين - الجمعة: 9 صباحاً - 6 مساءً', name: 'الاسم', subject: 'الموضوع', message: 'الرسالة', namePlaceholder: 'اسمك', subjectPlaceholder: 'كيف يمكننا المساعدة؟', messagePlaceholder: 'اكتب رسالتك...' },
})
Object.assign(arSafe.detail, {
  downloadModalTitle: 'شكراً للتنزيل!', downloadModalText: 'النموذج الأولي جاهز.', downloadModalButton: 'تحميل النموذج الأولي', downloadModalClose: 'إغلاق',
  paymentTitle: 'دعم المشروع', supportUsTitle: 'ادعمنا', paymentText: 'يتوفر دعم اختياري عبر PayPal.', paymentMissingText: 'خيار الدفع غير مهيأ.', paypalButton: 'الدعم عبر PayPal',
  frameworkTitle: 'هل تحتاج إلى تطوير مخصص؟', frameworkText: 'شارك متطلباتك وسنقترح بنية تقنية مناسبة.', frameworkButton: 'ناقش المشروع',
})
arSafe.slider.upload = 'رفع الصور'

Object.assign(dictionaries.en.detail, {
  description: 'Solution description',
  longDescriptionEyebrow: 'Solution details',
  longDescriptionTitle: 'How this AI-based solution can work',
})
Object.assign(dictionaries.en.contact, {
  eyebrow: 'Projects and support', buildTitle: 'Tell us what you want to build',
  buildIntro: 'Share a new application idea, AI integration, modernization requirement, or support request. We will route it to the right next step.',
  bestFor: 'Best for', bestForText: 'Websites, mobile apps, full-stack platforms, AI features, automation, integrations, modernization, and existing-product support.',
  downloadHelp: 'Download help', downloadHelpText: 'If you cannot download a source prototype, email us and we can send you a direct download link.',
  helpfulDetails: 'Helpful details', helpfulDetailsText: 'Include your goals, users, required features, preferred platforms, existing systems, timeline, and relevant links.',
  emailPlaceholder: 'your@email.com', sending: 'Sending...', sendSuccess: 'Message sent successfully.', sendError: 'Unable to send your message right now. Please try again.',
  nameError: 'Please enter your name.', emailError: 'Please enter a valid email address.', subjectError: 'Please enter a subject.', messageError: 'Please enter your message.',
})
Object.assign(dictionaries.en.about, {
  fullStackTitle: 'Full Stack', fullStackText: 'Web and mobile-ready products',
  aiNativeTitle: 'AI Native', aiNativeText: 'Practical intelligence and automation',
  endToEndTitle: 'End to End', endToEndText: 'From discovery through support',
})
Object.assign(dictionaries.en.categories, {
  pageEyebrow: 'Solutions by industry',
  pageTitle: 'Explore AI Solutions by Category',
  pageIntro: 'Browse practical AI application concepts by industry, workflow, and business need. Each category can become a complete production product tailored to your users.',
})
Object.assign(dictionaries.en.templatesPage, { newLabel: 'New', noResults: 'No solutions found', noResultsText: 'Try a different industry, workflow, or feature.' })
Object.assign(dictionaries.en, { home: {
  proofPoints: ['Product strategy', 'Full-stack build', 'AI integration', 'Launch & support'], industryExperience: 'Application experience by industry',
  explorerEyebrow: 'Solution explorer', explorerTitle: 'Find the Right Starting Point', explorerIntro: 'Tell us what you want to build. We will match you with relevant application concepts, user flows, and reference implementations from our library.', explorerDelivery: 'We can turn the selected direction into a complete product with UX, frontend, backend, databases, authentication, AI workflows, integrations, deployment, and support.', requestProject: 'Request Custom Project', searchLabel: 'Search by idea, industry, or feature', searchPlaceholder: 'Try clinic, dashboard, booking, school...', searchKeywords: ['AI', 'Booking', 'Dashboard', 'E-commerce', 'Clinic', 'School', 'Real estate', 'Agency'], projectType: 'Project type', allSolutions: 'All solutions', bestMatches: 'Best matches', recommendedMatches: 'Recommended Matches', matchesIntro: 'Explore these as AI-based solution concepts, product workflows, source prototypes, and starting points for end-to-end delivery.', match: 'Match', pages: 'pages', livePreview: 'Live Preview', details: 'Details', noMatch: 'No exact match found', noMatchText: 'Try a broader keyword or switch Project type to All solutions.', resetPicker: 'Reset picker', solutionTags: ['Custom workflow', 'AI capabilities', 'Production ready'],
  categoriesEyebrow: 'Solutions by use case', categoriesTitle: 'AI Applications for Real Business Workflows', categoriesIntro: 'Explore product directions across industries. Each category demonstrates screens and workflows that can become a complete application with data, automation, integrations, and AI.', explore: 'Explore', referenceEyebrow: 'Reference applications', referenceTitle: 'Explore What We Can Build',
  deliveryEyebrow: 'End-to-end delivery', deliveryIntro: 'From the first product decision to production deployment, Themezyo brings design, engineering, AI, and ongoing support into one delivery process.', featureDetails: [['Product strategy and experience design', 'We shape requirements, user journeys, architecture, and interfaces around a measurable business outcome.'], ['Frontend, backend, and cloud delivery', 'We build responsive interfaces, APIs, databases, authentication, integrations, deployment, and monitoring.'], ['Useful AI inside the workflow', 'Add assistants, recommendations, search, document intelligence, generation, or automation where they create real value.'], ['Iteration after launch', 'Improve the product using feedback, analytics, model evaluation, performance reviews, and new releases.']], workflow: [['Discover', 'Define users, requirements, data, and success measures.'], ['Design', 'Plan the architecture, workflows, and product experience.'], ['Build', 'Develop the full stack and integrate the right AI models.'], ['Launch', 'Deploy, monitor, support, and improve the application.']],
  newsletterBenefits: ['New AI solution releases', 'Fresh previews and product workflows', 'Engineering and launch guidance'], newsletterEyebrow: 'Product updates', newsletterFormTitle: 'Join the update list', newsletterFormText: 'Get occasional updates about new solutions, product patterns, and practical engineering guidance.', subscribing: 'Subscribing...', subscribeSuccess: 'Subscribed successfully.', subscribeError: 'Unable to subscribe right now.', noSpam: 'No spam. Only useful product and engineering updates.',
} })
Object.assign(dictionaries.en.footer, { saasSolutions: 'SaaS Solutions', healthcareSolutions: 'Healthcare Solutions', exploreServices: 'Explore Services' })
Object.assign(fr.detail, {
  description: 'Description de la solution',
  longDescriptionEyebrow: 'Détails de la solution',
  longDescriptionTitle: 'Comment cette solution basée sur l’IA peut fonctionner',
})
Object.assign(fr.contact, {
  eyebrow: 'Projets et assistance', buildTitle: 'Dites-nous ce que vous souhaitez créer',
  buildIntro: 'Partagez une idée d’application, un besoin d’intégration IA, de modernisation ou d’assistance. Nous vous orienterons vers la prochaine étape adaptée.',
  bestFor: 'Idéal pour', bestForText: 'Sites web, applications mobiles, plateformes full-stack, fonctions IA, automatisation, intégrations, modernisation et assistance produit.',
  downloadHelp: 'Aide au téléchargement', downloadHelpText: 'Si vous ne pouvez pas télécharger un prototype source, écrivez-nous et nous vous enverrons un lien direct.',
  helpfulDetails: 'Informations utiles', helpfulDetailsText: 'Indiquez vos objectifs, utilisateurs, fonctionnalités, plateformes, systèmes existants, calendrier et liens utiles.',
  emailPlaceholder: 'vous@exemple.com', sending: 'Envoi en cours...', sendSuccess: 'Message envoyé avec succès.', sendError: 'Impossible d’envoyer votre message actuellement. Veuillez réessayer.',
  nameError: 'Veuillez saisir votre nom.', emailError: 'Veuillez saisir une adresse e-mail valide.', subjectError: 'Veuillez saisir un sujet.', messageError: 'Veuillez saisir votre message.',
})
Object.assign(fr.about, {
  title: 'À propos de Themezyo', intro: 'Nous transformons des idées ambitieuses en applications complètes intégrant l’IA.',
  missionTitle: 'Notre mission', mission: 'Themezyo aide les fondateurs et les équipes à passer de l’idée à la production avec un partenaire responsable de la stratégie produit, de l’expérience utilisateur, de l’ingénierie full-stack, de l’intégration IA, du déploiement cloud et de l’amélioration continue.',
  storyTitle: 'Notre histoire', story: 'Themezyo a commencé avec des concepts produits pratiques et des interfaces réutilisables. Cette base soutient aujourd’hui un objectif plus large : créer des applications complètes reliant une expérience soignée à des systèmes fiables, aux données métier, à l’automatisation et à une IA utile.',
  valuesTitle: 'Nos valeurs', values: [['Les résultats d’abord', 'Nous partons du problème utilisateur et du résultat métier avant de choisir l’approche produit et technique.'], ['Responsabilité de bout en bout', 'Nous réunissons design, frontend, backend, données, IA, déploiement et assistance.'], ['IA responsable', 'Nous utilisons l’IA lorsqu’elle apporte une valeur mesurable, avec évaluation, garde-fous et supervision humaine.'], ['Conçu pour évoluer', 'Nous privilégions des systèmes maintenables qui progressent avec les utilisateurs, les données et les besoins.']],
  fullStackTitle: 'Full Stack', fullStackText: 'Produits prêts pour le web et le mobile',
  aiNativeTitle: 'IA native', aiNativeText: 'Intelligence pratique et automatisation',
  endToEndTitle: 'De bout en bout', endToEndText: 'De la découverte à l’assistance continue',
})
Object.assign(fr.categories, {
  pageEyebrow: 'Solutions par secteur',
  pageTitle: 'Explorez les solutions IA par catégorie',
  pageIntro: 'Découvrez des concepts d’applications IA par secteur, processus et besoin métier. Chaque direction peut devenir un produit complet adapté à vos utilisateurs.',
})
Object.assign(fr.templatesPage, { newLabel: 'Nouveau', noResults: 'Aucune solution trouvée', noResultsText: 'Essayez un autre secteur, processus ou fonctionnalité.' })
Object.assign(fr, { home: {
  proofPoints: ['Stratégie produit', 'Développement full-stack', 'Intégration IA', 'Lancement et assistance'], industryExperience: 'Expérience applicative par secteur',
  explorerEyebrow: 'Explorateur de solutions', explorerTitle: 'Trouvez le bon point de départ', explorerIntro: 'Décrivez ce que vous souhaitez créer. Nous vous proposerons des concepts, parcours utilisateur et références pertinents.', explorerDelivery: 'Nous pouvons transformer la direction choisie en produit complet avec UX, frontend, backend, bases de données, authentification, IA, intégrations, déploiement et assistance.', requestProject: 'Demander un projet sur mesure', searchLabel: 'Rechercher par idée, secteur ou fonctionnalité', searchPlaceholder: 'Essayez clinique, tableau de bord, réservation...', searchKeywords: ['IA', 'Réservation', 'Tableau de bord', 'Commerce électronique', 'Clinique', 'École', 'Immobilier', 'Agence'], projectType: 'Type de projet', allSolutions: 'Toutes les solutions', bestMatches: 'Meilleures correspondances', recommendedMatches: 'Solutions recommandées', matchesIntro: 'Explorez ces concepts de solutions IA, parcours produit et prototypes comme points de départ d’une réalisation complète.', match: 'Choix', pages: 'pages', livePreview: 'Aperçu en direct', details: 'Détails', noMatch: 'Aucune correspondance exacte', noMatchText: 'Essayez un terme plus général ou sélectionnez Toutes les solutions.', resetPicker: 'Réinitialiser', solutionTags: ['Parcours sur mesure', 'Fonctions IA', 'Prêt pour la production'],
  categoriesEyebrow: 'Solutions par usage', categoriesTitle: 'Applications IA pour des processus métier réels', categoriesIntro: 'Explorez des directions produit par secteur. Chaque catégorie présente des écrans et parcours pouvant devenir une application complète avec données, automatisation, intégrations et IA.', explore: 'Explorer', referenceEyebrow: 'Applications de référence', referenceTitle: 'Découvrez ce que nous pouvons créer',
  deliveryEyebrow: 'Livraison de bout en bout', deliveryIntro: 'De la première décision produit au déploiement, Themezyo réunit design, ingénierie, IA et assistance continue.', featureDetails: [['Stratégie produit et expérience', 'Nous structurons les besoins, parcours, architecture et interfaces autour d’un résultat mesurable.'], ['Frontend, backend et cloud', 'Nous créons interfaces, API, bases de données, authentification, intégrations et déploiement.'], ['IA utile dans le processus', 'Ajoutez assistants, recommandations, recherche, génération et automatisation là où elles apportent une vraie valeur.'], ['Amélioration après lancement', 'Faites évoluer le produit grâce aux retours, données, évaluations et nouvelles versions.']], workflow: [['Découvrir', 'Définir les utilisateurs, besoins, données et mesures de réussite.'], ['Concevoir', 'Planifier l’architecture, les parcours et l’expérience.'], ['Développer', 'Créer la solution full-stack et intégrer les bons modèles IA.'], ['Lancer', 'Déployer, surveiller, assister et améliorer l’application.']],
  newsletterBenefits: ['Nouvelles solutions IA', 'Aperçus et parcours produit', 'Conseils d’ingénierie et de lancement'], newsletterEyebrow: 'Actualités produit', newsletterFormTitle: 'Rejoignez la liste', newsletterFormText: 'Recevez occasionnellement les nouvelles solutions, pratiques produit et conseils techniques.', subscribing: 'Inscription...', subscribeSuccess: 'Inscription réussie.', subscribeError: 'Inscription impossible actuellement.', noSpam: 'Aucun spam. Seulement des informations produit et techniques utiles.',
} })
Object.assign(fr.footer, { saasSolutions: 'Solutions SaaS', healthcareSolutions: 'Solutions de santé', exploreServices: 'Explorer les services' })
Object.assign(de.detail, {
  description: 'Lösungsbeschreibung',
  longDescriptionEyebrow: 'Lösungsdetails',
  longDescriptionTitle: 'So kann diese KI-basierte Lösung funktionieren',
})
Object.assign(de.contact, {
  eyebrow: 'Projekte und Support', buildTitle: 'Erzählen Sie uns, was Sie entwickeln möchten',
  buildIntro: 'Teilen Sie Ihre Anwendungsidee, KI-Integration, Modernisierungsanforderung oder Supportanfrage. Wir empfehlen den passenden nächsten Schritt.',
  bestFor: 'Geeignet für', bestForText: 'Websites, mobile Apps, Full-Stack-Plattformen, KI-Funktionen, Automatisierung, Integrationen, Modernisierung und Produktsupport.',
  downloadHelp: 'Download-Hilfe', downloadHelpText: 'Wenn Sie einen Quellprototyp nicht herunterladen können, senden wir Ihnen per E-Mail einen direkten Download-Link.',
  helpfulDetails: 'Hilfreiche Angaben', helpfulDetailsText: 'Nennen Sie Ziele, Nutzer, benötigte Funktionen, Plattformen, vorhandene Systeme, Zeitplan und relevante Links.',
  emailPlaceholder: 'sie@beispiel.de', sending: 'Wird gesendet...', sendSuccess: 'Nachricht erfolgreich gesendet.', sendError: 'Ihre Nachricht kann derzeit nicht gesendet werden. Bitte versuchen Sie es erneut.',
  nameError: 'Bitte geben Sie Ihren Namen ein.', emailError: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.', subjectError: 'Bitte geben Sie einen Betreff ein.', messageError: 'Bitte geben Sie Ihre Nachricht ein.',
})
Object.assign(de.about, {
  title: 'Über Themezyo', intro: 'Wir verwandeln ambitionierte Ideen in vollständige KI-gestützte Anwendungen.',
  missionTitle: 'Unsere Mission', mission: 'Themezyo begleitet Gründer und Teams von der Idee bis zur Produktion – mit einem verantwortlichen Partner für Produktstrategie, UX-Design, Full-Stack-Entwicklung, KI-Integration, Cloud-Bereitstellung und laufende Verbesserung.',
  storyTitle: 'Unsere Geschichte', story: 'Themezyo begann mit praktischen Produktkonzepten und wiederverwendbaren Oberflächen. Diese Grundlage unterstützt heute ein größeres Ziel: vollständige Anwendungen, die hochwertige Nutzererlebnisse mit zuverlässigen Systemen, Geschäftsdaten, Automatisierung und nützlicher KI verbinden.',
  valuesTitle: 'Unsere Werte', values: [['Ergebnisse zuerst', 'Wir beginnen mit dem Nutzerproblem und dem Geschäftsergebnis und wählen danach den passenden Produkt- und Technikansatz.'], ['Verantwortung von Anfang bis Ende', 'Wir verbinden Design, Frontend, Backend, Daten, KI, Bereitstellung und Support.'], ['Verantwortungsvolle KI', 'Wir nutzen KI dort, wo sie messbaren Nutzen schafft – mit Bewertung, Schutzmaßnahmen und menschlicher Kontrolle.'], ['Für Weiterentwicklung gebaut', 'Wir bevorzugen wartbare Systeme, die mit Nutzern, Daten und Anforderungen wachsen.']],
  fullStackTitle: 'Full Stack', fullStackText: 'Produkte für Web und Mobilgeräte',
  aiNativeTitle: 'KI-nativ', aiNativeText: 'Praktische Intelligenz und Automatisierung',
  endToEndTitle: 'Durchgängig', endToEndText: 'Von der Analyse bis zum laufenden Support',
})
Object.assign(de.categories, {
  pageEyebrow: 'Lösungen nach Branche',
  pageTitle: 'KI-Lösungen nach Kategorie entdecken',
  pageIntro: 'Entdecken Sie praktische KI-Anwendungskonzepte nach Branche, Arbeitsablauf und Geschäftsbedarf. Jede Richtung kann zu einem vollständigen Produkt für Ihre Nutzer entwickelt werden.',
})
Object.assign(de.templatesPage, { newLabel: 'Neu', noResults: 'Keine Lösungen gefunden', noResultsText: 'Versuchen Sie eine andere Branche, einen anderen Ablauf oder eine andere Funktion.' })
Object.assign(de, { home: {
  proofPoints: ['Produktstrategie', 'Full-Stack-Entwicklung', 'KI-Integration', 'Launch & Support'], industryExperience: 'Anwendungserfahrung nach Branche',
  explorerEyebrow: 'Lösungsfinder', explorerTitle: 'Den richtigen Ausgangspunkt finden', explorerIntro: 'Beschreiben Sie, was Sie entwickeln möchten. Wir zeigen passende Anwendungskonzepte, Nutzerabläufe und Referenzen.', explorerDelivery: 'Wir entwickeln die gewählte Richtung zu einem vollständigen Produkt mit UX, Frontend, Backend, Datenbanken, Authentifizierung, KI, Integrationen, Bereitstellung und Support.', requestProject: 'Individuelles Projekt anfragen', searchLabel: 'Nach Idee, Branche oder Funktion suchen', searchPlaceholder: 'Zum Beispiel Klinik, Dashboard, Buchung...', searchKeywords: ['KI', 'Buchung', 'Dashboard', 'E-Commerce', 'Klinik', 'Schule', 'Immobilien', 'Agentur'], projectType: 'Projekttyp', allSolutions: 'Alle Lösungen', bestMatches: 'Beste Treffer', recommendedMatches: 'Empfohlene Lösungen', matchesIntro: 'Entdecken Sie KI-Lösungskonzepte, Produktabläufe und Quellprototypen als Ausgangspunkt für die vollständige Umsetzung.', match: 'Treffer', pages: 'Seiten', livePreview: 'Live-Vorschau', details: 'Details', noMatch: 'Keine genaue Übereinstimmung', noMatchText: 'Versuchen Sie einen allgemeineren Begriff oder wählen Sie Alle Lösungen.', resetPicker: 'Auswahl zurücksetzen', solutionTags: ['Individueller Ablauf', 'KI-Funktionen', 'Produktionsbereit'],
  categoriesEyebrow: 'Lösungen nach Anwendungsfall', categoriesTitle: 'KI-Anwendungen für reale Geschäftsabläufe', categoriesIntro: 'Entdecken Sie Produktrichtungen nach Branche. Jede Kategorie zeigt Ansichten und Abläufe, die mit Daten, Automatisierung, Integrationen und KI zu einer vollständigen Anwendung werden können.', explore: 'Entdecken', referenceEyebrow: 'Referenzanwendungen', referenceTitle: 'Was wir für Sie entwickeln können',
  deliveryEyebrow: 'Durchgängige Umsetzung', deliveryIntro: 'Von der ersten Produktentscheidung bis zur Bereitstellung vereint Themezyo Design, Engineering, KI und laufenden Support.', featureDetails: [['Produktstrategie und UX', 'Wir richten Anforderungen, Nutzerwege, Architektur und Oberflächen an messbaren Ergebnissen aus.'], ['Frontend, Backend und Cloud', 'Wir entwickeln Oberflächen, APIs, Datenbanken, Authentifizierung, Integrationen und Bereitstellung.'], ['Nützliche KI im Arbeitsablauf', 'Assistenten, Empfehlungen, Suche, Generierung und Automatisierung schaffen echten Nutzen.'], ['Weiterentwicklung nach dem Launch', 'Verbessern Sie das Produkt mit Feedback, Analysen, Evaluationen und neuen Releases.']], workflow: [['Analysieren', 'Nutzer, Anforderungen, Daten und Erfolgsmaße definieren.'], ['Entwerfen', 'Architektur, Abläufe und Produkterlebnis planen.'], ['Entwickeln', 'Full Stack umsetzen und passende KI-Modelle integrieren.'], ['Starten', 'Bereitstellen, überwachen, unterstützen und verbessern.']],
  newsletterBenefits: ['Neue KI-Lösungen', 'Neue Vorschauen und Produktabläufe', 'Engineering- und Launch-Hinweise'], newsletterEyebrow: 'Produktneuigkeiten', newsletterFormTitle: 'Updates abonnieren', newsletterFormText: 'Erhalten Sie gelegentliche Updates zu Lösungen, Produktmustern und praktischer Entwicklung.', subscribing: 'Wird abonniert...', subscribeSuccess: 'Erfolgreich abonniert.', subscribeError: 'Das Abonnement ist derzeit nicht möglich.', noSpam: 'Kein Spam. Nur nützliche Produkt- und Engineering-Updates.',
} })
Object.assign(de.footer, { saasSolutions: 'SaaS-Lösungen', healthcareSolutions: 'Gesundheitslösungen', exploreServices: 'Services entdecken' })
Object.assign(arSafe.detail, {
  description: 'وصف الحل',
  longDescriptionEyebrow: 'تفاصيل الحل',
  longDescriptionTitle: 'كيف يمكن أن يعمل هذا الحل القائم على الذكاء الاصطناعي',
})
Object.assign(arSafe.contact, {
  eyebrow: 'المشاريع والدعم', buildTitle: 'أخبرنا بما تريد تطويره',
  buildIntro: 'شارك فكرة تطبيق جديد أو تكامل ذكاء اصطناعي أو متطلبات تحديث أو طلب دعم، وسنوجهك إلى الخطوة المناسبة.',
  bestFor: 'مناسب لـ', bestForText: 'المواقع وتطبيقات الهاتف والمنصات المتكاملة وميزات الذكاء الاصطناعي والأتمتة والتكاملات والتحديث ودعم المنتجات.',
  downloadHelp: 'مساعدة التنزيل', downloadHelpText: 'إذا تعذر تنزيل النموذج الأولي، راسلنا وسنرسل إليك رابط تنزيل مباشر.',
  helpfulDetails: 'تفاصيل مفيدة', helpfulDetailsText: 'أضف أهدافك والمستخدمين والميزات والمنصات والأنظمة الحالية والجدول الزمني والروابط ذات الصلة.',
  emailPlaceholder: 'name@example.com', sending: 'جارٍ الإرسال...', sendSuccess: 'تم إرسال الرسالة بنجاح.', sendError: 'تعذر إرسال رسالتك الآن. يرجى المحاولة مرة أخرى.',
  nameError: 'يرجى إدخال اسمك.', emailError: 'يرجى إدخال بريد إلكتروني صالح.', subjectError: 'يرجى إدخال الموضوع.', messageError: 'يرجى إدخال رسالتك.',
})
Object.assign(arSafe.about, {
  title: 'عن Themezyo', intro: 'نحوّل الأفكار الطموحة إلى تطبيقات متكاملة مدعومة بالذكاء الاصطناعي.',
  missionTitle: 'مهمتنا', mission: 'تساعد Themezyo المؤسسين والفرق على الانتقال من الفكرة إلى الإنتاج من خلال شريك واحد مسؤول عن استراتيجية المنتج وتجربة المستخدم والهندسة المتكاملة وتكامل الذكاء الاصطناعي والنشر السحابي والتحسين المستمر.',
  storyTitle: 'قصتنا', story: 'بدأت Themezyo بمفاهيم منتجات عملية وواجهات قابلة لإعادة الاستخدام. وتدعم هذه الخبرة اليوم هدفاً أوسع: تطوير تطبيقات متكاملة تربط تجربة مستخدم مصقولة بأنظمة موثوقة وبيانات الأعمال والأتمتة والذكاء الاصطناعي المفيد.',
  valuesTitle: 'قيمنا', values: [['النتائج أولاً', 'نبدأ بمشكلة المستخدم ونتيجة العمل ثم نختار المنهج المناسب للمنتج والتقنية.'], ['مسؤولية من البداية إلى النهاية', 'نربط التصميم والواجهة والأنظمة الخلفية والبيانات والذكاء الاصطناعي والنشر والدعم.'], ['ذكاء اصطناعي مسؤول', 'نستخدم الذكاء الاصطناعي عندما يضيف قيمة قابلة للقياس مع التقييم والضوابط والإشراف البشري.'], ['مصمم للتطور', 'نبني أنظمة قابلة للصيانة تتطور مع المستخدمين والبيانات واحتياجات العمل.']],
  fullStackTitle: 'تطوير متكامل', fullStackText: 'منتجات جاهزة للويب والهاتف',
  aiNativeTitle: 'ذكاء اصطناعي أصيل', aiNativeText: 'ذكاء عملي وأتمتة مفيدة',
  endToEndTitle: 'من البداية إلى النهاية', endToEndText: 'من الاستكشاف حتى الدعم المستمر',
})
Object.assign(arSafe.categories, {
  pageEyebrow: 'حلول حسب القطاع',
  pageTitle: 'استكشف حلول الذكاء الاصطناعي حسب الفئة',
  pageIntro: 'تصفح مفاهيم تطبيقات الذكاء الاصطناعي العملية حسب القطاع وسير العمل واحتياجات الأعمال. ويمكن تحويل كل اتجاه إلى منتج متكامل يناسب مستخدميك.',
})
Object.assign(arSafe.templatesPage, { newLabel: 'جديد', noResults: 'لم يتم العثور على حلول', noResultsText: 'جرّب قطاعاً أو سير عمل أو ميزة مختلفة.' })
Object.assign(arSafe, { home: {
  proofPoints: ['استراتيجية المنتج', 'تطوير متكامل', 'تكامل الذكاء الاصطناعي', 'الإطلاق والدعم'], industryExperience: 'خبرات تطبيقية حسب القطاع',
  explorerEyebrow: 'مستكشف الحلول', explorerTitle: 'اعثر على نقطة البداية المناسبة', explorerIntro: 'أخبرنا بما تريد تطويره وسنطابق احتياجك مع مفاهيم التطبيقات ورحلات المستخدم والنماذج المرجعية المناسبة.', explorerDelivery: 'يمكننا تحويل الاتجاه المختار إلى منتج متكامل يشمل تجربة المستخدم والواجهة والأنظمة الخلفية وقواعد البيانات والمصادقة والذكاء الاصطناعي والتكاملات والنشر والدعم.', requestProject: 'اطلب مشروعاً مخصصاً', searchLabel: 'ابحث حسب الفكرة أو القطاع أو الميزة', searchPlaceholder: 'جرّب عيادة، لوحة تحكم، حجز...', searchKeywords: ['الذكاء الاصطناعي', 'الحجز', 'لوحة التحكم', 'التجارة الإلكترونية', 'العيادة', 'المدرسة', 'العقارات', 'الوكالة'], projectType: 'نوع المشروع', allSolutions: 'كل الحلول', bestMatches: 'أفضل النتائج', recommendedMatches: 'الحلول المقترحة', matchesIntro: 'استكشف مفاهيم حلول الذكاء الاصطناعي ومسارات المنتج والنماذج الأولية كنقاط بداية لتنفيذ متكامل.', match: 'نتيجة', pages: 'صفحات', livePreview: 'معاينة مباشرة', details: 'التفاصيل', noMatch: 'لا توجد نتيجة مطابقة', noMatchText: 'جرّب كلمة أوسع أو اختر كل الحلول.', resetPicker: 'إعادة الضبط', solutionTags: ['سير عمل مخصص', 'ميزات ذكاء اصطناعي', 'جاهز للإنتاج'],
  categoriesEyebrow: 'حلول حسب الاستخدام', categoriesTitle: 'تطبيقات ذكاء اصطناعي لسير عمل حقيقي', categoriesIntro: 'استكشف اتجاهات المنتجات عبر القطاعات. تعرض كل فئة شاشات ومسارات يمكن تطويرها إلى تطبيق متكامل بالبيانات والأتمتة والتكاملات والذكاء الاصطناعي.', explore: 'استكشف', referenceEyebrow: 'تطبيقات مرجعية', referenceTitle: 'استكشف ما يمكننا تطويره',
  deliveryEyebrow: 'تنفيذ من البداية إلى النهاية', deliveryIntro: 'من أول قرار للمنتج حتى النشر، تجمع Themezyo التصميم والهندسة والذكاء الاصطناعي والدعم المستمر.', featureDetails: [['استراتيجية المنتج والتجربة', 'نحدد المتطلبات ورحلات المستخدم والبنية والواجهات حول نتيجة أعمال قابلة للقياس.'], ['الواجهة والأنظمة الخلفية والسحابة', 'نطور الواجهات وواجهات API وقواعد البيانات والمصادقة والتكاملات والنشر.'], ['ذكاء اصطناعي مفيد داخل سير العمل', 'نضيف المساعدين والتوصيات والبحث والتوليد والأتمتة حيث تحقق قيمة حقيقية.'], ['تحسين مستمر بعد الإطلاق', 'نطور المنتج باستخدام الملاحظات والتحليلات وتقييم النماذج والإصدارات الجديدة.']], workflow: [['الاستكشاف', 'تحديد المستخدمين والمتطلبات والبيانات ومقاييس النجاح.'], ['التصميم', 'تخطيط البنية وسير العمل وتجربة المنتج.'], ['التطوير', 'بناء الحل المتكامل ودمج نماذج الذكاء الاصطناعي المناسبة.'], ['الإطلاق', 'النشر والمراقبة والدعم والتحسين المستمر.']],
  newsletterBenefits: ['حلول ذكاء اصطناعي جديدة', 'معاينات ومسارات منتجات حديثة', 'إرشادات هندسية وإطلاق'], newsletterEyebrow: 'تحديثات المنتج', newsletterFormTitle: 'انضم إلى قائمة التحديثات', newsletterFormText: 'احصل على تحديثات دورية حول الحلول وأنماط المنتجات والإرشادات الهندسية العملية.', subscribing: 'جارٍ الاشتراك...', subscribeSuccess: 'تم الاشتراك بنجاح.', subscribeError: 'تعذر الاشتراك الآن.', noSpam: 'لا رسائل مزعجة، فقط تحديثات مفيدة عن المنتجات والهندسة.',
} })
Object.assign(arSafe.footer, { saasSolutions: 'حلول البرمجيات كخدمة', healthcareSolutions: 'حلول الرعاية الصحية', exploreServices: 'استكشف الخدمات' })

Object.assign(de.nav, { home: 'Startseite', services: 'Services', templates: 'KI-Lösungen', categories: 'Kategorien', about: 'Über uns', contact: 'Kontakt', docs: 'Hilfe', support: 'Projekt starten', downloadFree: 'Unsere Services', language: 'Sprache' })
Object.assign(de.hero, {
  eyebrow: 'Durchgängige Entwicklung von KI-Anwendungen', titlePrefix: 'Intelligente Anwendungen', titleHighlight: 'entwickeln und erfolgreich starten',
  description: 'Wir konzipieren, entwickeln und betreiben vollständige digitale Produkte – von responsiven Oberflächen und sicheren Backends bis zu Datenflüssen, Integrationen und produktionsreifer KI.',
  requirement: 'Bringen Sie eine Idee, einen Ablauf oder ein Geschäftsproblem mit. Wir formen daraus eine praktische Anwendung und begleiten sie über den Launch hinaus.',
  download: 'Unsere Arbeit entdecken', shareIdea: 'Anwendung besprechen', how: 'So funktioniert es', templates: 'KI-Lösungen', customers: 'Kunden', paid: 'Kostenpflichtig', help: 'Einrichtungshilfe', preview: 'Lösungsvorschau', moreShots: 'Weitere Ansichten', pixelnovate: 'Pixelnovate-Lösung',
})
Object.assign(de.common, { view: 'Ansehen', viewAllCategories: 'Alle Kategorien ansehen', viewAllTemplates: 'Alle KI-Lösungen ansehen', free: 'Kostenlos', templates: 'KI-Lösungen', rating: 'Bewertung', reviews: 'Bewertungen', backToTemplates: 'Zurück zu den KI-Lösungen', requestPaidSupport: 'Projekt starten', sendMessage: 'Nachricht senden' })
Object.assign(de.features, {
  title: 'Ein Team von der Idee bis zur Produktion', intro: 'Strategie, Design, Engineering, KI, Bereitstellung und laufende Verbesserung in einem Prozess.',
  items: [['Produkt und UX','Anforderungen in klare Nutzerwege, Oberflächen und eine fokussierte Roadmap übersetzen.'],['Full-Stack-Engineering','Robuste Frontends, APIs, Datenbanken, Authentifizierung und Integrationen entwickeln.'],['Angewandte KI','Suche, Generierung, Empfehlungen, Assistenten und Automatisierung in reale Abläufe integrieren.'],['Launch und Skalierung','Sicher bereitstellen, Leistung und KI-Qualität überwachen und nach dem Start weiterentwickeln.']],
})
Object.assign(de.newsletter, { title: 'Updates zu KI-Produkten und Engineering', intro: 'Erhalten Sie neue Anwendungskonzepte, praktische KI-Muster, Produktneuigkeiten und Engineering-Einblicke.', placeholder: 'E-Mail-Adresse eingeben', subscribe: 'Abonnieren' })
Object.assign(de.footer, { tagline: 'Durchgängiges Anwendungsdesign und Entwicklung mit Full-Stack-Engineering, praktischer KI, Bereitstellung und laufendem Support.', quick: 'Schnelllinks', resources: 'Ressourcen', company: 'Unternehmen', license: 'Lizenz', documentation: 'Dokumentation', help: 'Hilfecenter', releases: 'Neue Lösungen', licensing: 'Lizenzierung', rights: 'Alle Rechte vorbehalten.', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen' })
Object.assign(de.help, {
  title: 'Hilfe und Dokumentation', intro: 'Antworten auf häufige Fragen.', ctaTitle: 'Benötigen Sie professionelle Unterstützung?', ctaText: 'Senden Sie den Namen der Lösung und Ihre Anforderungen. Wir prüfen den Umfang und erstellen ein Angebot.',
  faqs: [['Wie erkunde ich eine Lösung?','Öffnen Sie eine Lösungsseite und prüfen Sie Abläufe, Screenshots, den Live-Prototyp, mögliche Produktionsfunktionen und Lieferoptionen.'],['Sind die Quellprototypen kostenlos?','Ja. Aufgeführte Downloads sind gemäß Lizenzbedingungen für private und kommerzielle Prototypen kostenlos.'],['Ist die Anpassung kostenlos?','Nein. Downloads sind kostenlos; Einrichtung, Konvertierung, Designänderungen und individuelle Entwicklung werden separat angeboten.'],['Kann ich die Dateien selbst anpassen?','Ja. Die Quellpakete sind editierbare Prototypen für Entwickler und Produktteams.'],['Kann ich eine produktionsreife Lösung anfragen?','Ja. Teilen Sie Nutzer, Abläufe, Integrationen, KI-Anforderungen und Launch-Ziele für eine vollständige Prüfung.'],['Welche Dateiformate erhalte ich?','Auf jeder Detailseite werden enthaltene Formate und Dateien vor dem Download aufgeführt.'],['Kann ich Lösungen für verschiedene Länder anpassen?','Ja. Sprache, Inhalte, Währung und Geschäftsdaten können für den Zielmarkt angepasst werden.']],
})
Object.assign(de.detail, { layout: 'Lösungsübersicht', source: 'Quelldateien', features: 'Funktionen', includes: 'Paketinhalt', download: 'Quellprototyp herunterladen', browser: 'Im Browser ansehen', updated: 'Aktualisiert', support: 'Support', license1: 'Kostenlose private und kommerzielle Nutzung', license2: 'Download ist kostenlos', license3: 'Support und individuelle Änderungen sind kostenpflichtig', ctaDescription: 'Erkunden Sie den Prototyp oder besprechen Sie die vollständige Umsetzung Ihres Produktionsprojekts.', defaultSource: 'Enthält die für diesen KI-basierten Lösungsprototyp aufgeführten Quelldateien und Assets.' })

dictionaries.fr = fr
dictionaries.ar = arSafe
dictionaries.de = de
Object.assign(dictionaries, additionalDictionaries)

const finishingTranslations = {
  en: { toggle:'Toggle navigation', filter:'Filter by category', sort:'Sort solutions', preview:'solution preview', relatedEyebrow:'More solutions', relatedTitle:'Related AI-based solutions' },
  fr: { toggle:'Ouvrir ou fermer la navigation', filter:'Filtrer par catégorie', sort:'Trier les solutions', preview:'aperçu de la solution', relatedEyebrow:'Autres solutions', relatedTitle:'Solutions IA associées' },
  de: { toggle:'Navigation umschalten', filter:'Nach Kategorie filtern', sort:'Lösungen sortieren', preview:'Lösungsvorschau', relatedEyebrow:'Weitere Lösungen', relatedTitle:'Ähnliche KI-Lösungen' },
  ar: { toggle:'فتح أو إغلاق التنقل', filter:'التصفية حسب الفئة', sort:'ترتيب الحلول', preview:'معاينة الحل', relatedEyebrow:'حلول إضافية', relatedTitle:'حلول ذكاء اصطناعي ذات صلة' },
  es: { toggle:'Abrir o cerrar navegación', filter:'Filtrar por categoría', sort:'Ordenar soluciones', preview:'vista previa de la solución', relatedEyebrow:'Más soluciones', relatedTitle:'Soluciones de IA relacionadas' },
  pt: { toggle:'Abrir ou fechar navegação', filter:'Filtrar por categoria', sort:'Ordenar soluções', preview:'prévia da solução', relatedEyebrow:'Mais soluções', relatedTitle:'Soluções de IA relacionadas' },
  hi: { toggle:'नेविगेशन खोलें या बंद करें', filter:'श्रेणी के अनुसार फ़िल्टर करें', sort:'समाधान क्रमबद्ध करें', preview:'समाधान पूर्वावलोकन', relatedEyebrow:'और समाधान', relatedTitle:'संबंधित एआई समाधान' },
  ja: { toggle:'ナビゲーションを開閉', filter:'カテゴリーで絞り込む', sort:'ソリューションを並べ替え', preview:'ソリューションのプレビュー', relatedEyebrow:'その他のソリューション', relatedTitle:'関連するAIソリューション' },
}
for (const [code, labels] of Object.entries(finishingTranslations)) {
  dictionaries[code].accessibility = { toggleNavigation:labels.toggle, filterCategory:labels.filter, sortSolutions:labels.sort, solutionPreview:labels.preview }
  Object.assign(dictionaries[code].detail, { relatedEyebrow:labels.relatedEyebrow, relatedTitle:labels.relatedTitle })
}

export function getNestedValue(source, path) {
  return path.split('.').reduce((value, key) => (value == null ? value : value[key]), source)
}

