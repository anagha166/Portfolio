import { Link, Outlet } from 'react-router-dom'
import { FloatingNav } from './FloatingNav'
import { ThemeProvider } from './ThemeProvider'
import { StickerLayer } from '@/components/stickers/StickerLayer'

export function RootLayout() {
  return (
    <ThemeProvider>
      <Link
        to="/"
        className="fixed top-5 left-6 z-[70] text-[2.4rem] leading-none lowercase"
        style={{ fontFamily: 'var(--font-hero-script)', color: '#000000' }}
        aria-label="Go to homepage"
      >
        ak
      </Link>
      <FloatingNav />
      <StickerLayer />
      <main className="sketchbook-desk min-h-screen">
        <Outlet />
      </main>
    </ThemeProvider>
  )
}
