import { experienceItems } from './experience'

export interface ResearchItem {
  id: string
  title: string
  institution: string
  period: string
  summary: string
  methods: string[]
  accent: string
}

const accents = [
  'linear-gradient(145deg, #e8ebe6 0%, #d4dfd4 50%, #c8d4c8 100%)',
  'linear-gradient(145deg, #dce8f4 0%, #b8d4e8 50%, #98b8d8 100%)',
  'linear-gradient(145deg, #f0ebe4 0%, #e0d8cc 50%, #d0c8bc 100%)',
  'linear-gradient(145deg, #e4ebe8 0%, #d0e0d8 45%, #c8d8d0 100%)',
]

/** Adapter for legacy ResearchSection — maps experience to research card shape */
export const researchItems: ResearchItem[] = experienceItems.map((item, i) => ({
  id: item.id,
  title: item.role,
  institution: item.organization,
  period: item.period,
  summary: item.summary,
  methods: item.highlights.slice(0, 2).map((h) => h.split(',')[0].slice(0, 40)),
  accent: accents[i % accents.length],
}))

export { experienceItems } from './experience'
export type { ExperienceItem } from './experience'
