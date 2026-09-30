import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { spreadVariants } from '@/animations/scroll'
import { SectionEyebrow, SectionTitle } from '@/components/ui/SectionTypography'
import { getStudioTeaserPieces } from '@/data/studio'

export function StudioSpread() {
  const pieces = getStudioTeaserPieces(4)

  return (
    <div className="flex flex-col justify-center px-[var(--spacing-page)] py-20 md:py-28">
      <motion.div
        variants={spreadVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        <SectionEyebrow>Studio</SectionEyebrow>
        <SectionTitle>Paintings, sketches, and small worlds</SectionTitle>
        <p className="text-lead mt-6 max-w-lg">
          I&apos;m a creator at heart — and when it&apos;s not a design project I&apos;m working
          on, you can find me covered in paint.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {pieces.map((piece, i) => (
          <motion.div
            key={piece.id}
            variants={spreadVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5%' }}
            transition={{ delay: i * 0.06 }}
          >
            <Link to="/studio" className="group block">
              <div className="aspect-square overflow-hidden rounded-lg bg-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                <img
                  src={piece.src}
                  alt={piece.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <p className="mt-2.5 text-xs font-medium tracking-tight text-[var(--color-graphite)] md:text-sm">
                {piece.title}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10"
        variants={spreadVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Link
          to="/studio"
          className="text-sm tracking-wide text-[var(--color-graphite-faint)] transition-colors duration-300 hover:text-[var(--color-graphite)]"
        >
          Visit the studio →
        </Link>
      </motion.div>
    </div>
  )
}
