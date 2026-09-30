interface SketchbookSpreadProps {
  children: React.ReactNode
  overlay?: React.ReactNode
  index: number
  total: number
  className?: string
}

export function SketchbookSpread({
  children,
  overlay,
  index,
  className = '',
}: SketchbookSpreadProps) {
  return (
    <section className={`relative ${className}`} aria-label={`Section ${index + 1}`}>
      {overlay && <div className="absolute inset-0 z-[8]">{overlay}</div>}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
