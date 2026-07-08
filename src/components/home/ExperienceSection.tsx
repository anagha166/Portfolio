import { motion } from 'framer-motion'
import { experienceItems } from '@/data/experience'
import { profile } from '@/data/profile'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative border-t border-neutral-200/70 bg-[#f5f5f7] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Experience
          </p>
          <h2 className="mt-4 font-(family-name:--font-bold) text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-neutral-900">
            Design, research & leadership
          </h2>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-neutral-500">
            From VR navigation research and nonprofit web redesigns to leading design and
            development for a 500+ member student organization.
          </p>
        </motion.div>

        <div className="mt-16">
          <p className="mb-8 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Roles
          </p>
          <ul className="divide-y divide-neutral-200">
            {experienceItems.map((item, i) => (
              <motion.li
                key={item.id}
                className="py-8 first:pt-0 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-sans text-[1.0625rem] font-semibold text-neutral-900">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {item.organization} · {item.period}
                </p>
                <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-neutral-600">
                  {item.summary}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <footer className="mt-20 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-neutral-200 pt-10 text-sm text-neutral-500">
          <span className="font-medium text-neutral-900">{profile.name}</span>
          <a
            href={`mailto:${profile.contact.email}`}
            className="transition-colors hover:text-neutral-900"
          >
            {profile.contact.email}
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900"
          >
            LinkedIn
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900"
          >
            GitHub
          </a>
        </footer>
      </div>
    </section>
  )
}
