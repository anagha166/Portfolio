export interface CaseStudyMetric {
  value: string
  label: string
}

export interface CaseStudyImage {
  src: string
  alt: string
  caption?: string
}

export interface CaseStudySection {
  id: string
  title: string
  content: string[]
  images?: CaseStudyImage[]
  pullQuote?: string
  metrics?: CaseStudyMetric[]
  principles?: string[]
  beforeAfter?: { before: CaseStudyImage; after: CaseStudyImage }
  videoUrl?: string
  prototypeUrl?: string
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  role: string
  timeline: string
  team?: string
  impact: string
  tags: string[]
  heroImage: string
  accentColor?: string
  sections: CaseStudySection[]
  reflection: string[]
  lessonsLearned: string[]
}
