import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navTabVariants } from '@/animations/transitions'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
]

export function FloatingNav() {
  const location = useLocation()

  return (
    <nav
      className="fixed top-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-0.5 rounded-2xl border border-black/[0.06] bg-[var(--color-paper)]/75 px-1.5 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl dark:border-white/[0.06] dark:bg-[var(--color-paper-warm-dark)]/75 dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className="relative px-3.5 py-2 text-[0.8125rem] font-normal tracking-wide"
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
                    className="absolute inset-0 rounded-xl bg-black/[0.04] dark:bg-white/[0.06]"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <motion.span
                  className={`relative z-10 ${
                    active
                      ? 'font-medium text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]'
                      : 'text-[var(--color-graphite-faint)] dark:text-[var(--color-graphite-faint-dark)]'
                  }`}
                  variants={navTabVariants}
                  animate={active ? 'active' : 'inactive'}
                >
                  {item.label}
                </motion.span>
              </>
            )}}
          </NavLink>
      ))}

      <div className="mx-1.5 h-4 w-px bg-black/[0.06] dark:bg-white/[0.08]" />
      <ThemeToggle />
    </nav>
  )
}
