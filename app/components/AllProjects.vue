<script setup lang="ts">
import { projects } from '#shared/data/projects'
</script>

<template>
  <section id="all-projects" class="relative flex min-h-screen w-full items-start justify-center pt-16">
    <img src="/static/images/gradient-w.png" alt="gradient" class="absolute inset-0 object-contain opacity-50">
    <div class="z-10 container">
      <h2 class="text-2xl font-bold capitalize lg:text-4xl">&lt;All projects /&gt;</h2>
      <div class="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
        <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
      </div>
    </div>
  </section>
</template>
