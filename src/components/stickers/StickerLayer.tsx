import { useState, useEffect } from 'react'
import StickerPeel from './StickerPeel'
import { STICKER_PLACEMENTS, getInitialStickerPosition } from '@/data/stickers'

export function StickerLayer() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[35] overflow-hidden"
      aria-label="Decorative stickers"
    >
      {STICKER_PLACEMENTS.map((sticker) => {
        const pos = getInitialStickerPosition(sticker.x, sticker.y)

        return (
          <StickerPeel
            key={sticker.id}
            imageSrc={sticker.imageSrc}
            width={sticker.width}
            rotate={sticker.rotate}
            peelDirection={sticker.peelDirection}
            peelBackHoverPct={sticker.peelBackHoverPct}
            peelBackActivePct={sticker.peelBackActivePct}
            shadowIntensity={sticker.shadowIntensity ?? 0.55}
            lightingIntensity={0.08}
            initialPosition={pos}
          />
        )
      })}
    </div>
  )
}
