import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { spreadVariants } from '@/animations/scroll'
import { SectionEyebrow, SectionTitle } from '@/components/ui/SectionTypography'
import { brandingOrgs } from '@/data/branding'

export function BrandingSpread() {
  return (
    <div className="flex flex-col justify-center px-[var(--spacing-page)] py-20 md:py-28">
      <motion.div
        variants={spreadVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        <SectionEyebrow>Branding / Marketing</SectionEyebrow>
        <SectionTitle>Graphic design, branding, and campaigns</SectionTitle>
        <p className="text-lead mt-6 max-w-lg">
          Marketing direction for DS3, and production design for Raas Ruckus.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:gap-8">
        {brandingOrgs.map((org, i) => (
          <motion.div
            key={org.slug}
            variants={spreadVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5%' }}
            transition={{ delay: i * 0.06 }}
          >
            <Link to={`/branding/${org.slug}`} className="group block">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden">
                {org.logoSrc ? (
                  <img
                    src={org.logoSrc}
                    alt=""
                    className={`object-contain transition-transform duration-500 group-hover:scale-[1.03] ${
                      org.slug === 'raas-ruckus'
                        ? 'h-[88%] w-[88%] scale-[1.08]'
                        : 'max-h-[92%] max-w-[92%]'
                    }`}
                  />
                ) : null}
              </div>
              <h3 className="mt-2.5 text-xs font-medium tracking-tight text-[var(--color-graphite)] md:text-sm">
                {org.shortName}
              </h3>
              {org.highlight && (
                <p className="mt-0.5 line-clamp-2 text-[0.7rem] text-[var(--color-graphite-faint)] md:text-xs">
                  {org.highlight}
                </p>
              )}
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
          to="/branding"
          className="text-sm tracking-wide text-[var(--color-graphite-faint)] transition-colors duration-300 hover:text-[var(--color-graphite)]"
        >
          See the work →
        </Link>
      </motion.div>
    </div>
  )
}
