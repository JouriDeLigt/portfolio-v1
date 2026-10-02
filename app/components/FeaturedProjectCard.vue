<script setup lang="ts">
import type { FeaturedProject } from '#shared/data/projects'

defineProps<{
  project: FeaturedProject
}>()
</script>

<!-- Odd and even cards mirror each other on xl screens -->
<template>
  <div class="group flex w-full flex-col xl:flex-row xl:gap-4 xl:even:flex-row-reverse">
    <img :src="project.thumbnail" :alt="project.title" class="h-[300px] w-full rounded-2xl object-cover xl:h-auto xl:w-1/2">
    <div class="-mt-8 flex w-full flex-col group-odd:items-start group-even:items-end xl:mt-0 xl:w-1/2">
      <p class="hidden text-sm leading-none font-light text-black xl:block">Featured Project</p>
      <h3 class="mt-2 hidden text-2xl leading-none font-bold text-jl-red xl:block">{{ project.title }}</h3>
      <div
        class="drop-shadow-card rounded-2xl bg-white p-12 text-center xl:mt-4 xl:w-[calc(100%_+_3rem)] xl:group-odd:-translate-x-12 xl:group-odd:text-left xl:group-even:translate-x-12 xl:group-even:text-right"
      >
        <p class="text-sm leading-none font-light text-black xl:hidden">Featured Project</p>
        <h3 class="mb-2 text-3xl leading-none font-bold text-jl-red xl:hidden">{{ project.title }}</h3>
        <p class="line-clamp-3 font-light text-black">{{ project.excerpt }}</p>
      </div>
      <div class="mt-4 flex w-full justify-between group-odd:flex-row group-even:flex-row-reverse">
        <div class="flex gap-2">
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
        <div class="flex">
          <NuxtLink :to="`/project/${project.slug}`" class="flex items-center font-bold text-jl-red">
            View project
            <div
              class="relative ml-4 flex h-5 w-5 items-center justify-center rounded-full border-2 border-solid border-jl-red transition-[margin] duration-200 ease-in-out group-hover:ml-6"
            >
              <img src="/static/icons/arrow.svg" alt="Arrow" width="15" height="15">
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
