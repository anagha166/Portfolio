import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HERO_BYLINE, HERO_STATEMENT } from '@/data/hero'
import { ProofHeadline } from './ProofHeadline'
import { LogoRow } from './LogoRow'

export function HeroSection() {
  return (
    <section className="relative px-[var(--spacing-page)] pt-28 pb-[var(--spacing-section)]">
      <div className="mx-auto grid max-w-[var(--content-max)] items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* Proof-first column */}
        <div>
          <p className="text-mono-meta">{HERO_BYLINE}</p>

          <div className="mt-6">
            <ProofHeadline />
          </div>

          <LogoRow />

          <p className="text-body-lg mt-10 max-w-lg">{HERO_STATEMENT}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary" data-cursor="link">
              View Work
            </a>
            <Link to="/resume" className="btn-secondary" data-cursor="link">
              Resume
            </Link>
          </div>
        </div>

        {/* Flagship project thumbnail — proof anchor */}
        <motion.aside
          className="lg:pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/projects/human-ai-workspace"
            className="group block"
            data-cursor="view"
            aria-label="View Human-AI Creative Workspace case study"
          >
            <div className="overflow-hidden border border-[var(--color-bg-stone)] bg-[var(--color-bg-card)] shadow-[0_2px_24px_rgba(22,33,28,0.06)] transition-shadow duration-500 group-hover:shadow-[0_12px_40px_rgba(22,33,28,0.1)]">
              <div
                className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-[1.02]"
                style={{
                  background:
                    'linear-gradient(145deg, #d8e8df 0%, #c8dff0 45%, #e8f0e0 100%)',
                }}
                role="img"
                aria-label="Human-AI Creative Workspace interface preview"
              />
              <div className="border-t border-[var(--color-bg-stone)] px-5 py-4">
                <p className="text-display-sm !text-[1.375rem] !leading-tight">
                  Human-AI Creative Workspace
                </p>
                <p className="text-mono-meta mt-2">LEAD DESIGNER — 0→1 PRODUCT</p>
                <p className="text-mono-outcome mt-1">+34% FASTER TASKS</p>
              </div>
            </div>
          </Link>
        </motion.aside>
      </div>
    </section>
  )
}
