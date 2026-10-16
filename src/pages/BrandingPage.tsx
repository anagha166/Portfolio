import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageVariants } from '@/animations/transitions'
import { brandingOrgs } from '@/data/branding'

export function BrandingPage() {
  return (
    <motion.div
      className="min-h-screen px-[var(--spacing-page)] pt-28 pb-24"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-[0.2em] text-black/40 uppercase">
          Branding / Marketing
        </p>
        <h1
          className="mt-4 text-[clamp(2rem,5vw,3rem)] font-normal tracking-tight"
          style={{ fontFamily: 'var(--font-hero-name)' }}
        >
          Graphic Design, Branding & Campaigns
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {brandingOrgs.map((org, i) => (
            <motion.div
              key={org.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link to={`/branding/${org.slug}`} className="group block">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden">
                  {org.logoSrc ? (
                    <img
                      src={org.logoSrc}
                      alt=""
                      className={`object-contain transition-transform duration-300 group-hover:scale-[1.03] ${
                        org.slug === 'raas-ruckus'
                          ? 'h-[88%] w-[88%] scale-[1.08]'
                          : 'max-h-[92%] max-w-[92%]'
                      }`}
                    />
                  ) : (
                    <p className="px-6 text-center text-sm text-black/35">
                      Logo coming soon
                      <span className="mt-1 block text-xs">{org.shortName}</span>
                    </p>
                  )}
                </div>
                <h2 className="mt-4 text-lg font-medium tracking-tight">{org.shortName}</h2>
                <p className="mt-1 text-sm leading-relaxed opacity-60">{org.name}</p>
                {org.published ? (
                  <p className="mt-2 text-sm leading-relaxed opacity-60">{org.highlight}</p>
                ) : (
                  <p className="mt-2 text-xs font-medium tracking-[0.14em] uppercase opacity-45">
                    Coming soon
                  </p>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
