<script setup lang="ts">
import { featuredProjects } from '#shared/data/projects'
import { projectNavItems, socialItems } from '#shared/data/site'

definePageMeta({
  validate: route => featuredProjects.some(project => project.slug === route.params.slug),
})

const route = useRoute()
// validate() guarantees the project exists
const project = featuredProjects.find(project => project.slug === route.params.slug)!

useHead({ title: project.title })
</script>

<template>
  <div class="page">
    <AppNavbar :nav-items="projectNavItems" :social-items="socialItems" />
    <main>
      <HeroSection :title="project.title" :subtext="project.excerpt" :url="project.websiteUrl" :social-items="socialItems" />
      <section class="relative flex min-h-screen w-full flex-col items-start justify-center pt-16">
        <div class="relative z-10 container">
          <div class="flex flex-col rounded-2xl bg-white p-8">
            <div class="grid grid-cols-2 gap-8">
              <div class="col-span-1 w-full">
                <img :src="project.desktopImages[0]" :alt="`${project.title} desktop`" class="h-full w-full rounded-2xl object-cover shadow-md">
              </div>
              <div class="col-span-1 w-full">
                <img :src="project.desktopImages[1]" :alt="`${project.title} desktop`" class="h-full w-full rounded-2xl object-cover shadow-md">
              </div>
              <div class="col-span-2 max-h-[300px] w-full">
                <img
                  :src="project.desktopImages[2]"
                  :alt="`${project.title} desktop`"
                  class="h-full w-full rounded-2xl object-cover object-top shadow-md"
                >
              </div>
            </div>
            <p v-if="project.desktopText" class="mt-4">{{ project.desktopText }}</p>
          </div>
          <div class="mt-20 flex flex-col rounded-2xl bg-white p-8">
            <MobileSlider :images="project.mobileImages" :alt="`${project.title} mobile`" />
            <p v-if="project.mobileText" class="mt-4">{{ project.mobileText }}</p>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>
