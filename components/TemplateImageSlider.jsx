'use client'

import { useMemo, useState } from 'react'
import { useI18n } from './I18nProvider'

export default function TemplateImageSlider({ template }) {
  const { t } = useI18n()
  const defaultSlides = useMemo(() => {
    const imageSources = template.images?.length > 0 ? template.images : template.thumbnail ? [template.thumbnail] : []

    if (imageSources.length > 0) {
      return imageSources.map((src, index) => ({
        type: 'image',
        label: template.imageLabels?.[index] || `${t('slider.preview')} ${index + 1}`,
        src,
      }))
    }

    return [
      { type: 'gradient', label: t('slider.homepage'), color: template.color },
      { type: 'gradient', label: t('slider.sections'), color: template.color },
      { type: 'gradient', label: t('slider.mobile'), color: template.color },
    ]
  }, [template.color, template.imageLabels, template.images, template.thumbnail, t])

  const [activeIndex, setActiveIndex] = useState(0)
  const slides = defaultSlides
  const activeSlide = slides[activeIndex] || slides[0]

  function showPrevious() {
    setActiveIndex((index) => (index === 0 ? slides.length - 1 : index - 1))
  }

  function showNext() {
    setActiveIndex((index) => (index === slides.length - 1 ? 0 : index + 1))
  }

  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">{t('slider.preview')}</p>
          <h2 className="text-xl font-extrabold text-slate-800">{activeSlide.label}</h2>
        </div>
        <p className="text-sm font-semibold text-gray-500">{activeIndex + 1} / {slides.length}</p>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-gray-100 bg-slate-100">
        {activeSlide.type === 'image' ? (
          <a href={activeSlide.src} target="_blank" rel="noreferrer" className="block">
            <img src={activeSlide.src} alt={activeSlide.label} className="h-[420px] w-full object-contain" />
          </a>
        ) : (
          <div
            className="flex h-[420px] w-full items-end bg-gradient-to-br"
            style={{backgroundImage: `linear-gradient(135deg, ${activeSlide.color}90, ${activeSlide.color}35)`}}
          >
            <div className="m-6 max-w-sm rounded-lg bg-white/90 p-5 shadow-sm">
              <div className="text-xs font-semibold text-blue-600">{template.category}</div>
              <div className="mt-2 text-2xl font-bold text-slate-800">{template.title}</div>
              <div className="mt-2 text-sm text-gray-600">{activeSlide.label}</div>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={showPrevious}
          className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/90 text-slate-800 shadow-sm transition hover:bg-white"
          aria-label={t('slider.previous')}
        >
          &lt;
        </button>
        <button
          type="button"
          onClick={showNext}
          className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/90 text-slate-800 shadow-sm transition hover:bg-white"
          aria-label={t('slider.next')}
        >
          &gt;
        </button>
      </div>

      <div className="mt-4">
        <div className="flex gap-3 overflow-x-auto hide-scrollbar">
          {slides.map((slide, index) => (
            <button
              key={`${slide.label}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 bg-slate-100 transition ${activeIndex === index ? 'border-blue-600' : 'border-transparent opacity-75 hover:opacity-100'}`}
              aria-label={`${t('slider.show')} ${slide.label}`}
            >
              {slide.type === 'image' ? (
                <img src={slide.src} alt={slide.label} className="h-full w-full object-contain" />
              ) : (
                <span
                  className="block h-full w-full"
                  style={{backgroundImage: `linear-gradient(135deg, ${slide.color}90, ${slide.color}35)`}}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
