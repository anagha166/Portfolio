import { motion } from 'framer-motion'

interface PencilGraphicProps {
  className?: string
  scale?: number
}

export function PencilGraphic({ className = '', scale = 1 }: PencilGraphicProps) {
  return (
    <motion.svg
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ scale, transformOrigin: 'left center' }}
      aria-hidden="true"
    >
      {/* Shadow */}
      <ellipse cx="60" cy="22" rx="50" ry="1.5" fill="rgba(0,0,0,0.06)" />

      {/* Pencil body */}
      <rect x="8" y="8" width="88" height="8" rx="1" fill="#E8C872" />
      <rect x="8" y="8" width="88" height="8" rx="1" fill="url(#woodGrain)" />

      {/* Ferrule */}
      <rect x="92" y="7" width="10" height="10" rx="0.5" fill="#C0C0C0" />
      <rect x="92" y="7" width="10" height="10" rx="0.5" fill="url(#metalShine)" />

      {/* Tip / graphite */}
      <polygon points="102,12 118,12 102,7" fill="#6B6B6B" />
      <polygon points="102,12 118,12 102,17" fill="#4A4A4A" />
      <polygon points="116,12 118,12 102,12" fill="#2C2C2C" />

      {/* Eraser */}
      <rect x="2" y="7.5" width="8" height="9" rx="1.5" fill="#E8A0A0" />

      <defs>
        <pattern id="woodGrain" patternUnits="userSpaceOnUse" width="4" height="8">
          <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="metalShine" x1="92" y1="7" x2="102" y2="17">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
