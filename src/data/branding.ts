import ds3Logo from '@/assets/my_photos/marketing/DS3.png'
import rrLogo from '@/assets/my_photos/marketing/RR.png'

export interface BrandingMedia {
  src?: string
  alt: string
  label?: string
}

export interface BrandingSection {
  id: string
  title: string
  description?: string
  note?: string
  /** Placeholder count when media is not ready yet */
  placeholders?: number
  media?: BrandingMedia[]
  items?: BrandingSection[]
}

export interface BrandingOrg {
  slug: string
  name: string
  shortName: string
  summary: string
  approach?: string
  sections: BrandingSection[]
  /** Optional logo / cover once you drop assets in */
  logoSrc?: string
}

export const brandingOrgs: BrandingOrg[] = [
  {
    slug: 'data-science-student-society',
    name: 'Data Science Student Society',
    shortName: 'DS3',
    logoSrc: ds3Logo,
    summary:
      'Branding and marketing for DS3 with a more professional, minimal look that still feels like the org.',
    approach:
      'Designs pull from data science as a field, Datasaur (the dinosaur mascot), and the specific event or campaign they sit on, so each piece feels on-brand without getting noisy.',
    sections: [
      {
        id: 'reels',
        title: 'Reels',
        description: 'Three DS3 reels for social and event promotion.',
        placeholders: 3,
      },
      {
        id: 'graphics',
        title: 'Graphics',
        description: 'Event and campaign graphics matched to the moment, still tied to the DS3 system.',
        placeholders: 2,
      },
      {
        id: 'stickers',
        title: 'Stickers',
        description: 'Sticker designs for community and merch moments.',
        placeholders: 2,
      },
      {
        id: 'merch',
        title: 'Merch',
        description: 'Merch concepts and assets that keep the brand clean and wearable.',
        placeholders: 2,
      },
    ],
  },
  {
    slug: 'raas-ruckus',
    name: 'UCSD Raas Ruckus Competitive Dance Team',
    shortName: 'Raas Ruckus',
    logoSrc: rrLogo,
    summary:
      'Identity and show-facing brand work for UCSD’s competitive Raas team, from mark to stage.',
    approach:
      'RR work spans lasting team identity (logo, flag, sponsorship) and a fuller theme world for performance season.',
    sections: [
      {
        id: 'logo',
        title: 'Logo design',
        description: 'Logo exploration and final mark for Raas Ruckus.',
        placeholders: 1,
      },
      {
        id: 'flag',
        title: 'Flag design',
        description: 'Team flag design for competition and presence.',
        placeholders: 1,
      },
      {
        id: 'sponsorship',
        title: 'Sponsorship packet',
        description: 'Sponsorship materials for partners and outreach.',
        placeholders: 1,
      },
      {
        id: 'theme',
        title: 'Theme development',
        note: 'Reveal coming winter 2027.',
        description:
          'A full theme system for the season, built out across color, costume, and set.',
        items: [
          {
            id: 'palette',
            title: 'Color palette',
            placeholders: 1,
          },
          {
            id: 'costume',
            title: 'Costume design',
            placeholders: 1,
          },
          {
            id: 'set',
            title: 'Set design',
            placeholders: 1,
          },
        ],
      },
    ],
  },
]

export function getBrandingOrg(slug: string): BrandingOrg | undefined {
  return brandingOrgs.find((org) => org.slug === slug)
}
