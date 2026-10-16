import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeTransition, pageVariants } from '@/animations/transitions'
import { StickyTOC } from '@/components/case-study/StickyTOC'
import summer1 from '@/assets/my_photos/marketing/DS3/SummerGraphic1.png'
import summer2 from '@/assets/my_photos/marketing/DS3/SummerGraphic2.png'
import summer3 from '@/assets/my_photos/marketing/DS3/SummerGraphic3.png'
import summer4 from '@/assets/my_photos/marketing/DS3/SummerGraphic4.png'
import summer5 from '@/assets/my_photos/marketing/DS3/SummerGraphic5.png'
import summer6 from '@/assets/my_photos/marketing/DS3/SummerGraphic6.png'
import summer7 from '@/assets/my_photos/marketing/DS3/SummerGraphic7.png'
import gliderport from '@/assets/my_photos/marketing/DS3/Graphic2.png'
import applications from '@/assets/my_photos/marketing/DS3/applications.png'
import stickers from '@/assets/my_photos/marketing/DS3/stickers.png'
import stickers2 from '@/assets/my_photos/marketing/DS3/stickers2.png'
import quizStory from '@/assets/my_photos/marketing/DS3/quiz1.jpg'
import quizPoster from '@/assets/my_photos/marketing/DS3/Quiz2.png'
import fallGbm from '@/assets/my_photos/marketing/DS3/FALL GBM promo 25-26.mov'
import internPanel from '@/assets/my_photos/marketing/DS3/Intern_Panel.mov'

const toc = [
  { id: 'brief', title: 'The brief' },
  { id: 'stickers', title: 'Datasaur' },
  { id: 'graphics', title: 'Instagram graphics' },
  { id: 'reels', title: 'Reels' },
  { id: 'quizzes', title: 'Instagram quizzes' },
  { id: 'year', title: 'The year' },
]

const facts = [
  { label: 'Role', value: 'Marketing Director' },
  { label: 'Organization', value: 'DS3, UC San Diego' },
  { label: 'Timeline', value: 'June 2025 — Present' },
  { label: 'Channel', value: 'Instagram' },
]

const metrics = [
  { value: '137.2k', label: 'Views', detail: 'Added in the past month' },
  { value: '+30%', label: 'Followers', detail: 'Over the last year' },
  { value: '+50%', label: 'Story engagement', detail: 'From the story quizzes' },
]

const graphics = [
  {
    src: summer1,
    alt: 'iMessage graphic. Someone asks what DS3 did all summer. Datasaur answers, excited about the GBM on Monday, September 28.',
  },
  {
    src: summer2,
    alt: 'Travel photos set inside browser windows, with message bubbles that say traveled a lot.',
  },
  {
    src: summer3,
    alt: 'A Finder window of internship and research photos, with folders for research and passion projects.',
  },
  {
    src: summer4,
    alt: 'Nail art and paintings inside browser windows.',
  },
  {
    src: summer5,
    alt: 'Food photos in browser windows over a dinner table.',
  },
  {
    src: summer6,
    alt: 'Photos of members with family and a cat, set in browser windows against a sunset.',
  },
  {
    src: summer7,
    alt: 'The message thread closes with the DS3 GBM on Monday, September 28 at 5pm at Price Center Theatre.',
  },
  {
    src: applications,
    alt: 'A hiring graphic inside a browser window, listing DS3 teams and an October 2 deadline.',
  },
  {
    src: gliderport,
    alt: 'Gliderport Sunset social graphic, with a sunset photo and a call to fill out an interest form.',
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

function Reel({ src, label, aspect }: { src: string; label: string; aspect: string }) {
  return (
    <video
      src={src}
      controls
      playsInline
      preload="metadata"
      aria-label={label}
      className={`${aspect} w-full bg-black object-contain`}
    />
  )
}

export function Ds3CaseStudy() {
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
            <p className="text-xs tracking-[0.2em] uppercase opacity-45">Marketing direction</p>
            <h1
              className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[0.98] tracking-tight"
              style={{ fontFamily: 'var(--font-hero-name)' }}
            >
              Data Science
              <br />
              Student Society
            </h1>
            <p className="mt-6 max-w-[36rem] text-[1.125rem] leading-relaxed">
              A year of making DS3 more educational, more relatable, and harder to scroll past. Chat is this aura?
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

          <div className="mt-14">
            <p className="text-xs tracking-[0.2em] uppercase opacity-45">Results</p>
            <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p
                    className="text-[clamp(3rem,6vw,4.75rem)] leading-none tracking-tight"
                    style={{ fontFamily: 'var(--font-hero-name)' }}
                  >
                    {metric.value}
                  </p>
                  <p className="mt-3 text-[1.0625rem]">{metric.label}</p>
                  <p className="mt-1 text-sm opacity-55">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-24 grid gap-12 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-16">
          <StickyTOC items={toc} />

          <div className="min-w-0 max-w-4xl space-y-20">
            <Section id="brief" index="01" title="The brief">
              <Prose>
                <p>
                  DS3 already had a mascot and a posting habit. What it didn’t have was a point of
                  view. The feed read like a bulletin board: dates, rooms, and a logo in the corner.
                </p>
                <p>
                  I stepped in as Marketing Director in June 2025 with a brief I wrote for myself.
                  Make the content more educational. Make it more relatable,
                  so a technical college org could feel like somewhere you actually wanted to be.
                </p>
              </Prose>
            </Section>

            <Section id="stickers" index="02" title="Datasaur, stuck on the site">
              <Prose>
                <p>
                  Datasaur: The offical mascot of DS3, incorpirating the organizations colors, logo, and branding. Stickers handrawn on Procreate, to be both printed on stickers and attached to websites/graphics.
                </p>
              </Prose>
              <div className="mt-10 space-y-8">
                <Shot
                  src={stickers}
                  alt="Four Datasaur stickers: a cupcake, a pumpkin labeled DS3, gaming with a panda, and singing into a mic."
                  width={2160}
                  height={1620}
                />
                <Shot
                  src={stickers2}
                  alt="Datasaur stickers drinking boba, wearing a cape beside the chevron, and a monitor showing the DS3 mark."
                  width={2160}
                  height={1620}
                />
              </div>
            </Section>

            <Section id="graphics" index="03" title="Instagram graphics">
              <Prose>
                <p>
                  The feed runs on one technical theme. Messages, browser windows, folders, a cursor.
                  A post can be about summer, a social, or a deadline, and it still looks like DS3,
                  because it looks like a computer. Made on Canva, Adobe is expensive.
                </p>
                <p>
                  The summer series is one such example. It opens in Messages, moves through travel,
                  internships, art, food, and people, and closes on the fall GBM. 
                </p>
              </Prose>
              <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
                {graphics.map((piece) => (
                  <Shot
                    key={piece.src}
                    src={piece.src}
                    alt={piece.alt}
                    width={1080}
                    height={1350}
                  />
                ))}
              </div>
            </Section>

            <Section id="reels" index="04" title="Reels">
              <Prose>
                <p>
                  Two pieces of motion, generating hype and engagement for our organization. Directed by me and edited on Capcut.
                </p>
              </Prose>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 sm:items-start">
                <Reel
                  src={fallGbm}
                  label="Fall GBM promo reel for 2025 to 2026"
                  aspect="aspect-[3/4]"
                />
                <Reel
                  src={internPanel}
                  label="Intern panel reel"
                  aspect="aspect-[1080/1704]"
                />
              </div>
            </Section>

            <Section id="quizzes" index="05" title="Instagram quizzes">
              <Prose>
                <p>
                  The educational brief needed a format people would actually tap. I built a quiz
                  system for Instagram stories: short technical questions, code tracing and
                  LeetCode-style checks, posted in stories and saved as a highlight.
                </p>
                <p>
                  Story engagement went up 50%. The feed finally had a reason to stop that wasn’t an
                  event reminder.
                </p>
              </Prose>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 sm:items-start">
                <Shot
                  src={quizStory}
                  alt="Instagram story quiz on code tracing, with a recursive function and live poll results."
                  width={1206}
                  height={2138}
                />
                <Shot
                  src={quizPoster}
                  alt="Test Yourself graphic announcing that past DS3 quizzes live in a highlight."
                  width={1080}
                  height={1920}
                />
              </div>
            </Section>

            <section id="year" className="scroll-mt-32 border-t border-black/10 pt-16">
              <h2
                className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.1] tracking-tight"
                style={{ fontFamily: 'var(--font-hero-name)' }}
              >
                What the year was actually for
              </h2>
              <Prose>
                <p>
                  The director job was taste, repeated. Datasaur and the chevron, computer surfaces,
                  a voice that sounds like the org, and posts that teach something when they can.
                  The numbers followed from that: 137.2k views in a month, a following up 30% over
                  the year, and a story format people finish.
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/ds3atucsd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-black/25 underline-offset-4 transition-colors hover:decoration-black"
                  >
                    @ds3atucsd
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
