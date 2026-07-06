interface SectionEyebrowProps {
  children: React.ReactNode
}

export function SectionEyebrow({ children }: SectionEyebrowProps) {
  return <p className="text-eyebrow">{children}</p>
}

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-section-title mt-5 max-w-xl ${className}`}>{children}</h2>
  )
}
