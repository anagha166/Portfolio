import { motion } from 'framer-motion'

interface SkyBackgroundProps {
  muted?: boolean
}

const cloudBlobs = [
  { id: 'a', width: 300, height: 110, top: '12%', left: '8%', duration: 44 },
  { id: 'b', width: 360, height: 120, top: '26%', left: '58%', duration: 52 },
  { id: 'c', width: 240, height: 96, top: '48%', left: '18%', duration: 48 },
]

export function SkyBackground({ muted = false }: SkyBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${muted ? 'opacity-65' : ''}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-sky-top)_0%,var(--color-sky-mid)_55%,var(--color-sky-bottom)_100%)]" />
      {cloudBlobs.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute rounded-full bg-[var(--color-cloud)]/55 blur-2xl"
          style={{
            width: cloud.width,
            height: cloud.height,
            top: cloud.top,
            left: cloud.left,
          }}
          animate={{ x: [-18, 22, -18] }}
          transition={{
            duration: cloud.duration,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}
    </div>
  )
}
