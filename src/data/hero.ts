export const HERO_NAME = 'Anagha Kamath'

export const HERO_ROLE = 'Product Designer & Researcher'

export const HERO_CREDENTIALS = [
  'UC San Diego',
  'Math & CS',
  'Cognitive Science',
  'UX Design',
] as const

export const HERO_STATEMENT =
  'Math-CS rigor and cognitive science research — applied to product design with measurable outcomes.'

export const HERO_BYLINE = `${HERO_NAME} — ${HERO_ROLE}`

export const HERO_DISCIPLINES = 'Product Design · Cognitive Science · UC San Diego'

export interface CompanyLogo {
  name: string
  placeholder: boolean
}

export const HERO_LOGOS: CompanyLogo[] = [
  { name: 'Google', placeholder: true },
  { name: 'Meta', placeholder: true },
  { name: 'Stripe', placeholder: true },
  { name: 'Figma', placeholder: true },
  { name: 'Airbnb', placeholder: true },
]

export interface ProofOutcome {
  stat: string
  label: string
  context: string
}

export const HERO_PROOF: ProofOutcome[] = [
  {
    stat: '+34%',
    label: 'faster task completion',
    context: 'Human-AI Creative Workspace',
  },
  {
    stat: '52%',
    label: 'faster design handoff',
    context: 'Sketch Design System',
  },
  {
    stat: '+47%',
    label: 'daily engagement',
    context: 'Mindful Health',
  },
]

export const ABOUT_COPY = {
  headline: 'I study how minds work — then design for them.',
  body: 'Math-CS at UCSD. Cognitive science and neuroscience research into perception and decision-making. Product design with quantified impact across human-AI tools, healthcare, and design systems.',
}
