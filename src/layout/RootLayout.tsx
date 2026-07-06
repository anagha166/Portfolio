import { Outlet } from 'react-router-dom'
import { FloatingNav } from './FloatingNav'
import { ThemeProvider } from './ThemeProvider'
import { StickerLayer } from '@/components/stickers/StickerLayer'

export function RootLayout() {
  return (
    <ThemeProvider>
      <FloatingNav />
      <StickerLayer />
      <main className="sketchbook-desk min-h-screen">
        <Outlet />
      </main>
    </ThemeProvider>
  )
}
