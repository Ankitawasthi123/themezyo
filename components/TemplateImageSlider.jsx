'use client'

import { useEffect, useMemo, useState } from 'react'
import { useI18n } from './I18nProvider'

export default function TemplateImageSlider({ template }) {
  const { t } = useI18n()
  const defaultSlides = useMemo(() => {
    const imageSources = template.images?.length > 0 ? template.images : template.thumbnail ? [template.thumbnail] : []

    if (imageSources.length > 0) {
      return imageSources.map((src, index) => ({
        type: 'image',
        label: `${t('slider.preview')} ${index + 1}`,
        src,
      }))
    }

    return [
      { type: 'gradient', label: t('slider.homepage'), color: template.color },
      { type: 'gradient', label: t('slider.sections'), color: template.color },
      { type: 'gradient', label: t('slider.mobile'), color: template.color },
    ]
  }, [template.color, template.images, template.thumbnail, t])

  const [uploadedSlides, setUploadedSlides] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = uploadedSlides.length > 0 ? uploadedSlides : defaultSlides
  const activeSlide = slides[activeIndex] || slides[0]

  useEffect(() => {
    setActiveIndex(0)
  }, [uploadedSlides.length])

  useEffect(() => {
    return () => {
      uploadedSlides.forEach((slide) => {
        if (slide.type === 'image' && slide.src.startsWith('blob:')) {
          URL.revokeObjectURL(slide.src)
        }
      })
    }
  }, [uploadedSlides])

  function handleUpload(event) {
    const files = Array.from(event.target.files || [])
    const imageFiles = files.filter((file) => file.type.startsWith('image/'))

    setUploadedSlides((currentSlides) => {
      currentSlides.forEach((slide) => {
        if (slide.type === 'image' && slide.src.startsWith('blob:')) {
          URL.revokeObjectURL(slide.src)
        }
      })

      return imageFiles.map((file) => ({
        type: 'image',
        label: file.name,
        src: URL.createObjectURL(file),
      }))
    })
  }

  function showPrevious() {
    setActiveIndex((index) => (index === 0 ? slides.length - 1 : index - 1))
  }

  function showNext() {
    setActiveIndex((index) => (index === slides.length - 1 ? 0 : index + 1))
  }

  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="relative overflow-hidden rounded-lg">
        {activeSlide.type === 'image' ? (
          <img src={activeSlide.src} alt={activeSlide.label} className="w-full h-80 object-cover" />
        ) : (
          <div
            className="w-full h-80 bg-gradient-to-br flex items-end"
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

      <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {slides.map((slide, index) => (
            <button
              key={`${slide.label}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border-2 transition ${activeIndex === index ? 'border-blue-600' : 'border-transparent opacity-75 hover:opacity-100'}`}
              aria-label={`${t('slider.show')} ${slide.label}`}
            >
              {slide.type === 'image' ? (
                <img src={slide.src} alt={slide.label} className="h-full w-full object-cover" />
              ) : (
                <span
                  className="block h-full w-full"
                  style={{backgroundImage: `linear-gradient(135deg, ${slide.color}90, ${slide.color}35)`}}
                />
              )}
            </button>
          ))}
        </div>

        <label className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-blue-200 px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-50">
          {t('slider.upload')}
          <input type="file" accept="image/*" multiple onChange={handleUpload} className="sr-only" />
        </label>
      </div>
    </div>
  )
}
