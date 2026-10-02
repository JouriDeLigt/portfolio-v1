<script setup lang="ts">
import { homeNavItems, homeSocialItems, site } from '#shared/data/site'

// Name first on the homepage: "Jouri de Ligt | Front-end developer & founder of Hoort"
useHead({ titleTemplate: '%siteName %separator %s' })
useSeoMeta({
  title: 'Front-end developer & founder of Hoort',
  description: site.description,
})

useSchemaOrg([
  defineWebPage({ '@type': 'ProfilePage', 'mainEntity': { '@id': '#identity' } }),
])
</script>

<template>
  <div class="page">
    <AppNavbar :nav-items="homeNavItems" :social-items="homeSocialItems" />
    <main id="main" tabindex="-1" class="outline-hidden">
      <HeroSection :social-items="homeSocialItems" />
      <AboutSection />
      <FeaturedProjects />
      <AllProjects />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
