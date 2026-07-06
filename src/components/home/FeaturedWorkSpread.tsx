import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { spreadVariants } from '@/animations/scroll'
import { SectionEyebrow, SectionTitle } from '@/components/ui/SectionTypography'
import { getProjectSummaries } from '@/data/projects'

export function FeaturedWorkSpread() {
  const projects = getProjectSummaries().slice(0, 2)

  return (
    <div className="flex min-h-screen flex-col justify-start px-[var(--spacing-page)] pb-24 pt-28">
      <motion.div
        variants={spreadVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        <SectionEyebrow>Selected Work</SectionEyebrow>
        <SectionTitle>Projects where research meets craft</SectionTitle>
      </motion.div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            variants={spreadVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5%' }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={`/projects/${project.slug}`} className="group block">
              <div
                className="relative aspect-[4/3] max-h-[34vh] w-full overflow-hidden rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:shadow-[0_2px_6px_rgba(0,0,0,0.08),0_16px_48px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.2),0_8px_24px_rgba(0,0,0,0.25)]"
                style={{ background: project.image }}
              >
                {/* Scrim + title overlay — stays visible within sticky viewport */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/65"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="text-base font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/75">
                    {project.role} · {project.timeline}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12"
        variants={spreadVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Link
          to="/projects"
          className="text-sm tracking-wide text-[var(--color-graphite-faint)] transition-colors duration-300 hover:text-[var(--color-graphite)] dark:text-[var(--color-graphite-faint-dark)] dark:hover:text-[var(--color-graphite-dark)]"
        >
          View all projects →
        </Link>
      </motion.div>
    </div>
  )
}
