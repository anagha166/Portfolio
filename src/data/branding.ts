import ds3Logo from '@/assets/my_photos/marketing/DS3/DS3.png'
import rrLogo from '@/assets/my_photos/marketing/RR/RR.png'

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
  /** Case study is live, so the index should not say coming soon */
  published?: boolean
  /** One line for the branding index, once a case study exists */
  highlight?: string
}

export const brandingOrgs: BrandingOrg[] = [
  {
    slug: 'data-science-student-society',
    name: 'Data Science Student Society',
    shortName: 'DS3',
    logoSrc: ds3Logo,
    summary:
      'Marketing direction for DS3: a technical brand, campaigns that sound like people, and a feed with more aura.',
    published: true,
    highlight: '137.2k views in a month. Followers up 30%.',
    approach:
      'The work uses Datasaur and the chevron mark, then builds campaigns on computer surfaces so the org feels technical and human at the same time.',
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
