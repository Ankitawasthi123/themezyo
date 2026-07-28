const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://themezyo.com'

export default function robots() {
  const publicContentRules = {
    allow: '/',
    disallow: ['/api/', '/downloads/'],
  }

  return {
    rules: [
      {
        // Search, answer, and user-directed agents used by major AI products.
        userAgent: [
          'OAI-SearchBot',
          'ChatGPT-User',
          'GPTBot',
          'ClaudeBot',
          'Claude-SearchBot',
          'Claude-User',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Googlebot',
          'Bingbot',
          'Applebot',
          'Applebot-Extended',
          'Amazonbot',
          'Meta-ExternalAgent',
          'Bytespider',
          'cohere-ai',
        ],
        ...publicContentRules,
      },
      {
        // Keep the site discoverable by new and unlisted crawlers as well.
        userAgent: '*',
        ...publicContentRules,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
