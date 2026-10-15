import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TOCItem {
  id: string
  title: string
}

interface StickyTOCProps {
  items: TOCItem[]
}

export function StickyTOC({ items }: StickyTOCProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [items])

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="sticky top-[32vh] hidden self-start lg:block"
      aria-label="Table of contents"
    >
      <p className="mb-4 text-xs tracking-[0.12em] text-black/40 uppercase">Contents</p>
      <ul className="space-y-1">
        {items.map(({ id, title }) => {
          const isActive = activeId === id
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleClick(id)}
                className={`relative block w-full py-1.5 text-left text-sm transition-colors duration-200 ${
                  isActive ? 'text-black' : 'text-black/40 hover:text-black/70'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="toc-indicator"
                    className="absolute top-1/2 -left-4 h-px w-2.5 -translate-y-1/2 bg-black"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                {title}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
