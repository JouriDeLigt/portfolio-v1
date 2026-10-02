<script setup lang="ts">
import { homeNavItems, homeSocialItems } from '#shared/data/site'

useHead({ title: 'Home' })
</script>

<template>
  <div class="page">
    <AppNavbar :nav-items="homeNavItems" :social-items="homeSocialItems" />
    <main>
      <HeroSection :social-items="homeSocialItems" />
      <AboutSection />
      <FeaturedProjects />
      <AllProjects />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
