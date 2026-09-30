import { motion } from 'framer-motion'
import { experienceItems } from '@/data/experience'

export function ExperienceTimeline() {
  return (
    <ol className="relative mt-14 space-y-0 border-l border-black/10 pl-8 md:pl-10">
      {experienceItems.map((item, i) => (
        <motion.li
          key={item.id}
          className="relative pb-14 last:pb-0"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <span
            className="absolute top-1.5 -left-[2.2rem] h-2.5 w-2.5 rounded-full bg-[var(--color-graphite)] md:-left-[2.7rem]"
            aria-hidden="true"
          />

          <p className="text-[0.6875rem] font-medium tracking-[0.16em] text-[var(--color-graphite-faint)] uppercase">
            {item.period}
          </p>
          <h3 className="mt-2 text-lg font-medium tracking-tight text-[var(--color-graphite)] md:text-xl">
            {item.role}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-graphite-light)]">
            {item.company}
            <span className="text-[var(--color-graphite-faint)]"> · {item.location}</span>
          </p>

          <ul className="mt-4 max-w-2xl space-y-2">
            {item.points.map((point) => (
              <li
                key={point}
                className="text-[0.9375rem] leading-relaxed text-[var(--color-graphite-light)]"
              >
                {point}
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ol>
  )
}
