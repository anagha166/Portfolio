import type { ReactNode } from 'react'

/** Serif italic word with yellow highlighter — matches reference headings */
export function HighlightWord({ children }: { children: ReactNode }) {
  return (
    <span className="hl-yellow font-[family-name:var(--font-display)] italic font-normal">
      {children}
    </span>
  )
}
