'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { getTemplateCategories, templates } from '../data/templates'

const popularKeywords = ['AI', 'booking', 'dashboard', 'e-commerce', 'clinic', 'school', 'real estate', 'agency']

function getPageCount(template) {
  const pages = template.stats?.find((stat) => stat.label === 'Pages')
  const pageCount = Number.parseInt(pages?.value, 10)

  return Number.isFinite(pageCount) ? pageCount : 1
}

function createSearchText(template) {
  return [
    template.title,
    template.category,
    template.layoutType,
    template.summary,
    template.description,
    template.hero?.tagline,
    template.hero?.headline,
    template.hero?.subtext,
    ...(template.sections || []),
    ...(template.features || []),
    ...(template.includes || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}

function scoreTemplate(template, selectedCategory, query) {
  const searchText = createSearchText(template)
  const normalizedQuery = query.trim().toLowerCase()
  const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean)
  let score = template.rating * 8 + template.reviews / 30

  if (selectedCategory !== 'all' && template.category === selectedCategory) {
    score += 80
  }

  queryTerms.forEach((term) => {
    if (template.title.toLowerCase().includes(term)) score += 32
    if (template.category.toLowerCase().includes(term)) score += 22
    if (searchText.includes(term)) score += 14
  })

  if (normalizedQuery && !queryTerms.some((term) => searchText.includes(term))) {
    score -= 60
  }

  return score
}

function matchesSearch(template, query) {
  const queryTerms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)

  if (!queryTerms.length) return true

  const searchText = createSearchText(template)

  return queryTerms.every((term) => searchText.includes(term))
}

export default function SmartTemplatePicker() {
  const categories = useMemo(() => getTemplateCategories(), [])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [query, setQuery] = useState('')

  const recommendations = useMemo(() => {
    return [...templates]
      .filter((template) => selectedCategory === 'all' || template.category === selectedCategory)
      .filter((template) => matchesSearch(template, query))
      .map((template) => ({
        template,
        score: scoreTemplate(template, selectedCategory, query),
      }))
      .sort((first, second) => second.score - first.score)
      .slice(0, 3)
      .map((item) => item.template)
  }, [query, selectedCategory])

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/70 to-emerald-50/70">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.35fr]">
            <div className="border-b border-blue-100 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Smart picker</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
                Find the Right Template
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Tell us what you are building and the picker will recommend matching templates and AI-based website ideas from the Themezyo collection.
              </p>
              <div className="mt-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="text-sm leading-6 text-gray-700">
                  Need more than a template? You can request a custom project with frontend, backend, and AI integration work based on your requirements.
                </p>
                <Link href="/contact" className="mt-3 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700">
                  Request Custom Project
                </Link>
              </div>

              <div className="mt-6">
                <label htmlFor="template-search" className="text-sm font-bold text-slate-800">
                  Search by idea, industry, or feature
                </label>
                <input
                  id="template-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try clinic, dashboard, booking, school..."
                  className="mt-2 min-h-12 w-full rounded-lg border border-blue-100 bg-white px-4 text-sm font-medium text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  {popularKeywords.map((keyword) => (
                    <button
                      key={keyword}
                      type="button"
                      onClick={() => setQuery(keyword)}
                      className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                    >
                      {keyword}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-bold text-slate-800">Project type</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('all')}
                    className={`rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${selectedCategory === 'all' ? 'border-blue-600 bg-blue-600 text-white' : 'border-blue-100 bg-white text-gray-700 hover:bg-blue-50'}`}
                  >
                    All templates
                  </button>
                  {categories.slice(0, 7).map((category) => (
                    <button
                      key={category.title}
                      type="button"
                      onClick={() => setSelectedCategory(category.title)}
                      className={`rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${selectedCategory === category.title ? 'border-blue-600 bg-blue-600 text-white' : 'border-blue-100 bg-white text-gray-700 hover:bg-blue-50'}`}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">Best matches</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-slate-800">Recommended Matches</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Use these as ready templates, project starters, or AI-based ideas for a larger custom build.
                  </p>
                </div>
                <Link href="/templates" className="text-sm font-bold text-blue-600 transition hover:text-blue-700">
                  View all templates
                </Link>
              </div>

              {recommendations.length ? (
                <div className="mt-6 grid gap-4">
                  {recommendations.map((template, index) => {
                  const pages = getPageCount(template)
                  const image = template.thumbnail || template.images?.[0]

                  return (
                    <div
                      key={template.id}
                      className="group grid gap-4 rounded-xl border border-blue-100 bg-white p-4 transition hover:border-blue-300 hover:bg-blue-50/40 sm:grid-cols-[180px_1fr]"
                    >
                      <div className="relative overflow-hidden rounded-lg bg-slate-100">
                        {image ? (
                          <img
                            src={image}
                            alt={`${template.title} preview`}
                            loading="lazy"
                            decoding="async"
                            className="h-36 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-full"
                          />
                        ) : (
                          <div
                            className="h-36 w-full sm:h-full"
                            style={{ backgroundImage: `linear-gradient(135deg, ${template.color}80, ${template.color}35)` }}
                          />
                        )}
                        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-extrabold text-blue-700">
                          Match {index + 1}
                        </span>
                      </div>

                      <div className="flex min-w-0 flex-col">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">{template.category}</span>
                          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">{pages} pages</span>
                          <span className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-bold text-gray-700">{template.price}</span>
                        </div>
                        <h4 className="mt-3 text-xl font-extrabold text-slate-800">{template.title}</h4>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                          {template.summary || template.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {(template.features || []).slice(0, 3).map((feature) => (
                            <span key={feature} className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-gray-600">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="mt-5 flex flex-wrap gap-3">
                          {template.previewPath ? (
                            <a
                              href={template.previewPath}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
                            >
                              Live Preview
                            </a>
                          ) : null}
                          <Link
                            href={`/templates/${template.id}`}
                            className="rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                  })}
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6">
                  <h4 className="text-xl font-extrabold text-slate-800">No exact match found</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Try a broader keyword or switch Project type to All templates.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('')
                      setSelectedCategory('all')
                    }}
                    className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    Reset picker
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
