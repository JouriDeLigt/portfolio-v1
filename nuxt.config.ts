import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',

  // Swiper's CSS has to load before main.css, which overrides parts of it.
  css: [
    '@fontsource-variable/space-grotesk',
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
    '~/assets/css/main.css',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: 'Jouri de ligt | %s',
      meta: [
        {
          name: 'description',
          content: 'Front-end developer portfolio from Jouri de Ligt build with React, Next.js, Tailwindcss and more!',
        },
      ],
      link: [{ rel: 'icon', href: '/static/logo/favicon.jpg' }],
    },
  },

  // Every page is static HTML; only /api/contact runs as a serverless function.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/thankyou', '/sitemap.xml'],
    },
  },
})
