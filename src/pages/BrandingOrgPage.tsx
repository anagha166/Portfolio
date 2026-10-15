import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageVariants } from '@/animations/transitions'
import { getBrandingOrg } from '@/data/branding'

export function BrandingOrgPage() {
  const { slug } = useParams<{ slug: string }>()
  const org = slug ? getBrandingOrg(slug) : undefined

  if (!org) return <Navigate to="/branding" replace />

  return (
    <motion.article
      className="min-h-screen px-[var(--spacing-page)] pt-28 pb-32"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto max-w-4xl">
        <Link
          to="/branding"
          className="inline-flex items-center gap-2 text-sm tracking-wide text-black/45 transition-colors hover:text-black"
        >
          <span aria-hidden="true">←</span> Branding / Marketing
        </Link>

        <div className="mt-12 flex min-h-[14rem] max-w-2xl items-center justify-center overflow-hidden md:min-h-[18rem]">
          {org.logoSrc ? (
            <img
              src={org.logoSrc}
              alt={`${org.shortName} logo`}
              className={
                org.slug === 'raas-ruckus'
                  ? 'h-[16rem] w-auto scale-[1.12] object-contain md:h-[20rem]'
                  : 'max-h-[16rem] w-auto max-w-full object-contain md:max-h-[20rem]'
              }
            />
          ) : (
            <p className="text-sm text-black/35">{org.shortName} logo</p>
          )}
        </div>

        <p className="mt-10 text-sm font-medium tracking-[0.14em] text-black/40 uppercase">
          Coming soon
        </p>
        <h1
          className="mt-3 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-[1.1] tracking-tight"
          style={{ fontFamily: 'var(--font-hero-name)' }}
        >
          {org.name}
        </h1>
        <p className="mt-5 max-w-[38rem] text-[1.0625rem] leading-[1.75] text-black/75">
          {org.summary}
        </p>
        {org.approach && (
          <p className="mt-4 max-w-[38rem] text-[1.0625rem] leading-[1.75] text-black/75">
            {org.approach}
          </p>
        )}

        <p className="mt-14 max-w-[38rem] text-[1.0625rem] leading-relaxed text-black/55">
          Full case visuals for this org are on the way. Check back soon for reels, graphics, and
          brand work.
        </p>
      </div>
    </motion.article>
  )
}
