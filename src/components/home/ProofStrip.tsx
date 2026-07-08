import { HERO_PROOF } from '@/data/hero'

export function ProofStrip({ variant = 'light' }: { variant?: 'dark' | 'light' }) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`mt-auto border-t ${
        isDark
          ? 'border-[var(--color-border)] bg-[var(--color-cream-warm)]'
          : 'border-[var(--color-border)] bg-[var(--color-white)]'
      }`}
      aria-label="Impact metrics"
    >
      <ul
        className={`mx-auto grid max-w-[var(--content-max)] grid-cols-1 sm:grid-cols-3 ${
          isDark ? 'divide-y sm:divide-x sm:divide-y-0' : 'divide-y divide-[var(--color-border)] sm:divide-x sm:divide-y-0'
        }`}
      >
        {HERO_PROOF.map((proof) => (
          <li
            key={proof.context}
            className="flex flex-col gap-1 px-[var(--spacing-page)] py-5 sm:py-6"
          >
            <span className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.25rem)] leading-none text-[var(--color-sage)]">
              {proof.stat}
            </span>
            <span className="text-[0.8125rem] font-medium text-[var(--color-ink)]">
              {proof.label}
            </span>
            <span className="text-mono-meta !text-[0.5625rem] !tracking-[0.12em]">
              {proof.context}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
