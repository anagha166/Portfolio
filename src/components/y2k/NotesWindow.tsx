import type { ReactNode } from 'react'

interface NotesWindowProps {
  title: string
  children: ReactNode
  className?: string
}

export function NotesWindow({ title, children, className = '' }: NotesWindowProps) {
  return (
    <div className={`notes-window ${className}`}>
      <div className="notes-titlebar">{title}</div>
      <div className="notes-body">{children}</div>
    </div>
  )
}
