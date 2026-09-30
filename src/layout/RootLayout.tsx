import { Link, Outlet } from 'react-router-dom'
import { FloatingNav } from './FloatingNav'
import { ScrollToTop } from './ScrollToTop'
import { SiteFooter } from './SiteFooter'
import { ThemeProvider } from './ThemeProvider'
import { StickerLayer } from '@/components/stickers/StickerLayer'

export function RootLayout() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Link
        to="/"
        className="fixed top-5 left-6 z-[70] text-[2.4rem] leading-none lowercase text-black"
        style={{ fontFamily: 'var(--font-hero-script)' }}
        aria-label="Go to homepage"
      >
        ak
      </Link>
      <FloatingNav />
      <StickerLayer />
      <main className="min-h-screen bg-white">
        <Outlet />
      </main>
      <SiteFooter />
    </ThemeProvider>
  )
}
