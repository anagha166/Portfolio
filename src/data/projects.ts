import type { CaseStudy } from '@/types/caseStudy'
import { placeholderImages } from '@/assets/placeholders'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'human-ai-workspace',
    title: 'Human-AI Creative Workspace',
    subtitle: 'Designing trust and agency in collaborative AI tools',
    role: 'Lead Product Designer',
    timeline: '6 months · 2025',
    team: '2 designers, 4 engineers, 1 researcher',
    impact: 'Reduced task completion time by 34% while increasing user confidence scores',
    tags: ['Human-AI Interaction', 'Product Design', 'Research'],
    heroImage: placeholderImages.aiWorkspace,
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: [
          'Creative professionals were adopting AI tools rapidly, but trust remained fragile. Users felt they were losing authorship over their work when AI suggestions appeared without context or explanation.',
          'Our research revealed a tension: people wanted AI assistance, but feared becoming passive consumers of machine-generated content.',
        ],
      },
      {
        id: 'research',
        title: 'Research',
        content: [
          'We conducted 24 contextual inquiries with designers, writers, and researchers across three organizations. Sessions focused on how participants currently integrate AI into their creative workflows.',
          'Key methods included diary studies, think-aloud protocols, and co-design workshops where participants sketched their ideal AI collaboration patterns.',
        ],
        images: [
          {
            src: placeholderImages.aiWorkspace,
            alt: 'Research synthesis board with affinity mapping',
            caption: 'Affinity mapping session with 180+ observations',
          },
        ],
      },
      {
        id: 'insights',
        title: 'Insights',
        content: [
          'Users need visible provenance — knowing what came from them versus the AI.',
          'Control granularity matters: blanket on/off switches feel too coarse; users want per-task agency.',
          'The moment of suggestion is as important as the suggestion itself. Timing and framing shape trust.',
        ],
        pullQuote:
          'I don\'t want AI to think for me. I want it to think with me — but only when I invite it.',
      },
      {
        id: 'opportunity',
        title: 'Opportunity',
        content: [
          'We identified an opportunity to design an "invitation model" — where AI assistance is always opt-in at the task level, with clear attribution and reversible actions.',
          'This reframed AI from an autonomous agent to a collaborative instrument, similar to how a pencil extends the hand rather than replacing it.',
        ],
        principles: [
          'Agency by default',
          'Transparent provenance',
          'Reversible actions',
          'Contextual, not constant',
        ],
      },
      {
        id: 'design-process',
        title: 'Design Process',
        content: [
          'We moved through rapid paper prototyping, low-fidelity wireframes, and three rounds of interactive prototypes. Each iteration was tested with 5–8 participants in 45-minute sessions.',
          'The design process itself mirrored our product philosophy: every decision started as a sketch, was tested with users, and refined through iteration.',
        ],
      },
      {
        id: 'wireframes',
        title: 'Wireframes',
        content: [
          'Early wireframes explored three interaction models: sidebar assistant, inline suggestions, and a dedicated collaboration panel. Testing revealed the panel model provided the best balance of visibility and non-intrusion.',
        ],
        images: [
          {
            src: placeholderImages.aiWorkspace,
            alt: 'Low-fidelity wireframes showing three layout options',
            caption: 'Three interaction models tested in round one',
          },
        ],
      },
      {
        id: 'iterations',
        title: 'Iterations',
        content: [
          'Version 2 introduced the "sketch invitation" pattern — users draw a selection area to invite AI input, maintaining spatial context. Version 3 refined attribution badges and undo granularity.',
        ],
        beforeAfter: {
          before: {
            src: placeholderImages.designSystem,
            alt: 'Before: AI suggestions appeared globally',
          },
          after: {
            src: placeholderImages.aiWorkspace,
            alt: 'After: Contextual invitation model',
          },
        },
      },
      {
        id: 'final-solution',
        title: 'Final Solution',
        content: [
          'The final design centers on a contextual collaboration panel that appears only when invited. Each AI contribution is tagged, traceable, and individually reversible. Users maintain a visible "authorship timeline" showing their decisions alongside AI suggestions.',
        ],
        images: [
          {
            src: placeholderImages.aiWorkspace,
            alt: 'Final interface showing collaboration panel',
            caption: 'Final solution with attribution timeline',
          },
        ],
        metrics: [
          { value: '34%', label: 'Faster task completion' },
          { value: '2.1×', label: 'Higher confidence scores' },
          { value: '89%', label: 'Would recommend' },
        ],
      },
      {
        id: 'prototype',
        title: 'Prototype',
        content: [
          'We built a high-fidelity prototype in Figma with micro-interactions for the invitation flow, attribution badges, and undo states. The prototype was used in final validation with 12 participants.',
        ],
        prototypeUrl: 'https://www.figma.com',
      },
      {
        id: 'reflection',
        title: 'Reflection',
        content: [
          'This project reinforced that designing for AI isn\'t about the technology — it\'s about preserving human agency in the face of powerful automation.',
          'The sketch metaphor became more than branding; it became a design principle. Every feature we built asked: does this extend the user\'s hand, or replace it?',
        ],
      },
      {
        id: 'impact',
        title: 'Impact',
        content: [
          'The workspace launched to a closed beta of 500 creative professionals. Task completion improved by 34%, and qualitative feedback highlighted increased confidence in AI-assisted work.',
          'The invitation model has since been adopted as a pattern across two other product teams.',
        ],
        metrics: [
          { value: '500', label: 'Beta users' },
          { value: '34%', label: 'Efficiency gain' },
          { value: '3', label: 'Teams adopting pattern' },
        ],
      },
    ],
    reflection: [
      'Designing for AI requires designing for uncertainty — users need to feel safe exploring capabilities without fear of irreversible mistakes.',
      'The best AI interfaces feel like instruments, not agents.',
    ],
    lessonsLearned: [
      'Start research before defining the problem space — our initial assumptions about "trust" were too narrow.',
      'Paper prototypes remain invaluable for testing conceptual interaction models.',
      'Attribution isn\'t a feature — it\'s a foundation for trust.',
    ],
  },
  {
    slug: 'mindful-health',
    title: 'Mindful Health',
    subtitle: 'A patient-centered approach to chronic care management',
    role: 'Product Designer & Researcher',
    timeline: '4 months · 2024',
    team: '1 designer, 3 engineers, 2 researchers',
    impact: 'Increased daily engagement by 47% among patients with chronic conditions',
    tags: ['Healthcare', 'UX Research', 'Mobile'],
    heroImage: placeholderImages.healthApp,
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: [
          'Patients managing chronic conditions faced overwhelming health apps that prioritized data collection over meaningful support. Engagement dropped sharply after the first week.',
        ],
      },
      {
        id: 'research',
        title: 'Research',
        content: [
          'We interviewed 18 patients and 6 care coordinators, mapping the emotional journey of chronic care — not just the clinical one.',
        ],
        pullQuote:
          'I don\'t need another app telling me what to do. I need something that understands my day.',
      },
      {
        id: 'insights',
        title: 'Insights',
        content: [
          'Patients wanted gentle nudges, not alerts. Progress needed to feel personal, not clinical.',
          'Care coordinators needed visibility without surveillance — a subtle but critical distinction.',
        ],
      },
      {
        id: 'opportunity',
        title: 'Opportunity',
        content: [
          'Design a care companion that adapts to daily rhythms rather than imposing rigid schedules.',
        ],
        principles: [
          'Gentle over urgent',
          'Personal over clinical',
          'Support over surveillance',
        ],
      },
      {
        id: 'design-process',
        title: 'Design Process',
        content: [
          'Co-design sessions with patients produced paper sketches of their ideal daily health routines. These sketches directly informed our information architecture.',
        ],
      },
      {
        id: 'wireframes',
        title: 'Wireframes',
        content: [
          'We tested a day-view model versus a task-list model. The day-view won decisively — patients wanted to see health within the context of their lives.',
        ],
        images: [
          {
            src: placeholderImages.healthApp,
            alt: 'Day-view wireframe',
            caption: 'Day-view model selected after testing',
          },
        ],
      },
      {
        id: 'iterations',
        title: 'Iterations',
        content: [
          'Three rounds of iteration focused on notification tone, progress visualization, and the coordinator dashboard.',
        ],
      },
      {
        id: 'final-solution',
        title: 'Final Solution',
        content: [
          'A calm, day-centered interface with adaptive reminders, personal progress stories, and a coordinator view that surfaces trends without exposing individual data points.',
        ],
        metrics: [
          { value: '47%', label: 'Engagement increase' },
          { value: '3.2×', label: 'Week-4 retention' },
          { value: '4.6', label: 'App store rating' },
        ],
      },
      {
        id: 'prototype',
        title: 'Prototype',
        content: [
          'Interactive prototype tested with 10 patients over a two-week diary study.',
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'reflection',
        title: 'Reflection',
        content: [
          'Healthcare design demands empathy at every layer — from notification copy to data architecture.',
        ],
      },
      {
        id: 'impact',
        title: 'Impact',
        content: [
          'Launched to 2,000 patients across two clinic networks. Engagement increased 47% and care coordinators reported better conversation quality during visits.',
        ],
      },
    ],
    reflection: [
      'The most impactful design decisions were the ones we removed — fewer screens, fewer alerts, more breathing room.',
    ],
    lessonsLearned: [
      'Patients are experts in their own experience — co-design isn\'t optional in healthcare.',
      'Calm interfaces aren\'t passive; they\'re respectful.',
    ],
  },
  {
    slug: 'sketch-design-system',
    title: 'Sketch Design System',
    subtitle: 'A tactile component library for digital products',
    role: 'Design Systems Lead',
    timeline: '8 months · 2024–2025',
    team: '2 designers, 5 engineers',
    impact: 'Reduced design-to-dev handoff time by 52% across 4 product teams',
    tags: ['Design Systems', 'Front-end', 'Accessibility'],
    heroImage: placeholderImages.designSystem,
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        content: [
          'Four product teams were building inconsistent interfaces, leading to fragmented user experiences and slow development cycles.',
        ],
      },
      {
        id: 'research',
        title: 'Research',
        content: [
          'Audited 340 screens across products, catalogued 89 unique button styles, and interviewed 12 engineers about their biggest handoff pain points.',
        ],
      },
      {
        id: 'insights',
        title: 'Insights',
        content: [
          'Engineers wanted composable primitives, not rigid templates. Designers wanted expressive flexibility within consistent bounds.',
        ],
      },
      {
        id: 'opportunity',
        title: 'Opportunity',
        content: [
          'Build a system that feels handcrafted but scales systematically — inspired by the precision of industrial design specifications.',
        ],
        principles: [
          'Composable primitives',
          'Accessible by default',
          'Documented decisions',
          'Tactile visual language',
        ],
      },
      {
        id: 'design-process',
        title: 'Design Process',
        content: [
          'Started with typography and spacing scales derived from paper grid systems, then built component tokens that mapped to CSS custom properties.',
        ],
      },
      {
        id: 'wireframes',
        title: 'Wireframes',
        content: [
          'Component anatomy diagrams served as the wireframe equivalent — defining structure before visual polish.',
        ],
      },
      {
        id: 'iterations',
        title: 'Iterations',
        content: [
          'Token architecture went through three revisions based on engineering feedback. Final version supports light/dark modes and high-contrast accessibility.',
        ],
        beforeAfter: {
          before: {
            src: placeholderImages.healthApp,
            alt: 'Before: inconsistent button styles',
          },
          after: {
            src: placeholderImages.designSystem,
            alt: 'After: unified component library',
          },
        },
      },
      {
        id: 'final-solution',
        title: 'Final Solution',
        content: [
          'A 40-component library with Figma kit, React implementation, and living documentation. Warm paper tones and graphite typography create a cohesive tactile feel.',
        ],
        metrics: [
          { value: '52%', label: 'Faster handoff' },
          { value: '40', label: 'Components' },
          { value: '4', label: 'Teams adopted' },
        ],
      },
      {
        id: 'prototype',
        title: 'Prototype',
        content: [
          'Living documentation site with interactive examples and accessibility annotations.',
        ],
        prototypeUrl: 'https://www.figma.com',
      },
      {
        id: 'reflection',
        title: 'Reflection',
        content: [
          'A design system is a product — it needs research, iteration, and dedicated ownership to succeed.',
        ],
      },
      {
        id: 'impact',
        title: 'Impact',
        content: [
          'Adopted by all four product teams within three months. Handoff time decreased 52% and accessibility audit scores improved across the board.',
        ],
      },
    ],
    reflection: [
      'The best design systems encode decisions, not just components — every token tells a story about why.',
    ],
    lessonsLearned: [
      'Engineer designers as stakeholders from day one.',
      'Documentation is the product — components are just the output.',
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((p) => p.slug === slug)
}

export function getProjectSummaries() {
  return caseStudies.map(({ slug, title, role, timeline, impact, tags, heroImage }) => ({
    slug,
    title,
    role,
    timeline,
    impact,
    tags,
    image: heroImage,
  }))
}
