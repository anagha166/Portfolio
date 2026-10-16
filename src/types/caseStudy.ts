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
  /** Optional display size. lg is slightly under full width. */
  size?: 'sm' | 'md' | 'lg'
  /** In a row, stretch this image across both columns */
  span?: 'full'
}

export interface CaseStudySection {
  id: string
  title: string
  content: string[]
  /** Extra paragraphs after images / metrics (for inline figure breaks) */
  contentAfter?: string[]
  images?: CaseStudyImage[]
  /** stack (default), row for side-by-side shots, or tight for larger pages with a small gap */
  imageLayout?: 'stack' | 'row' | 'tight'
  /** Terms in the section copy that show an image on hover */
  hoverPreviews?: { term: string; src: string; alt: string }[]
  /** Empty slot under the section for a photo you still need to drop in */
  imagePlaceholder?: string
  pullQuote?: string
  metrics?: CaseStudyMetric[]
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
  /** Optional stacked hero visuals at the top of the case study (replaces single hero image on the page). */
  heroImages?: CaseStudyImage[]
  /** How the hero/thumbnail should fit. Use contain for device mockups with transparent backgrounds. */
  imageFit?: 'cover' | 'contain'
  accentColor?: string
  externalUrl?: string
  sections: CaseStudySection[]
  reflection: string[]
  lessonsLearned: string[]
}
