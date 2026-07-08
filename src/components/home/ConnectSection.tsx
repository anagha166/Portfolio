import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function ConnectSection() {
  return (
    <section className="border-t border-[var(--color-beige)] px-[var(--spacing-page)] py-[var(--spacing-section)]">
      <div className="mx-auto max-w-[var(--content-max)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-eyebrow">Connect</p>
          <h2 className="text-editorial mt-4 max-w-lg">
            Let&apos;s build something thoughtful together.
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center bg-[var(--color-graphite)] px-8 py-3.5 text-[0.8125rem] font-medium tracking-wide text-[var(--color-surface)] transition-opacity duration-300 hover:opacity-85"
          >
            Get in touch
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center border border-[var(--color-beige)] px-8 py-3.5 text-[0.8125rem] font-medium tracking-wide text-[var(--color-graphite)] transition-colors duration-300 hover:border-[var(--color-graphite)]/20"
          >
            About me
          </Link>
        </motion.div>

        <footer className="mt-24 border-t border-[var(--color-beige)] pt-8">
          <p className="text-caption">
            © {new Date().getFullYear()} Anagha Kamath. Designed & built with care.
          </p>
        </footer>
      </div>
    </section>
  )
}
