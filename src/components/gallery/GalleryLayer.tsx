import { useState } from 'react'
import { GALLERY_ITEMS } from '@/data/gallery'
import type { GalleryItem } from '@/data/gallery'
import { GalleryFrame } from './GalleryFrame'
import { Lightbox } from './Lightbox'

export function GalleryLayer() {
  const [active, setActive] = useState<GalleryItem | null>(null)

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="false"
      >
        <div className="relative mx-auto h-full max-w-[90rem]">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="pointer-events-auto">
              <GalleryFrame item={item} onOpen={setActive} />
            </div>
          ))}
        </div>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </>
  )
}
