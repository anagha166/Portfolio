interface PageCurlProps {
  position?: 'top-right' | 'bottom-right'
}

export function PageCurl({ position = 'top-right' }: PageCurlProps) {
  const isTop = position === 'top-right'

  return (
    <div
      className={`pointer-events-none absolute z-20 h-20 w-20 opacity-0 transition-opacity duration-400 group-hover:opacity-100 ${
        isTop ? 'top-0 right-0' : 'right-0 bottom-0'
      }`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: isTop
            ? 'linear-gradient(225deg, rgba(0,0,0,0.06) 0%, transparent 50%)'
            : 'linear-gradient(315deg, rgba(0,0,0,0.06) 0%, transparent 50%)',
        }}
      />
      <div
        className={`absolute ${isTop ? 'top-0 right-0' : 'right-0 bottom-0'} h-12 w-12`}
        style={{
          background: isTop
            ? 'radial-gradient(circle at 100% 0%, rgba(0,0,0,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle at 100% 100%, rgba(0,0,0,0.08) 0%, transparent 70%)',
          transform: isTop ? 'skewX(-5deg)' : 'skewX(5deg)',
        }}
      />
    </div>
  )
}
