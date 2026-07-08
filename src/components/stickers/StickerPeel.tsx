import { useRef, useEffect, useMemo, useId, type CSSProperties } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import './StickerPeel.css'

gsap.registerPlugin(Draggable)

type InitialPosition =
  | 'center'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | { x: number; y: number }

export interface StickerPeelProps {
  color?: string
  rotate?: number
  peelBackHoverPct?: number
  peelBackActivePct?: number
  peelDirection?: number
  peelEasing?: string
  peelHoverEasing?: string
  width?: number
  shadowIntensity?: number
  lightingIntensity?: number
  initialPosition?: InitialPosition
  className?: string
}

export default function StickerPeel({
  color = '#6f8f78',
  rotate = 30,
  peelBackHoverPct = 30,
  peelBackActivePct = 40,
  peelEasing = 'power3.out',
  peelHoverEasing = 'power2.out',
  width = 200,
  shadowIntensity = 0.6,
  lightingIntensity = 0.1,
  initialPosition = 'center',
  peelDirection = 0,
  className = '',
}: StickerPeelProps) {
  const uid = useId().replace(/:/g, '')
  const containerRef = useRef<HTMLDivElement>(null)
  const dragTargetRef = useRef<HTMLDivElement>(null)
  const pointLightRef = useRef<SVGFEPointLightElement>(null)
  const pointLightFlippedRef = useRef<SVGFEPointLightElement>(null)
  const draggableInstanceRef = useRef<Draggable | null>(null)

  const filterIds = useMemo(
    () => ({
      pointLight: `pointLight-${uid}`,
      pointLightFlipped: `pointLightFlipped-${uid}`,
      dropShadow: `dropShadow-${uid}`,
      expandAndFill: `expandAndFill-${uid}`,
    }),
    [uid],
  )

  const defaultPadding = 10

  useEffect(() => {
    const target = dragTargetRef.current
    if (!target) return

    let startX = 0
    let startY = 0

    if (initialPosition === 'center') return

    if (
      typeof initialPosition === 'object' &&
      initialPosition.x !== undefined &&
      initialPosition.y !== undefined
    ) {
      startX = initialPosition.x
      startY = initialPosition.y
    }

    gsap.set(target, { x: startX, y: startY })
  }, [initialPosition])

  useEffect(() => {
    const target = dragTargetRef.current
    if (!target) return

    const boundsEl = target.parentElement
    if (!boundsEl) return

    draggableInstanceRef.current = Draggable.create(target, {
      type: 'x,y',
      bounds: boundsEl,
      inertia: true,
      onDrag() {
        const rot = gsap.utils.clamp(-24, 24, (this as Draggable).deltaX * 0.4)
        gsap.to(target, { rotation: rot, duration: 0.15, ease: 'power1.out' })
      },
      onDragEnd() {
        gsap.to(target, { rotation: 0, duration: 0.8, ease: 'power2.out' })
      },
    })[0]

    const handleResize = () => {
      if (!draggableInstanceRef.current) return
      draggableInstanceRef.current.update()

      const currentX = gsap.getProperty(target, 'x') as number
      const currentY = gsap.getProperty(target, 'y') as number

      const boundsRect = boundsEl.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()

      const maxX = boundsRect.width - targetRect.width
      const maxY = boundsRect.height - targetRect.height

      const newX = Math.max(0, Math.min(currentX, maxX))
      const newY = Math.max(0, Math.min(currentY, maxY))

      if (newX !== currentX || newY !== currentY) {
        gsap.to(target, { x: newX, y: newY, duration: 0.3, ease: 'power2.out' })
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
      draggableInstanceRef.current?.kill()
    }
  }, [])

  useEffect(() => {
    const updateLight = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      if (pointLightRef.current) {
        pointLightRef.current.setAttribute('x', String(x))
        pointLightRef.current.setAttribute('y', String(y))
      }

      const normalizedAngle = Math.abs(peelDirection % 360)
      if (pointLightFlippedRef.current) {
        if (normalizedAngle !== 180) {
          pointLightFlippedRef.current.setAttribute('x', String(x))
          pointLightFlippedRef.current.setAttribute('y', String(rect.height - y))
        } else {
          pointLightFlippedRef.current.setAttribute('x', '-1000')
          pointLightFlippedRef.current.setAttribute('y', '-1000')
        }
      }
    }

    const container = containerRef.current
    if (!container) return

    container.addEventListener('mousemove', updateLight)
    return () => container.removeEventListener('mousemove', updateLight)
  }, [peelDirection])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleTouchStart = () => container.classList.add('touch-active')
    const handleTouchEnd = () => container.classList.remove('touch-active')

    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchend', handleTouchEnd)
    container.addEventListener('touchcancel', handleTouchEnd)

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('touchcancel', handleTouchEnd)
    }
  }, [])

  const cssVars = useMemo(
    () =>
      ({
        '--sticker-rotate': `${rotate}deg`,
        '--sticker-p': `${defaultPadding}px`,
        '--sticker-peelback-hover': `${peelBackHoverPct}%`,
        '--sticker-peelback-active': `${peelBackActivePct}%`,
        '--sticker-peel-easing': peelEasing,
        '--sticker-peel-hover-easing': peelHoverEasing,
        '--sticker-width': `${width}px`,
        '--sticker-color': color,
        '--sticker-shadow-opacity': shadowIntensity,
        '--sticker-lighting-constant': lightingIntensity,
        '--peel-direction': `${peelDirection}deg`,
        '--filter-point-light': `url(#${filterIds.pointLight})`,
        '--filter-point-light-flipped': `url(#${filterIds.pointLightFlipped})`,
        '--filter-drop-shadow': `url(#${filterIds.dropShadow})`,
        '--filter-expand-fill': `url(#${filterIds.expandAndFill})`,
      }) as CSSProperties,
    [
      rotate,
      peelBackHoverPct,
      peelBackActivePct,
      peelEasing,
      peelHoverEasing,
      width,
      color,
      shadowIntensity,
      lightingIntensity,
      peelDirection,
      filterIds,
    ],
  )

  return (
    <div
      className={`draggable pointer-events-auto ${className}`}
      ref={dragTargetRef}
      style={cssVars}
    >
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <filter id={filterIds.pointLight}>
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity}
              lightingColor="white"
            >
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id={filterIds.pointLightFlipped}>
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight ref={pointLightFlippedRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id={filterIds.dropShadow}>
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation={3 * shadowIntensity}
              floodColor="black"
              floodOpacity={shadowIntensity}
            />
          </filter>

          <filter id={filterIds.expandAndFill}>
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(179,179,179)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div className="sticker-container" ref={containerRef}>
        <div className="sticker-main">
          <div className="sticker-lighting">
            <div className="sticker-star" aria-hidden="true" />
          </div>
        </div>

        <div className="flap">
          <div className="flap-lighting">
            <div className="flap-star" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
}
