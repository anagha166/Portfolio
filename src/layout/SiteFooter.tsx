export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-white)] px-[var(--spacing-page)] py-14">
      <div className="mx-auto flex max-w-[var(--content-max)] flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-[1.75rem] text-[var(--color-ink)]">
            Anagha Kamath
          </p>
          <p className="text-mono-meta mt-2">Product Designer & Researcher</p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href="mailto:hello@anaghakamath.com"
            className="link-accent min-h-[2.75rem] text-[0.9375rem] font-medium"
            data-cursor="link"
          >
            hello@anaghakamath.com
          </a>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://linkedin.com/in/anaghakamath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono-meta min-h-[2.75rem] transition-colors hover:text-[var(--color-sage)]"
              data-cursor="link"
            >
              LinkedIn
            </a>
            <a
              href="/resume"
              className="text-mono-meta min-h-[2.75rem] transition-colors hover:text-[var(--color-sage)]"
              data-cursor="link"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
