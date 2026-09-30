import { SiGmail } from 'react-icons/si'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaHeart, FaPaintBrush } from 'react-icons/fa'
import { IoLogoFigma } from 'react-icons/io5'

const socialLinks = [
  {
    title: 'Gmail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=anaghakamath@gmail.com',
    Icon: SiGmail,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anagha-k-b00117266/',
    Icon: BsLinkedin,
  },
  {
    title: 'Github',
    href: 'https://github.com/anagha166',
    Icon: BsGithub,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/anagha_kamath/?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr#',
    Icon: BsInstagram,
  },
  {
    title: 'Figma',
    href: 'https://www.figma.com/design/zr6gaowuvk26BAXcc17BAV/Figma-Portfolio?node-id=0-1&p=f&t=dRebldDxvNLR688q-0',
    Icon: IoLogoFigma,
  },
  {
    title: 'Art Account',
    href: 'https://www.instagram.com/art.by.anagha/?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr#',
    Icon: FaPaintBrush,
  },
] as const

export function SiteFooter() {
  return (
    <footer className="site-footer w-full border-t border-black/10 bg-black px-[var(--spacing-page)] py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="flex items-center gap-2 text-sm font-medium">
          <span className="hidden sm:inline">Made with</span>
          <FaHeart
            className="site-footer-icon size-3.5 shrink-0 transition-transform duration-300 hover:rotate-6 hover:scale-110"
            aria-hidden="true"
          />
          <span className="hidden sm:inline">by Anagha</span>
          <span className="sm:hidden">Anagha</span>
        </p>

        <div className="flex items-center gap-4 text-xl sm:gap-5">
          {socialLinks.map(({ title, href, Icon }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              aria-label={title}
              className="site-footer-icon inline-flex transition-transform duration-300 hover:rotate-6 hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
