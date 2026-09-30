export interface ExperienceItem {
  id: string
  period: string
  role: string
  company: string
  location: string
  points: string[]
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 'design-lab',
    period: 'Jun 2026 — Present',
    role: 'HCI Research Intern',
    company: 'UC San Diego Design Lab',
    location: 'San Diego, CA',
    points: [
      'Working @ Protolab under Professor Steven Dow and Jude Rayan, Ph.D.',
      'Designing and building AI-based facilitation tools to augment collaboration in dynamic, team-based problem-solving environments.',
      'Automated the end-to-end research workflow using JavaScript, reducing study administration time by approximately 60%.',
    ],
  },
  {
    id: 'chartr',
    period: 'May 2026 — Present',
    role: 'Design Fellow',
    company: 'ChartR',
    location: 'New York, NY',
    points: [
      'Crafting intuitive UX and marketing design for clinician-led, HIPAA-compliant AI products, translating complex healthcare and policy systems into clear, user-centered solutions that improve transparency, accountability, and patient outcomes.',
    ],
  },
  {
    id: 'vr-research',
    period: 'Jan 2026 — Present',
    role: 'VR Research Assistant',
    company: 'Systems Neuroscience Lab — UCSD Cognitive Science Department',
    location: 'San Diego, CA',
    points: [
      'Designed and prototyped immersive VR environments to study how spatial design, visual hierarchy, and environmental cues influence human navigation and decision-making.',
    ],
  },
  {
    id: 'ds3-marketing',
    period: 'June 2025 — Present',
    role: 'Marketing Director',
    company: 'Data Science Student Society (DS3) — UC San Diego',
    location: 'San Diego, CA',
    points: [
      'Led end-to-end design of digital campaigns by translating event goals into clear visuals, increasing total following by 40% and doubling average engagement within one quarter.',
    ],
  },
  {
    id: 'ds3-software',
    period: 'Oct 2024 — Present',
    role: 'UI Designer + Software Developer',
    company: 'DS3 Software Team — UC San Diego',
    location: 'San Diego, CA',
    points: [
      'Designed and developed a component-based web platform using React and TailwindCSS, improving accessibility, scalability, and maintainability for 500+ users.',
    ],
  },
  {
    id: 'ascendtials',
    period: 'Aug 2024 — Oct 2024',
    role: 'UX + Web Designer Intern',
    company: 'ASCENDtials',
    location: 'San Diego, CA',
    points: [
      'Redesigned 95% of the organization\'s website by identifying usability issues and restructuring navigation, layout, and content hierarchy to improve clarity and accessibility.',
    ],
  },
]
