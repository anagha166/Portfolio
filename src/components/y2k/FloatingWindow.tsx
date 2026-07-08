interface FloatingWindowProps {
  title: string
  src: string
  alt: string
  className?: string
}

export function FloatingWindow({ title, src, alt, className = '' }: FloatingWindowProps) {
  return (
    <div className={`float-window ${className}`}>
      <div className="float-window-bar">
        <span>{title}</span>
        <div className="window-dots" aria-hidden="true">
          <span className="window-dot" />
          <span className="window-dot" />
        </div>
      </div>
      <img src={src} alt={alt} className="block w-full object-cover" loading="lazy" />
    </div>
  )
}
