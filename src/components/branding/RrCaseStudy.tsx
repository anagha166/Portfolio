import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeTransition, pageVariants } from '@/animations/transitions'
import { StickyTOC } from '@/components/case-study/StickyTOC'
import flag from '@/assets/my_photos/marketing/RR/Flag.png'
import seasonLogo from '@/assets/my_photos/marketing/RR/Logo.png'
import sponsor1 from '@/assets/my_photos/marketing/RR/Sponsor1.png'
import sponsor2 from '@/assets/my_photos/marketing/RR/Sponsor2.png'
import sponsor3 from '@/assets/my_photos/marketing/RR/Sponsor3.png'
import sponsor4 from '@/assets/my_photos/marketing/RR/Sponsor4.png'
import sponsor5 from '@/assets/my_photos/marketing/RR/Sponsor5.png'

const toc = [
  { id: 'brief', title: 'The brief' },
  { id: 'flag', title: 'The flag' },
  { id: 'logo', title: 'Season logo' },
  { id: 'packet', title: 'Sponsorship packet' },
]

const facts = [
  { label: 'Role', value: 'Production Chair' },
  { label: 'Team', value: 'Raas Ruckus, UC San Diego' },
  { label: 'Season', value: '2025–2026' },
  { label: 'Stage', value: 'National competitions' },
]

const packet = [
  {
    src: sponsor1,
    alt: 'Sponsorship proposal cover with hanging diya ornaments, a marigold rule, and photos of the team in costume.',
  },
  {
    src: sponsor2,
    alt: 'About the team page, with performance photos and a short history of UCSD Raas Ruckus.',
  },
  {
    src: sponsor3,
    alt: 'Sponsorship information page with mandala corners and photos of the team.',
  },
  {
    src: sponsor4,
    alt: 'Sponsorship tiers laid out as marigold blocks, from bronze through platinum.',
  },
  {
    src: sponsor5,
    alt: 'Closing page with contact links, a competition photo, and a team portrait.',
  },
]

function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 max-w-[38rem] space-y-5 text-[1.0625rem] leading-[1.75]">{children}</div>
  )
}

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-black/10 pt-16">
      <p className="text-xs tracking-[0.18em] uppercase opacity-45">{index}</p>
      <h2
        className="mt-3 max-w-[20ch] text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.1] tracking-tight"
        style={{ fontFamily: 'var(--font-hero-name)' }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

function Shot({
  src,
  alt,
  width,
  height,
}: {
  src: string
  alt: string
  width: number
  height: number
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className="h-auto w-full"
    />
  )
}

export function RrCaseStudy() {
  return (
    <motion.article
      className="min-h-screen px-[var(--spacing-page)] pt-28 pb-32"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto max-w-6xl">
        <header>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={fadeTransition}
          >
            <Link
              to="/branding"
              className="inline-flex items-center gap-2 text-sm tracking-wide opacity-50 transition-opacity hover:opacity-100"
            >
              <span aria-hidden="true">←</span> Branding / Marketing
            </Link>
          </motion.div>

          <motion.div
            className="mt-14 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fadeTransition, delay: 0.06 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase opacity-45">Production</p>
            <h1
              className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[0.98] tracking-tight"
              style={{ fontFamily: 'var(--font-hero-name)' }}
            >
              Raas Ruckus
            </h1>
            <p className="mt-6 max-w-[36rem] text-[1.125rem] leading-relaxed">
              Design and artistic direction for a competitive dance team, performing at stages around the country including at Coachella 2025.
            </p>
          </motion.div>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-black/10 py-8 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs tracking-[0.16em] uppercase opacity-45">{fact.label}</dt>
                <dd className="mt-2 text-[1.0625rem]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="mt-24 grid gap-12 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-16">
          <StickyTOC items={toc} />

          <div className="min-w-0 max-w-4xl space-y-20">
            <Section id="brief" index="01" title="The brief">
              <Prose>
                <p>
                  A set is the show: a collection of dances performed together on a national stage.
                  As Production Chair I lead the design and the artistic elements around that show.
                  The things the team carries into a venue, the mark for the season, and the packet
                  that asks people to fund the next one.
                </p>
                <p>
                  The visual idea is Indian graphic language in a bright, vibrant palette. Lotuses,
                  dandiyas, mandalas, marigold. 
                </p>
              </Prose>
            </Section>

            <Section id="flag" index="02" title="The flag">
              <Prose>
                <p>
                  The flag travels with the team to national competitions, to be held by audience members in support. I designed it in Canva so
                  you can find Raas Ruckus from across a venue: the team in the photograph, a lotus
                  border, RAAS and RUCKUS down the sides, and our star monogram in the center.
                </p>
              </Prose>
              <div className="mt-10">
                <Shot
                  src={flag}
                  alt="Raas Ruckus competition flag. A team photo sits inside a lotus border, with the star monogram centered and the team name running down each side."
                  width={2000}
                  height={1333}
                />
              </div>
            </Section>

            <Section id="logo" index="03" title="Season logo">
              <Prose>
                <p>
                  Every competitive season gets its own theme. For 2025–2026 it was Phineas and
                  Ferb, Logo drawn by hand in Procreate.
                </p>
              </Prose>
              <div className="mt-10">
                <Shot
                  src={seasonLogo}
                  alt="Hand-drawn 2025–2026 Raas Ruckus logo. Red R letters posed like Phineas and Ferb, with a platypus hat, over a backyard sunset."
                  width={2160}
                  height={1620}
                />
              </div>
            </Section>

            <Section id="packet" index="04" title="Sponsorship packet">
              <Prose>
                <p>
                  I designed the sponsorship packet that goes out to supporters around the world. It
                  has to look like the team and make the ask easy to answer.
                </p>
                <p>
                  Diya garlands and mandala corners keep it in the same design theme as the flag. Five pages, from the proposal through how to give
                  and a thank-you.
                </p>
              </Prose>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {packet.map((page) => (
                  <Shot
                    key={page.src}
                    src={page.src}
                    alt={page.alt}
                    width={1545}
                    height={2000}
                  />
                ))}
              </div>
            </Section>

            <section className="border-t border-black/10 pt-16">
              <h2
                className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.1] tracking-tight"
                style={{ fontFamily: 'var(--font-hero-name)' }}
              >
                What's coming next?
              </h2>
              <Prose>
                <p>
                  Winter 2027: A new theme, a new set of props in the background, new costumes. Stay tuned!
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/raasruckus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-black/25 underline-offset-4 transition-colors hover:decoration-black"
                  >
                    @raasruckus
                  </a>
                </p>
              </Prose>
            </section>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
