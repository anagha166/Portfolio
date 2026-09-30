import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navTabVariants } from '@/animations/transitions'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'Case Studies', path: '/projects' },
  { label: 'Studio', path: '/studio' },
  { label: 'About', path: '/about' },
]

function NavLinkItem({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const location = useLocation()

  return (
    <NavLink
      to={item.path}
      end={item.path === '/'}
      onClick={onNavigate}
      className="relative block px-1 py-2 text-[0.8125rem] tracking-wide md:py-1"
    >
      {({ isActive: linkActive }) => {
        const isProjectsChild =
          item.path === '/projects' && location.pathname.startsWith('/projects')
        const active = linkActive || isProjectsChild

        return (
          <>
            {active && (
              <motion.span
                layoutId="nav-tab"
                className="absolute -left-3 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--color-accent)] md:block"
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
            <motion.span
              className={`relative z-10 ${
                active
                  ? 'font-semibold text-[var(--color-ink)]'
                  : 'font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]'
              }`}
              variants={navTabVariants}
              animate={active ? 'active' : 'inactive'}
            >
              {item.label}
            </motion.span>
          </>
        )
      }}
    </NavLink>
  )
}

export function FloatingNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile: hamburger top-right */}
      <div className="fixed top-5 right-6 z-[70] md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-black transition-transform duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-black transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-black transition-transform duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-12 min-w-[10rem] rounded-sm border border-[var(--color-window-border)] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              aria-label="Main navigation"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLinkItem
                    key={item.path}
                    item={item}
                    onNavigate={() => setMenuOpen(false)}
                  />
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop: vertical rail */}
      <nav
        className="fixed top-1/2 right-8 z-50 hidden -translate-y-1/2 flex-col items-end gap-2 md:flex"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <NavLinkItem key={item.path} item={item} />
        ))}
      </nav>
    </>
  )
}
