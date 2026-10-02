export interface NavItem {
  title: string
  href: string
}

export interface SocialItem {
  name: string
  /** File name in public/static/icons */
  icon: string
  url: string
}

export const homeNavItems: NavItem[] = [
  { title: 'About', href: '/#about' },
  { title: 'Featured projects', href: '/#featured-projects' },
  { title: 'All projects', href: '/#all-projects' },
  { title: 'Contact', href: '/#contact' },
]

export const projectNavItems: NavItem[] = [{ title: 'Back to main page', href: '/' }]

const linkedin: SocialItem = { name: 'Linkedin', icon: 'linkedin.png', url: 'https://www.linkedin.com/in/jouri-de-ligt/' }
const github: SocialItem = { name: 'Github', icon: 'github.png', url: 'https://github.com/JouriDeLigt' }
const instagram: SocialItem = { name: 'Instagram', icon: 'instagram.png', url: 'https://www.instagram.com/jouri.ligt/' }

/** The homepage leaves out Instagram; every other page shows it. */
export const homeSocialItems: SocialItem[] = [linkedin, github]
export const socialItems: SocialItem[] = [linkedin, github, instagram]

export const skills: string[] = [
  'Vue.js',
  'Nuxt',
  'Tailwindcss',
  'Wordpress',
  'Github',
  'DevOps',
  'Proxmox',
  'Virtualization',
]
