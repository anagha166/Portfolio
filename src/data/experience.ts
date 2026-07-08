export interface ExperienceItem {
  id: string
  role: string
  organization: string
  location: string
  period: string
  summary: string
  highlights: string[]
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 'design-lab',
    role: 'Design Intern',
    organization: 'Design Lab — UC San Diego',
    location: 'San Diego, CA',
    period: 'Jun 2026 — Sep 2026',
    summary:
      'Designing high-fidelity interfaces for an AI-powered conversation recall platform.',
    highlights: [
      'Translating user research into intuitive interaction flows for revisiting past conversations',
      'Building Figma prototypes for navigation and recall patterns in AI-assisted dialogue',
    ],
  },
  {
    id: 'vr-navigation',
    role: 'Project Manager, VR Navigation Research',
    organization: 'Systems Neuroscience Lab — UCSD Cognitive Science',
    location: 'San Diego, CA',
    period: 'Jan 2026 — Present',
    summary:
      'Studying how spatial design and environmental cues shape human navigation in immersive VR.',
    highlights: [
      'Designed and prototyped immersive VR environments for iterative navigation testing',
      'Evaluating how visual hierarchy and spatial layout influence decision-making',
    ],
  },
  {
    id: 'ds3',
    role: 'Marketing Director · UI Designer & Developer',
    organization: 'Data Science Student Society (DS3) — UC San Diego',
    location: 'San Diego, CA',
    period: 'Oct 2024 — Present',
    summary:
      'Leading design and development for a student platform serving 500+ members.',
    highlights: [
      'End-to-end redesign in Figma, React, TypeScript, and Tailwind — wireframes through production',
      'Increased social following by 40% and doubled engagement through user-centered content design',
      'Led Git/GitHub workshops for 80+ students on deployment and collaboration',
    ],
  },
  {
    id: 'ascendtials',
    role: 'UX + Web Designer Intern',
    organization: 'ASCENDtials',
    location: 'San Diego, CA',
    period: 'Aug 2024 — Oct 2024',
    summary: 'Full website redesign focused on usability, clarity, and accessibility.',
    highlights: [
      'Redesigned 95% of the organization website — navigation, layout, and content hierarchy',
      'Created high-fidelity wireframes and prototypes for 10+ pages with a cohesive design system',
    ],
  },
]
