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
        <img src="/static/icons/external-url.png" alt="Demo version" width="25" height="25">
      </a>
      <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener">
        <img src="/static/icons/github.png" alt="Github repo" width="25" height="25">
      </a>
    </div>
  </div>
</template>
