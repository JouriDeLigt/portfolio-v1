<script setup lang="ts">
import type { Project } from '#shared/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="flex flex-col items-center rounded-2xl bg-white px-6 py-12">
    <h3 class="text-center text-lg leading-tight text-jl-red">{{ project.name }}</h3>
    <p class="text-center text-sm">{{ project.text }}</p>
    <div class="mt-8 flex grow items-end gap-2">
      <a
        v-for="skill in project.skills"
        :key="skill.name"
        :href="skill.url"
        target="_blank"
        rel="noopener"
        class="text-sm font-light underline transition duration-150 ease-in-out hover:text-jl-red"
      >
        {{ skill.name }}
      </a>
    </div>
    <div class="mt-4 flex gap-4">
      <a v-if="project.url" :href="project.url" target="_blank" rel="noopener">
        <NuxtImg src="/static/icons/external-url.webp" :alt="`View ${project.name}`" width="25" height="25" densities="x1 x2" format="webp" loading="lazy" />
      </a>
      <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener">
        <NuxtImg src="/static/icons/github.webp" :alt="`${project.name} on GitHub`" width="25" height="25" densities="x1 x2" format="webp" loading="lazy" />
      </a>
    </div>
  </div>
</template>
