'use client'

import { useEffect, useRef } from 'react'

export default function AiCanvasBackground({ intensity = 1 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const parent = canvas.parentElement
    const pointer = { x: 0, y: 0, active: false }
    let frameId
    let width = 0
    let height = 0
    let particles = []

    function resize() {
      const rect = parent.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      const count = Math.max(36, Math.floor((width * height) / 11500) * intensity)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        size: Math.random() * 2.6 + 1.2,
      }))
    }

    function movePointer(event) {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active = true
    }

    function leavePointer() {
      pointer.active = false
    }

    function draw() {
      context.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        if (pointer.active) {
          const dx = pointer.x - particle.x
          const dy = pointer.y - particle.y
          const distance = Math.hypot(dx, dy)

          if (distance > 0 && distance < 230) {
            const force = (230 - distance) / 230
            particle.vx += (dx / distance) * force * 0.032
            particle.vy += (dy / distance) * force * 0.032
          }
        }

        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.992
        particle.vy *= 0.992

        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1
        particle.x = Math.max(0, Math.min(width, particle.x))
        particle.y = Math.max(0, Math.min(height, particle.y))
      })

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i]
          const b = particles[j]
          const distance = Math.hypot(a.x - b.x, a.y - b.y)

          if (distance < 155) {
            context.strokeStyle = `rgba(100, 116, 139, ${(1 - distance / 155) * 0.26})`
            context.lineWidth = 1.25
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.stroke()
          }
        }
      }

      particles.forEach((particle) => {
        context.fillStyle = 'rgba(100, 116, 139, 0.58)'
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()

        context.fillStyle = 'rgba(148, 163, 184, 0.13)'
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size * 3.2, 0, Math.PI * 2)
        context.fill()
      })

      if (pointer.active) {
        const gradient = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 240)
        gradient.addColorStop(0, 'rgba(100, 116, 139, 0.22)')
        gradient.addColorStop(0.45, 'rgba(148, 163, 184, 0.1)')
        gradient.addColorStop(1, 'rgba(100, 116, 139, 0)')
        context.fillStyle = gradient
        context.beginPath()
        context.arc(pointer.x, pointer.y, 240, 0, Math.PI * 2)
        context.fill()
      }

      frameId = window.requestAnimationFrame(draw)
    }

    resize()
    draw()

    const observer = new ResizeObserver(resize)
    observer.observe(parent)
    parent.addEventListener('pointermove', movePointer)
    parent.addEventListener('pointerleave', leavePointer)

    return () => {
      window.cancelAnimationFrame(frameId)
      observer.disconnect()
      parent.removeEventListener('pointermove', movePointer)
      parent.removeEventListener('pointerleave', leavePointer)
    }
  }, [intensity])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
}
