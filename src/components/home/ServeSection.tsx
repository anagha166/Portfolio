import { NotesWindow } from '@/components/y2k/NotesWindow'
import { HighlightWord } from '@/components/y2k/HighlightWord'
import { experienceItems } from '@/data/experience'

export function ServeSection() {
  return (
    <section id="experience" className="sky-bg scroll-mt-20 px-[var(--spacing-page)] py-20 md:py-28">
      <div className="mx-auto grid max-w-[var(--content-max)] items-start gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
        <div>
          <p className="section-eyebrow mb-3">Experience</p>
          <h2 className="scrapbook-heading">
            Design, research & <HighlightWord>leadership</HighlightWord>
          </h2>
          <p className="scrapbook-body mt-5 max-w-md">
            From VR navigation research and nonprofit web redesigns to leading design and
            development for a 500+ member student organization.
          </p>
        </div>

        <div
          className="mx-auto flex w-[min(50vw,220px)] aspect-[4/5] items-end justify-start border-2 border-[var(--color-window-border)] bg-[linear-gradient(160deg,#fdf8ef_0%,#ece2d4_52%,#d9cdbf_100%)] p-4 shadow-md lg:mx-0"
          role="img"
          aria-label="Anagha Kamath portrait placeholder"
        >
          <span className="rounded-sm border border-black/10 bg-white/75 px-2 py-1 text-[0.65rem] tracking-[0.14em] text-[var(--color-ink-faint)] uppercase">
            Experience
          </span>
        </div>

        <div className="lg:justify-self-end">
          <NotesWindow title="Roles" className="max-w-sm">
            <ul className="!bg-transparent space-y-4 text-[0.875rem]">
              {experienceItems.map((item) => (
                <li
                  key={item.id}
                  className="!bg-transparent border-b border-[var(--color-notes-line)] pb-3 last:border-0 last:pb-0"
                >
                  <p className="font-semibold text-[var(--color-ink)]">{item.role}</p>
                  <p className="mt-0.5 text-[0.75rem] text-[var(--color-ink-faint)]">
                    {item.organization} · {item.period}
                  </p>
                  <p className="mt-1.5 leading-relaxed text-[var(--color-ink-muted)]">
                    {item.summary}
                  </p>
                </li>
              ))}
            </ul>
          </NotesWindow>
        </div>
      </div>
    </section>
  )
}
