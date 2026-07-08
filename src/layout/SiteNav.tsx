import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'Case Studies', path: '/#work' },
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
]

export function SiteNav() {
  const location = useLocation()

  const isActive = (item: NavItem) => {
    if (item.path === '/#work') return location.pathname === '/' || location.pathname.startsWith('/work')
    return location.pathname.startsWith(item.path)
  }

  return (
    <header className="fixed top-4 right-0 left-0 z-50 px-4 sm:px-8">
      <nav
        className="mx-auto flex max-w-[var(--content-max)] items-center justify-between rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 shadow-[0_10px_28px_rgba(20,40,80,0.08)] backdrop-blur-xl"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className="shrink-0 font-[var(--font-display)] text-[0.95rem] font-semibold tracking-tight text-[var(--color-ink)] transition-opacity duration-300 hover:opacity-75"
          data-cursor="link"
        >
          Anagha Kamath
        </NavLink>

        <ul className="flex items-center gap-0.5 overflow-x-auto sm:gap-1">
          {navItems.map((item) => {
            const active = isActive(item)
            const isHashLink = item.path.startsWith('/#')

            if (isHashLink) {
              return (
                <li key={item.path} className="shrink-0">
                  <a
                    href={item.path}
                    className="relative block min-h-[2.25rem] px-2.5 py-2 text-center text-[0.8rem] font-medium tracking-wide sm:px-3.5"
                    data-cursor="link"
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-1.5 bottom-1 h-0.5 rounded-full bg-[var(--color-accent)] sm:inset-x-3"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        active ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-faint)]'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            }

            return (
              <li key={item.path} className="shrink-0">
                <NavLink
                  to={item.path}
                  className="relative block min-h-[2.25rem] px-2.5 py-2 text-center text-[0.8rem] font-medium tracking-wide sm:px-3.5"
                  data-cursor="link"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-1.5 bottom-1 h-0.5 rounded-full bg-[var(--color-accent)] sm:inset-x-3"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      active ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-faint)]'
                    }`}
                  >
                    {item.label}
                  </span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
