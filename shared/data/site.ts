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

/** Used for meta tags, structured data and the sitemap */
export const site = {
  url: 'https://jourideligt.dev',
  name: 'Jouri de Ligt',
  description:
    'Front-end developer from the Netherlands and founder of Hoort. I build custom websites, webshops and internal systems with Vue.js, Nuxt and Tailwind CSS.',
  email: 'hello@jourideligt.dev',
  jobTitle: 'Front-end developer',
  company: { name: 'Hoort', url: 'https://hoort.dev' },
  twitter: '@JourideLigt',
  /** Portrait for structured data */
  photo: '/static/mail_signature/profile.jpg',
}

export const homeNavItems: NavItem[] = [
  { title: 'About', href: '/#about' },
  { title: 'Featured projects', href: '/#featured-projects' },
  { title: 'All projects', href: '/#all-projects' },
  { title: 'Contact', href: '/#contact' },
]

export const projectNavItems: NavItem[] = [{ title: 'Back to main page', href: '/' }]

const linkedin: SocialItem = { name: 'LinkedIn', icon: 'linkedin.webp', url: 'https://www.linkedin.com/in/jouri-de-ligt/' }
const github: SocialItem = { name: 'GitHub', icon: 'github.webp', url: 'https://github.com/JouriDeLigt' }
const instagram: SocialItem = { name: 'Instagram', icon: 'instagram.webp', url: 'https://www.instagram.com/jouri.ligt/' }

/** The homepage leaves out Instagram; every other page shows it. */
export const homeSocialItems: SocialItem[] = [linkedin, github]
export const socialItems: SocialItem[] = [linkedin, github, instagram]

/** Profiles that belong to the same person, for structured data */
export const sameAs: string[] = [
  linkedin.url,
  github.url,
  instagram.url,
  'https://x.com/JourideLigt',
]

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
