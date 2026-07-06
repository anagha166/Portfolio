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
      className="sticky top-28 hidden lg:block"
      aria-label="Table of contents"
    >
      <p className="mb-4 text-xs font-medium tracking-[0.15em] text-[var(--color-graphite-faint)] uppercase dark:text-[var(--color-graphite-faint-dark)]">
        Contents
      </p>
      <ul className="space-y-2">
        {items.map(({ id, title }) => {
          const isActive = activeId === id
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleClick(id)}
                className={`relative block w-full py-1 text-left text-sm transition-colors duration-300 ${
                  isActive
                    ? 'text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]'
                    : 'text-[var(--color-graphite-faint)] hover:text-[var(--color-graphite-light)] dark:text-[var(--color-graphite-faint-dark)] dark:hover:text-[var(--color-graphite-light-dark)]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="toc-indicator"
                    className="absolute top-1/2 -left-4 h-px w-2 -translate-y-1/2 bg-[var(--color-accent)] dark:bg-[var(--color-accent-dark)]"
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
