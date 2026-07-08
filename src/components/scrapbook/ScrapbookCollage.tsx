import { motion } from 'framer-motion'
import heroVideo from '@/components/sketchbook/download (1).mp4'

export function ScrapbookCollage() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="relative h-full w-full"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <video
          src={heroVideo}
          className="h-full w-full object-contain object-right"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Featured sketchbook animation"
        />
      </motion.div>
    </div>
  )
}
