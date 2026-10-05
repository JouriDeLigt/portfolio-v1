import tailwindcss from '@tailwindcss/vite'
import { sameAs, site, skills } from './shared/data/site'

const ONE_WEEK = 'public, max-age=604800, stale-while-revalidate=86400'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    'nuxt-security',
    'nuxt-seo-utils',
    '@nuxtjs/turnstile',
  ],

  $production: {
    // Filled by NUXT_TURNSTILE_SECRET_KEY. Production only: in dev @nuxtjs/turnstile
    // fills in Cloudflare's always-passing test key, which an empty string would override.
    runtimeConfig: { turnstile: { secretKey: '' } },
    // Only serve the variants generated at build time: no sharp in the serverless function
    image: { provider: 'ipxStatic' },
  },

  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [{ name: 'theme-color', content: '#f2f2f2' }],
    },
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: site.url,
    name: site.name,
    description: site.description,
    defaultLocale: 'en',
    // Only the production deployment may be indexed; Vercel previews get noindex
    indexable: process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : undefined,
  },

  runtimeConfig: {
    // Contact form mail via Brevo's transactional API, same variable names as Hoort's other sites.
    // At runtime the NUXT_BREVO_* equivalents override these.
    brevo: {
      apiKey: process.env.BREVO_API_KEY || '',
      url: process.env.BREVO_API_URL || 'https://api.brevo.com/v3',
      // Brevo validates the request but sends nothing; handy for Vercel previews
      sandbox: process.env.BREVO_SANDBOX === 'true',
    },
    contact: {
      // NUXT_CONTACT_FROM_EMAIL / NUXT_CONTACT_TO_EMAIL. Sent from Hoort's Brevo account,
      // where hoort.dev is the authenticated sender domain.
      fromEmail: 'contact@hoort.dev',
      toEmail: 'j.deligt@hoort.dev',
    },
  },

  // On Vercel only the first matching header rule applies, so avoid page-specific header rules:
  // they would drop these security headers for that page.
  routeRules: {
    '/**': {
      headers: {
        'permissions-policy': 'camera=(), microphone=(), geolocation=(), display-capture=(), fullscreen=()',
        'cross-origin-opener-policy': 'same-origin',
        'cross-origin-resource-policy': 'same-site',
      },
    },
    // Not content-hashed, so no "immutable": a changed source image keeps its URL
    '/_ipx/**': { headers: { 'cache-control': ONE_WEEK, 'x-content-type-options': 'nosniff' } },
    '/static/**': { headers: { 'cache-control': ONE_WEEK, 'x-content-type-options': 'nosniff' } },
    '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable', 'x-content-type-options': 'nosniff' } },
  },

  // Small CSS bundle: inlining it saves a render-blocking request on first load
  features: {
    inlineStyles: true,
  },

  compatibilityDate: '2026-10-01',

  // Every page and image variant is static; only /api/contact runs as a serverless function
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/thankyou', '/robots.txt'],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  eslint: {
    config: { stylistic: true },
  },

  fonts: {
    // Self-hosted from public/fonts; the local provider never contacts a font CDN.
    // @nuxt/fonts adds the preload and metric-adjusted fallbacks against layout shift.
    provider: 'local',
    families: [
      {
        name: 'Space Grotesk',
        src: '/fonts/space-grotesk/space-grotesk-latin-wght-normal.woff2',
        weight: '300 700',
        style: 'normal',
        display: 'swap',
      },
    ],
  },

  image: {
    provider: 'ipx',
  },

  schemaOrg: {
    identity: {
      type: 'Person',
      name: site.name,
      image: site.photo,
      jobTitle: site.jobTitle,
      worksFor: { '@type': 'Organization', 'name': site.company.name, 'url': site.company.url },
      address: { '@type': 'PostalAddress', 'addressCountry': 'NL' },
      knowsAbout: skills,
      sameAs,
    },
  },

  security: {
    // These middlewares don't fit a serverless function or are handled in server/api/contact.post.ts
    rateLimiter: false,
    xssValidator: false,
    corsHandler: false,
    allowedMethodsRestricter: false,
    requestSizeLimiter: false,
    removeLoggers: false,
    sri: false,
    headers: {
      crossOriginEmbedderPolicy: false,
      crossOriginResourcePolicy: 'same-site',
      contentSecurityPolicy: {
        'default-src': ['\'self\''],
        'base-uri': ['\'none\''],
        'object-src': ['\'none\''],
        // Prerendered pages get sha256 hashes of their inline scripts, runtime pages a nonce.
        // Cloudflare Turnstile loads its script and widget iframe from challenges.cloudflare.com.
        'script-src': ['\'self\'', '\'nonce-{{nonce}}\'', 'https://challenges.cloudflare.com'],
        'frame-src': ['https://challenges.cloudflare.com'],
        'script-src-attr': ['\'none\''],
        'style-src': ['\'self\'', '\'unsafe-inline\''],
        'img-src': ['\'self\'', 'data:'],
        'font-src': ['\'self\''],
        'connect-src': ['\'self\''],
        'form-action': ['\'self\''],
        'frame-ancestors': ['\'none\''],
        'upgrade-insecure-requests': true,
      },
      xFrameOptions: 'DENY',
      referrerPolicy: 'strict-origin-when-cross-origin',
      // No includeSubDomains/preload: that would also force HTTPS on every other subdomain
      strictTransportSecurity: { maxAge: 63072000, includeSubdomains: false, preload: false },
      permissionsPolicy: {
        'camera': [],
        'microphone': [],
        'geolocation': [],
        'display-capture': [],
        'fullscreen': [],
      },
    },
    // Prerendered pages get the CSP as a <meta> tag with sha256 hashes of their inline scripts.
    // frame-ancestors can't be set in a meta tag; X-Frame-Options: DENY covers it.
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
      nitroHeaders: false,
      exportToPresets: false,
    },
  },

  seo: {
    meta: {
      twitterSite: site.twitter,
      twitterCreator: site.twitter,
    },
  },

  sitemap: {
    // Generated once at build time instead of by the serverless function
    zeroRuntime: true,
  },

  turnstile: {
    // NUXT_PUBLIC_TURNSTILE_SITE_KEY, needed at build time because the pages are prerendered.
    // In dev the module falls back to Cloudflare's always-passing test keys.
    siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
  },
})
