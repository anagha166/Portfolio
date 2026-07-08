import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navTabVariants } from '@/animations/transitions'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'Case Studies', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
]

export function FloatingNav() {
  const location = useLocation()

  return (
    <nav
      className="fixed top-1/2 right-8 z-50 flex -translate-y-1/2 flex-col items-end gap-2"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/'}
          className="relative px-1 py-1 text-[0.8125rem] tracking-wide"
        >
          {({ isActive: linkActive }) => {
            const isProjectsChild =
              item.path === '/projects' &&
              location.pathname.startsWith('/projects')
            const active = linkActive || isProjectsChild

            return (
              <>
                {active && (
                  <motion.span
                    layoutId="nav-tab"
                    className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--color-accent)]"
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
      ))}
    </nav>
  )
}
