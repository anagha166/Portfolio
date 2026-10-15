import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface HoverImageTermProps {
  term: string
  src: string
  alt: string
}

/** Bold, slightly larger term that reveals an image following the cursor on hover. */
export function HoverImageTerm({ term, src, alt }: HoverImageTermProps) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    if (!pos) return
    const hide = () => setPos(null)
    window.addEventListener('scroll', hide, true)
    return () => window.removeEventListener('scroll', hide, true)
  }, [pos])

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    const offset = 18
    const maxX = window.innerWidth - 280
    const maxY = window.innerHeight - 400
    setPos({
      x: Math.min(e.clientX + offset, maxX),
      y: Math.min(e.clientY + offset, maxY),
    })
  }

  return (
    <>
      <span
        className="relative inline cursor-default text-[1.15em] font-semibold text-black underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-black/50"
        onMouseEnter={onMove}
        onMouseMove={onMove}
        onMouseLeave={() => setPos(null)}
      >
        {term}
      </span>
      {pos &&
        createPortal(
          <div
            className="pointer-events-none fixed z-[80] w-[14rem] overflow-hidden rounded-sm border border-black/10 bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:w-[16rem]"
            style={{ left: pos.x, top: pos.y }}
          >
            <img src={src} alt={alt} className="h-auto w-full object-contain" />
          </div>,
          document.body,
        )}
    </>
  )
}

export function renderParagraphWithHoverPreviews(
  paragraph: string,
  previews: HoverImageTermProps[] | undefined,
): ReactNode {
  if (!previews?.length) return paragraph

  const escaped = previews.map((p) => p.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g')
  const parts = paragraph.split(pattern)

  return parts.map((part, i) => {
    const match = previews.find((p) => p.term === part)
    if (!match) return <span key={`${part}-${i}`}>{part}</span>
    return (
      <HoverImageTerm key={`${match.term}-${i}`} term={match.term} src={match.src} alt={match.alt} />
    )
  })
}
