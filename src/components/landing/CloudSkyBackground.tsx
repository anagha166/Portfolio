import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

interface Cloud {
  x: number
  y: number
  scale: number
  speed: number
  opacity: number
  puffCount: number
  layer: 'back' | 'front'
}

function createClouds(width: number, height: number): Cloud[] {
  const backCount = Math.max(4, Math.floor(width / 420))
  const frontCount = Math.max(3, Math.floor(width / 520))

  const back = Array.from({ length: backCount }, (_, i) => ({
    x: (width / backCount) * i + Math.random() * 80,
    y: height * (0.12 + Math.random() * 0.32),
    scale: 0.9 + Math.random() * 1.05,
    speed: 0.08 + Math.random() * 0.08,
    opacity: 0.14 + Math.random() * 0.12,
    puffCount: 4 + Math.floor(Math.random() * 2),
    layer: 'back' as const,
  }))

  const front = Array.from({ length: frontCount }, (_, i) => ({
    x: (width / frontCount) * i + Math.random() * 60,
    y: height * (0.28 + Math.random() * 0.36),
    scale: 0.55 + Math.random() * 0.6,
    speed: 0.14 + Math.random() * 0.12,
    opacity: 0.2 + Math.random() * 0.15,
    puffCount: 3 + Math.floor(Math.random() * 2),
    layer: 'front' as const,
  }))

  return [...back, ...front]
}

function drawCloudPuff(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  alpha: number,
) {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.arc(x + radius * 0.9, y - radius * 0.28, radius * 0.7, 0, Math.PI * 2)
  ctx.arc(x + radius * 1.65, y + radius * 0.08, radius * 0.55, 0, Math.PI * 2)
  ctx.arc(x + radius * 0.4, y + radius * 0.38, radius * 0.48, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
  ctx.fill()
}

function drawCloud(ctx: CanvasRenderingContext2D, cloud: Cloud, width: number) {
  ctx.save()
  ctx.filter = cloud.layer === 'back' ? 'blur(20px)' : 'blur(12px)'
  const base = 40 * cloud.scale
  const wrap = width + base * 4

  for (let i = 0; i < cloud.puffCount; i += 1) {
    const offset = i * base * 0.52
    const x = ((cloud.x + offset) % wrap) - base * 2
    drawCloudPuff(
      ctx,
      x,
      cloud.y + Math.sin(i * 1.4 + (cloud.layer === 'back' ? 0.6 : 1.2)) * base * 0.16,
      base * (0.7 + (i % 3) * 0.14),
      cloud.opacity,
    )
  }
  ctx.restore()
}

export function CloudSkyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let clouds: Cloud[] = []
    let raf = 0
    let w = 0
    let h = 0
    let dpr = 1
    let lastFrame = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      clouds = createClouds(w, h)
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h)

      const sorted = [...clouds].sort((a, b) =>
        a.layer === b.layer ? 0 : a.layer === 'back' ? -1 : 1,
      )
      for (const cloud of sorted) {
        if (!prefersReducedMotion) {
          cloud.x += cloud.speed
        }
        drawCloud(ctx, cloud, w)
      }

      if (!prefersReducedMotion) {
        raf = requestAnimationFrame((timestamp) => {
          if (timestamp - lastFrame > 33) {
            lastFrame = timestamp
            render()
          } else {
            raf = requestAnimationFrame(render)
          }
        })
      }
    }

    resize()
    render()

    const onResize = () => {
      resize()
      if (prefersReducedMotion) render()
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [prefersReducedMotion])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      <div className="film-grain pointer-events-none absolute inset-0" aria-hidden="true" />
    </>
  )
}
