const pills = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#stuff' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#formula' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function PillNav() {
  return (
    <nav className="pill-nav" aria-label="Main navigation" onClick={(e) => e.stopPropagation()}>
      {pills.map((pill) => (
        <a key={pill.label} href={pill.href} className="pill-nav-link">
          {pill.label}
        </a>
      ))}
    </nav>
  )
}
