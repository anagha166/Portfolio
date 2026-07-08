import { FolderStack } from '@/components/y2k/FolderStack'
import { NotesWindow } from '@/components/y2k/NotesWindow'
import { HighlightWord } from '@/components/y2k/HighlightWord'
import { profile } from '@/data/profile'

export function MyStuffSection() {
  const { education } = profile

  return (
    <section className="bg-white px-[var(--spacing-page)] py-20 md:py-28" id="stuff">
      <div className="mx-auto grid max-w-[var(--content-max)] items-start gap-12 md:grid-cols-[minmax(160px,220px)_1fr] md:gap-20">
        <FolderStack className="mx-auto w-full max-w-[200px] md:mx-0" />

        <div>
          <p className="section-eyebrow mb-3">About</p>
          <h2 className="scrapbook-heading">
            Human-centered <HighlightWord>systems</HighlightWord>
          </h2>
          <p className="scrapbook-body mt-5 max-w-xl">{profile.headline}</p>
          <p className="scrapbook-body mt-4 max-w-xl">
            {education.degree} at {education.school}, {education.minor}. GPA {education.gpa} ·
            graduating {education.graduation}.
          </p>

          <NotesWindow title="What I do" className="mt-8 max-w-md">
            <ul className="!bg-transparent space-y-2.5 text-[0.875rem] leading-relaxed">
              <li className="!bg-transparent">
                <span className="hl-yellow font-medium">Design</span> — Figma prototypes,
                interaction flows, design systems, and accessibility-first UI
              </li>
              <li className="!bg-transparent">
                <span className="hl-yellow font-medium">Build</span> — React, TypeScript,
                TailwindCSS, and mobile with Swift
              </li>
              <li className="!bg-transparent">
                <span className="hl-yellow font-medium">Research</span> — VR navigation studies,
                cognitive science methods, and user-centered evaluation
              </li>
            </ul>
          </NotesWindow>
        </div>
      </div>
    </section>
  )
}
