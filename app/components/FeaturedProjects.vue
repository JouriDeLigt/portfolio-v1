<script setup lang="ts">
import { featuredProjects } from '#shared/data/projects'
</script>

<template>
  <section id="featured-projects" class="relative flex min-h-screen w-full items-start justify-center pt-16">
    <SectionGradient />
    <div class="z-10 container">
      <h2 class="text-2xl font-bold capitalize lg:text-4xl"><TagLabel spaced>Featured projects</TagLabel></h2>
      <div class="mt-16 flex flex-col gap-16">
        <FeaturedProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
      </div>
    </div>
  </section>
</template>
