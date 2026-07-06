interface WashiTapeProps {
  position: 'top-left' | 'top-right' | 'bottom'
  color?: 'blush' | 'sage' | 'cream' | 'coral' | 'sky' | 'butter'
}

const tapeColors: Record<NonNullable<WashiTapeProps['color']>, string> = {
  blush: 'rgba(232, 175, 155, 0.88)',
  sage: 'rgba(168, 198, 158, 0.85)',
  cream: 'rgba(240, 228, 200, 0.9)',
  coral: 'rgba(232, 148, 128, 0.9)',
  sky: 'rgba(148, 188, 218, 0.88)',
  butter: 'rgba(240, 218, 148, 0.92)',
}

export function WashiTape({ position, color = 'cream' }: WashiTapeProps) {
  const base = 'pointer-events-none absolute h-5 w-14 opacity-95'
  const bg = tapeColors[color]

  if (position === 'top-left') {
    return (
      <div
        className={`${base} -top-2 -left-3 -rotate-[28deg]`}
        style={{ background: bg }}
        aria-hidden="true"
      />
    )
  }

  if (position === 'top-right') {
    return (
      <div
        className={`${base} -top-2 -right-4 rotate-[18deg]`}
        style={{ background: bg }}
        aria-hidden="true"
      />
    )
  }

  return (
    <div
      className={`${base} -bottom-2 left-1/2 w-16 -translate-x-1/2 rotate-[-4deg]`}
      style={{ background: bg }}
      aria-hidden="true"
    />
  )
}
