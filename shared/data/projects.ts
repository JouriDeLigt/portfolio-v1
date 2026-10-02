export interface Skill {
  name: string
  url: string
}

export interface FeaturedProject {
  /** URL of the detail page: /project/<slug> */
  slug: string
  title: string
  /** Meta description and social preview text, keep it under ~155 characters */
  description: string
  excerpt: string
  websiteUrl: string
  skills: Skill[]
  /** Image on the homepage card */
  thumbnail: string
  /** 1200x630 social preview image; falls back to public/og-image.jpg */
  ogImage?: string
  /** The project page shows the first two side by side and the third full width. */
  desktopImages: [string, string, string]
  desktopText?: string
  /** Shown in the slider on the project page */
  mobileImages: string[]
  mobileText?: string
}

export interface Project {
  name: string
  text: string
  skills: Skill[]
  url?: string
  repo?: string
}

/**
 * Images live in public/static/projects/<slug>/.
 * Order here is the order on the site.
 */
export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'paddap-digital-agency',
    title: 'PADDAP - Digital agency',
    description:
      'Corporate WordPress website for digital agency PADDAP, built on the _s (underscores) starter theme with Toolset for custom post types and fields.',
    excerpt:
      'While working at PADDAP i helped developing the corporate website of the company. It is a Wordpress based website using "_s" or "underscores" naked theme and Toolset for post type management and custom fields.',
    websiteUrl: 'https://paddap.nl/',
    skills: [{ name: 'Wordpress', url: 'https://wordpress.org/' }],
    thumbnail: '/static/projects/paddap-digital-agency/desktop-3.webp',
    ogImage: '/static/projects/paddap-digital-agency/og.jpg',
    desktopImages: [
      '/static/projects/paddap-digital-agency/desktop-1.webp',
      '/static/projects/paddap-digital-agency/desktop-2.webp',
      '/static/projects/paddap-digital-agency/desktop-3.webp',
    ],
    mobileImages: [
      '/static/projects/paddap-digital-agency/mobile-contact-alt.webp',
      '/static/projects/paddap-digital-agency/mobile-contact.webp',
      '/static/projects/paddap-digital-agency/mobile-pronkstukken.webp',
      '/static/projects/paddap-digital-agency/mobile-kennisbank.webp',
      '/static/projects/paddap-digital-agency/mobile-pronkstuk-dvdw.webp',
      '/static/projects/paddap-digital-agency/mobile-home.webp',
    ],
  },
  {
    slug: 'hr-projectpartners',
    title: 'HR ProjectPartners',
    description:
      'WordPress website for HR ProjectPartners, built on the _s (underscores) theme with Toolset for custom post types and a clean, fast mobile layout.',
    excerpt:
      'Website built for HR ProjectPartners. A Wordpress based website running on "_s" or "underscores" naked theme. Toolset for post type management and custom fields. Used regular css for styling.',
    websiteUrl: 'https://www.hrprojectpartners.nl/',
    skills: [
      { name: 'Wordpress', url: 'https://wordpress.org' },
      { name: 'Underscores', url: 'https://underscores.me/' },
    ],
    thumbnail: '/static/projects/hr-projectpartners/desktop-2.webp',
    ogImage: '/static/projects/hr-projectpartners/og.jpg',
    desktopImages: [
      '/static/projects/hr-projectpartners/desktop-1.webp',
      '/static/projects/hr-projectpartners/desktop-2.webp',
      '/static/projects/hr-projectpartners/desktop-3.webp',
    ],
    desktopText:
      'The desktop design was already made but a bit inconsistent. So while building the site i cleaned everything up a bit to keep it nice and clean. Plugins used for the site are: Contact form 7 for form handling and Toolset for post-type/ custom fields handling.',
    mobileImages: [
      '/static/projects/hr-projectpartners/mobile-menu.webp',
      '/static/projects/hr-projectpartners/mobile-services.webp',
      '/static/projects/hr-projectpartners/mobile-careers.webp',
      '/static/projects/hr-projectpartners/mobile-contact.webp',
      '/static/projects/hr-projectpartners/mobile-home.webp',
      '/static/projects/hr-projectpartners/mobile-vacancy.webp',
      '/static/projects/hr-projectpartners/mobile-about.webp',
    ],
    mobileText:
      'For the mobile version we kept everything very clean and not over the top. It has a 95% grid layout to get as many content on the screen as possible while still keeping it not over the top. There were no plugins used for the mobile navbar or any of the other elements.',
  },
]

export const projects: Project[] = [
  {
    name: 'Jouri de Ligt - Portfolio V1',
    text: 'Portfolio V1 is a Nuxt based portfolio website styled with Tailwindcss and deployed on Vercel. Originally built with React and Next.js, now rebuilt in Nuxt without a CMS to keep it maintenance free.',
    skills: [
      { name: 'Nuxt', url: 'https://nuxt.com/' },
      { name: 'Vue.js', url: 'https://vuejs.org/' },
      { name: 'Tailwindcss', url: 'https://tailwindcss.com/' },
    ],
    url: 'https://jourideligt.dev',
    repo: 'https://github.com/JouriDeLigt/portfolio-v1',
  },
  {
    name: 'Airbnb clone',
    text: 'Airbnb-clone build based on a tutorial. Using React.js for the front-end, Next.js for server side functions and TailwindCSS for component based styling. Together with the Mapbox API for a seemless map integration.',
    skills: [
      { name: 'React', url: 'https://react.dev/' },
      { name: 'Next.js', url: 'https://nextjs.org/' },
      { name: 'Tailwindcss', url: 'https://tailwindcss.com/' },
    ],
    repo: 'https://github.com/JouriDeLigt/airbnb-jouri',
  },
]
