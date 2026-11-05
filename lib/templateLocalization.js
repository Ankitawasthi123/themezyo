const names = {
  fr: { Automotive: 'Automobile', Career: 'Carrière', 'Cleaning Services': 'Services de nettoyage', Cybersecurity: 'Cybersécurité', 'Digital Agency': 'Agence numérique', 'E-commerce': 'Commerce électronique', Education: 'Éducation', Energy: 'Énergie', Events: 'Événementiel', Finance: 'Finance', Healthcare: 'Santé', 'Health & Beauty': 'Santé et beauté', 'Home Services': 'Services à domicile', Industrial: 'Industrie', Legal: 'Services juridiques', Nonprofit: 'Organisation à but non lucratif', 'Real Estate': 'Immobilier', Restaurant: 'Restauration', SaaS: 'SaaS', 'Social Media': 'Réseaux sociaux', Travel: 'Voyage', 'AI Apps': 'Applications IA' },
  de: { Automotive: 'Automobil', Career: 'Karriere', 'Cleaning Services': 'Reinigungsdienste', Cybersecurity: 'Cybersicherheit', 'Digital Agency': 'Digitalagentur', 'E-commerce': 'E-Commerce', Education: 'Bildung', Energy: 'Energie', Events: 'Veranstaltungen', Finance: 'Finanzen', Healthcare: 'Gesundheit', 'Health & Beauty': 'Gesundheit und Schönheit', 'Home Services': 'Hausdienstleistungen', Industrial: 'Industrie', Legal: 'Rechtsdienstleistungen', Nonprofit: 'Gemeinnützige Organisation', 'Real Estate': 'Immobilien', Restaurant: 'Gastronomie', SaaS: 'SaaS', 'Social Media': 'Soziale Medien', Travel: 'Reisen', 'AI Apps': 'KI-Anwendungen' },
  ar: { Automotive: 'السيارات', Career: 'المسار المهني', 'Cleaning Services': 'خدمات التنظيف', Cybersecurity: 'الأمن السيبراني', 'Digital Agency': 'الوكالات الرقمية', 'E-commerce': 'التجارة الإلكترونية', Education: 'التعليم', Energy: 'الطاقة', Events: 'الفعاليات', Finance: 'التمويل', Healthcare: 'الرعاية الصحية', 'Health & Beauty': 'الصحة والجمال', 'Home Services': 'الخدمات المنزلية', Industrial: 'الصناعة', Legal: 'الخدمات القانونية', Nonprofit: 'المنظمات غير الربحية', 'Real Estate': 'العقارات', Restaurant: 'المطاعم', SaaS: 'البرمجيات كخدمة', 'Social Media': 'وسائل التواصل الاجتماعي', Travel: 'السفر', 'AI Apps': 'تطبيقات الذكاء الاصطناعي' },
}

export function localizeTemplateCategory(category, language) {
  return names[language]?.[category] || category
}

export function localizeTemplateDescription(template, language) {
  if (language === 'en') return template.summary || template.description
  const category = localizeTemplateCategory(template.category, language)
  if (language === 'fr') return `${template.title} est une idée de solution basée sur l’IA pour le secteur ${category}, avec des parcours utilisateur, des fonctionnalités possibles et un prototype source pour guider une réalisation complète.`
  if (language === 'de') return `${template.title} ist eine KI-basierte Lösungsidee für ${category} mit Nutzerabläufen, möglichen Funktionen und einem Quellprototyp als Grundlage für die vollständige Umsetzung.`
  if (language === 'ar') return `${template.title} فكرة حل قائم على الذكاء الاصطناعي لقطاع ${category}، تعرض رحلة المستخدم والميزات الممكنة ونموذجاً أولياً للمصدر لتوجيه التنفيذ الكامل.`
  return template.summary || template.description
}
