import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { spreadVariants } from '@/animations/scroll'
import { SectionEyebrow, SectionTitle } from '@/components/ui/SectionTypography'

export function ConnectSpread() {
  return (
    <div className="flex flex-col justify-center px-[var(--spacing-page)] py-20 md:py-28">
      <motion.div
        variants={spreadVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="max-w-[var(--content-max)]"
      >
        <SectionEyebrow>Connect</SectionEyebrow>
        <SectionTitle>Let&apos;s build something thoughtful together</SectionTitle>
        <p className="text-lead mt-8 max-w-lg">
          I&apos;m always interested in conversations about design, research,
          and the future of human-AI collaboration.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anaghakamath@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[var(--color-graphite)] px-7 py-3 text-[0.8125rem] font-medium tracking-wide text-[var(--color-paper)] transition-opacity duration-300 hover:opacity-80 dark:bg-[var(--color-graphite-dark)] dark:text-[var(--color-paper-dark)]"
          >
            Get in touch
          </a>
          <Link
            to="/projects"
            className="inline-flex items-center rounded-full border border-black/[0.08] px-7 py-3 text-[0.8125rem] font-medium tracking-wide text-[var(--color-graphite)] transition-colors duration-300 hover:border-black/[0.15] dark:border-white/[0.1] dark:text-[var(--color-graphite-dark)] dark:hover:border-white/[0.2]"
          >
            View projects
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
