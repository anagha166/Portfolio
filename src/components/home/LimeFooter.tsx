import { profile } from '@/data/profile'

const { contact } = profile

export function LimeFooter() {
  return (
    <footer id="contact" className="lime-footer scroll-mt-16 px-[var(--spacing-page)] py-20 md:py-28">
      <div className="mx-auto max-w-[var(--content-max)]">
        <p className="section-eyebrow mb-4">Contact</p>
        <div className="font-[family-name:var(--font-bold)] text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-[var(--color-ink)]">
          <p>Let&apos;s build something</p>
          <p className="mt-1">
            <span className="hl-yellow px-1">human-centered</span> together.
          </p>
        </div>
        <p className="scrapbook-body mt-6 max-w-md text-[var(--color-ink)]">
          Open to design internships, research collaborations, and product roles. Based in San
          Diego — available remote.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center rounded-full border-2 border-[var(--color-window-border)] bg-white px-5 py-2.5 font-sans text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-highlight)]"
          >
            Email
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border-2 border-[var(--color-window-border)] bg-white px-5 py-2.5 font-sans text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-highlight)]"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border-2 border-[var(--color-window-border)] bg-white px-5 py-2.5 font-sans text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-highlight)]"
          >
            GitHub
          </a>
          <a
            href={contact.figma}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium text-[var(--color-ink-muted)] underline underline-offset-4 transition-colors hover:text-[var(--color-ink)]"
          >
            Figma portfolio ↗
          </a>
        </div>
        <p className="mt-6 font-sans text-sm text-[var(--color-ink-muted)]">
          {contact.email} · {contact.phone}
        </p>
      </div>
    </footer>
  )
}
