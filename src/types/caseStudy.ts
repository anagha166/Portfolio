export interface CaseStudyMetric {
  value: string
  label: string
}

export interface CaseStudyImage {
  src: string
  alt: string
  caption?: string
  /** cover crops to fill; contain shows the full image (use for tall phone mockups) */
  fit?: 'cover' | 'contain'
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
  /** How the hero/thumbnail should fit. Use contain for device mockups with transparent backgrounds. */
  imageFit?: 'cover' | 'contain'
  accentColor?: string
  externalUrl?: string
  sections: CaseStudySection[]
  reflection: string[]
  lessonsLearned: string[]
}
