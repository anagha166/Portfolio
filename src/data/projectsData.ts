export interface ProjectData {
  id: string
  title: string
  description: string
  longDescription: string
  tools: string[]
  inspiration: string
  challenges: string[]
  process: string[]
  images: string[]
  githubUrl?: string
  liveUrl?: string
  category: string
}

export const projectsData: ProjectData[] = [
  {
    id: 'ascendtials',
    title: 'ASCENDtials Website Redesign',
    description:
      'Redesigned a nonprofit site to improve trust, accessibility, and donation-ready navigation for community members.',
    longDescription:
      "A comprehensive website redesign for ASCENDtials, a local non-profit organization focused on empowering underserved communities. The project involved complete UI/UX overhaul, content restructuring, and implementation of modern web technologies to improve user engagement and accessibility.",
    tools: ['Figma', 'WordPress', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    inspiration:
      "The inspiration came from the organization's mission to uplift communities. I wanted to create a website that felt welcoming, trustworthy, and easy to navigate for people of all backgrounds and technical abilities.",
    challenges: [
      'Working with WordPress constraints while maintaining modern design standards',
      'Ensuring accessibility compliance for diverse user base',
      'Optimizing for mobile devices with limited resources',
      'Balancing aesthetic appeal with functional requirements',
    ],
    process: [
      'Created wireframes and mockups in Figma',
      'Performed accessibility testing and optimization',
      'Conducted user testing and feedback integration',
    ],
    images: [],
    liveUrl: 'https://ascendtials.org',
    category: 'Website Development',
  },
  {
    id: 'ds3',
    title: 'UCSD Data Science Student Society',
    description:
      'Led UX direction for a student org website redesign, improving information hierarchy and event discoverability.',
    longDescription:
      'Complete redesign of the Data Science Student Society website at UCSD. This project focused on creating an inspiring, engaging platform for students to connect, learn about events, and access resources.',
    tools: ['Figma', 'React', 'TypeScript', 'TailwindCSS', 'HTML', 'CSS', 'JavaScript'],
    inspiration:
      'Inspired by the vibrant data science community at UCSD and the need for better student engagement.',
    challenges: [
      'Understanding how to use React with no prior experience in web development',
      'Creating intuitive navigation for diverse users ranging from students, to faculty, to possible company recruiters',
      'Navigating organization of content and resources',
      'Ensuring fast loading times with rich media content and photo galleries',
    ],
    process: [
      'Analyzed existing website and user feedback',
      'Created high-fidelity prototypes in Figma',
      'Developed React components with TypeScript',
      'Implemented dynamic calendar, alumni testimonials, and photo galleries',
    ],
    images: [],
    liveUrl: 'https://www.ds3atucsd.com/',
    category: 'Website Development',
  },
  {
    id: 'consulting',
    title: 'DS3 Consulting Website',
    description:
      'Designed a consulting-focused experience that frames student projects as clear, credible case studies for potential clients.',
    longDescription:
      "A specialized consulting platform for the Data Science Student Society's consulting services.",
    tools: ['Figma', 'React', 'TypeScript', 'TailwindCSS', 'HTML', 'CSS', 'JavaScript'],
    inspiration: 'The need to present student consulting work professionally to potential clients.',
    challenges: [
      'Creating a professional aesthetic that appeals to business clients',
      'Showcasing complex data science projects in an accessible way',
    ],
    process: [
      'Designed client-focused user experience',
      'Created case study templates and layouts',
      'Developed interactive project showcases',
    ],
    images: [],
    category: 'Website Development',
  },
  {
    id: 'studybuddy',
    title: 'Study Buddy',
    description:
      'Designed an AI learning flow that uses Socratic prompts to keep students engaged in reasoning, not answer copying.',
    longDescription:
      'Study Buddy is an AI-powered learning system designed to help users deeply understand concepts rather than just receive answers.',
    tools: ['Figma', 'Next.js', 'Flask', 'TailwindCSS'],
    inspiration:
      'True learning happens through guided discovery rather than passive consumption.',
    challenges: [
      'Designing AI interactions that feel helpful without giving away answers',
      'Creating a smooth conversational flow between user and system',
      'Balancing simplicity in UI with complex backend logic',
    ],
    process: [
      'Designed wireframes and interactive prototypes in Figma',
      'Developed frontend using Next.js and TailwindCSS',
      'Built backend with Flask to handle AI-driven prompts',
    ],
    images: [],
    category: 'AI / Web Application',
  },
  {
    id: 'yipyap',
    title: 'YipYap Chat App',
    description:
      'Led concept UX and early research for a conversation-first chat app focused on reducing friction and boosting engagement.',
    longDescription:
      'YipYap is a conceptual chat application designed specifically for people who love to chat.',
    tools: ['Figma', 'User Research', 'Prototyping'],
    inspiration:
      'A chat app designed to keep people engaged in conversation.',
    challenges: [
      'Brainstorming engaging UI elements that encourage conversation',
      'Balancing fun features with usability',
      'Researching chat app user behavior and preferences',
    ],
    process: [
      'Conducted user research on chat app preferences',
      'Developed interactive prototypes in Figma',
      'Tested with potential users and iterated',
    ],
    images: [],
    category: 'UI/UX Design',
  },
  {
    id: 'bitefresh',
    title: 'BiteFresh Smart Kitchen App',
    description:
      'Designed an iOS kitchen companion that helps roommates track inventory, expiration windows, and grocery decisions in one flow.',
    longDescription:
      'BiteFresh is a smart kitchen assistant designed to reduce food waste and simplify grocery management.',
    tools: ['Figma', 'Swift', 'Xcode', 'Google Gemini API', 'iOS SDK'],
    inspiration:
      'Inspired by sharing a fridge with roommates and wanting to reduce food waste.',
    challenges: [
      'Designing an intuitive inventory system for perishable and non-perishable items',
      'Integrating AI to estimate expiration dates reliably',
      'Balancing feature richness with a clean interface',
    ],
    process: [
      'Designed wireframes and high-fidelity prototypes in Figma',
      'Developed the app in Swift using Xcode for iOS',
      'Integrated Google Gemini API to estimate item expiration dates',
    ],
    images: [],
    githubUrl: 'https://github.com/anagha166/BiteFresh',
    category: 'Mobile App Development',
  },
  {
    id: 'magic-mirror',
    title: 'Magic Mirror',
    description:
      "Interactive mirror for IEEE quarterly projects that compliments based on appearance.",
    longDescription:
      'An interactive mirror that uses computer vision and AI to provide personalized compliments based on appearance.',
    tools: ['Python', 'OpenCV', 'ChatGPT API', 'Raspberry Pi', 'Laser Cutting', 'Electronics'],
    inspiration:
      'Technology that makes people feel good about themselves.',
    challenges: [
      'Integrating computer vision with AI API calls in real-time',
      'Designing and building the physical mirror housing',
      'Ensuring accurate face detection in various lighting conditions',
    ],
    process: [
      'Researched computer vision and face detection techniques',
      'Designed mirror housing using CAD software',
      'Integrated ChatGPT API for compliment generation',
    ],
    images: [],
    category: 'Hardware',
  },
  {
    id: 'self-playing-guitar',
    title: 'Self-Playing Guitar',
    description:
      'Self-playing guitar made with my team for IEEE quarterly projects, using Arduinos and a 3D printed stand.',
    longDescription:
      'An automated guitar playing system using Arduino microcontrollers and 3D printed components.',
    tools: ['Arduino', '3D Printing', 'CAD', 'C++', 'Laser Cutting', 'Electronics'],
    inspiration:
      'Combining mechanical engineering with programming to create something that produces music.',
    challenges: [
      'Coordinating mechanical movements with precise timing',
      'Designing 3D printed components that could withstand repeated use',
      'Programming complex sequences for different songs',
    ],
    process: [
      'Researched guitar playing mechanics and finger positioning',
      'Designed 3D printed finger actuators and mounting system',
      'Developed Arduino code for motor control and sequencing',
    ],
    images: [],
    category: 'Hardware',
  },
]

export default projectsData
