interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <header className={`max-w-2xl ${className}`}>
      {eyebrow && <p className="text-eyebrow">{eyebrow}</p>}
      <h2 className={`text-editorial ${eyebrow ? 'mt-4' : ''}`}>{title}</h2>
      {description && (
        <p className="text-body-lg mt-6">{description}</p>
      )}
    </header>
  )
}
