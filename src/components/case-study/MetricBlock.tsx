import type { CaseStudyMetric } from '@/types/caseStudy'

interface MetricBlockProps {
  metrics: CaseStudyMetric[]
}

/** Quiet inline stats. Prefer real numbers only; skip decorative metrics in copy. */
export function MetricBlock({ metrics }: MetricBlockProps) {
  return (
    <dl className="my-12 flex flex-wrap gap-x-12 gap-y-6 border-y border-black/10 py-8">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt className="text-sm text-black/45">{metric.label}</dt>
          <dd
            className="mt-1 text-[1.5rem] tracking-tight"
            style={{ fontFamily: 'var(--font-hero-name)' }}
          >
            {metric.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
