'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const progress = document.createElement('div')
    progress.className = 'scroll-progress'
    document.body.appendChild(progress)

    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progressValue = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
      progress.style.transform = `scaleX(${Math.min(Math.max(progressValue, 0), 1)})`
    }

    const revealItems = Array.from(
      document.querySelectorAll(
        [
          'main > section',
          'main h1',
          'main h2',
          'main h3',
          'main p',
          'main article',
          'main .rounded-xl.border',
          'main .rounded-2xl.border',
          'main a.group',
          'footer',
        ].join(',')
      )
    ).filter((item, index, items) => items.indexOf(item) === index)

    revealItems.forEach((item, index) => {
      item.classList.add('scroll-reveal')
      item.style.setProperty('--reveal-delay', `${Math.min(index % 7, 6) * 45}ms`)

      if (item.matches('h1,h2,h3')) {
        item.classList.add('scroll-reveal-title')
      } else if (item.matches('a.group,.rounded-xl.border,.rounded-2xl.border')) {
        item.classList.add(index % 2 === 0 ? 'scroll-reveal-card' : 'scroll-reveal-card-alt')
      } else if (item.matches('p')) {
        item.classList.add('scroll-reveal-soft')
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12,
      }
    )

    revealItems.forEach((item) => observer.observe(item))
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      progress.remove()
    }
  }, [])

  return null
}
