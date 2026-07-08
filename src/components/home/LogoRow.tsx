import { HERO_LOGOS } from '@/data/hero'

export function LogoRow() {
  return (
    <div className="mt-10">
      <p className="text-mono-meta mb-4">Selected collaborations</p>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-3" aria-label="Companies">
        {HERO_LOGOS.map((logo) => (
          <li key={logo.name}>
            <span
              className="inline-flex items-center gap-2 text-[0.8125rem] font-medium tracking-wide text-[var(--color-text-faint)]"
              title={logo.placeholder ? `${logo.name} (placeholder)` : logo.name}
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-sm border border-[var(--color-bg-stone)] bg-[var(--color-bg-card)] text-[0.625rem] font-semibold uppercase"
                aria-hidden="true"
              >
                {logo.name.charAt(0)}
              </span>
              {logo.name}
              {logo.placeholder && (
                <span className="text-mono-meta !text-[0.5625rem] !normal-case !tracking-[0.04em] text-[var(--color-tag)]">
                  placeholder
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
