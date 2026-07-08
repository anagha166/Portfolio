import { projectsData } from '@/data/projectsData'

export interface FloatingCardData {
  slug: string
  title: string
  descriptor: string
  image: string
  x: string
  y: number
  depth: number
  speed: number
}

export interface CaseStudySectionData {
  id: string
  title: string
  paragraphs: string[]
}

export interface CaseStudyData {
  slug: string
  title: string
  summary: string
  role: string
  timeline: string
  tools: string[]
  heroImage: string
  sections: CaseStudySectionData[]
}

const projectImages: Record<string, string> = {
  ascendtials:
    'linear-gradient(145deg, #f3ece2 0%, #e1d0bc 55%, #c6ad8f 100%)',
  ds3: 'linear-gradient(145deg, #e7f0fa 0%, #cbdcf0 55%, #afc6df 100%)',
  consulting:
    'linear-gradient(150deg, #ede9f7 0%, #d3cceb 56%, #b9afd9 100%)',
  studybuddy:
    'linear-gradient(150deg, #e6f5ee 0%, #c8e3d6 54%, #a9cdbd 100%)',
  yipyap:
    'linear-gradient(150deg, #f9ecec 0%, #edcfd0 54%, #d7adb1 100%)',
  bitefresh:
    'linear-gradient(150deg, #f6f0df 0%, #ead7aa 50%, #d2b980 100%)',
}

export const featuredProjects = projectsData.slice(0, 4).map((project, index) => ({
  ...project,
  image:
    projectImages[project.id] ??
    'linear-gradient(145deg, #f1ece6 0%, #d6cdc4 55%, #bbb0a4 100%)',
  tags: [project.category, ...project.tools.slice(0, 2)],
  depth: [1, 0.9, 0.8, 0.94][index] ?? 0.9,
  speed: [0.24, 0.18, 0.14, 0.2][index] ?? 0.18,
  x: ['8%', '60%', '28%', '68%'][index] ?? '20%',
  y: [8, 25, 48, 65][index] ?? 10,
}))

export const floatingCards: FloatingCardData[] = featuredProjects.map((project) => ({
  slug: project.id,
  title: project.title,
  descriptor: project.description,
  image: project.image,
  x: project.x,
  y: project.y,
  depth: project.depth,
  speed: project.speed,
}))

export const caseStudies: CaseStudyData[] = projectsData.map((project) => ({
  slug: project.id,
  title: project.title,
  summary: project.description,
  role: 'UX Design + Research',
  timeline: 'Project timeline available on request',
  tools: project.tools,
  heroImage:
    projectImages[project.id] ??
    'linear-gradient(145deg, #f1ece6 0%, #d6cdc4 55%, #bbb0a4 100%)',
  sections: [
    {
      id: 'context',
      title: 'Context & Problem',
      paragraphs: [project.longDescription, `Inspiration: ${project.inspiration}`],
    },
    {
      id: 'process',
      title: 'Process & Research',
      paragraphs: project.process,
    },
    {
      id: 'design',
      title: 'Design Challenges',
      paragraphs: project.challenges,
    },
    {
      id: 'outcome',
      title: 'Outcome & Reflection',
      paragraphs: [
        project.description,
        'This case study page is generated from structured project data so content can be updated without editing component code.',
      ],
    },
  ],
}))

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
