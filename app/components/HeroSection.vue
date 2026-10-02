<script setup lang="ts">
import type { SocialItem } from '#shared/data/site'

/** Without title/subtext/url it renders the homepage intro. */
defineProps<{
  socialItems: SocialItem[]
  title?: string
  subtext?: string
  url?: string
}>()
</script>

<template>
  <section class="relative flex h-screen w-full items-center justify-center">
    <SectionGradient priority class="size-full" />
    <div class="z-10 container flex flex-col">
      <h1 class="text-[36px] leading-tight font-bold text-jl-black sm:text-[40px] xl:text-[48px] 2xl:text-[60px]">
        <template v-if="title">{{ title }}</template>
        <template v-else>
          Hey there i'm <span class="text-jl-red underline">Jouri</span>,<br>
          a front-end <span class="text-jl-red underline">developer</span> based in<br>
          <span class="text-jl-red underline">The Netherlands</span>
        </template>
      </h1>
      <p class="mt-8 text-lg leading-tight xl:text-2xl xl:leading-8">
        <template v-if="subtext">{{ subtext }}</template>
        <template v-else>
          Currently building out
          <a href="https://hoort.dev/" target="_blank" rel="noopener" class="text-jl-red underline">Hoort</a>. A web development
          company focussed on building <span class="text-jl-red underline">custom</span> websites, webshops and internal systems.
        </template>
      </p>
      <a v-if="url" :href="url" target="_blank" rel="noopener" class="mt-6 w-fit rounded-lg bg-jl-red px-4 py-2 text-lg text-white">
        <TagLabel>View Website</TagLabel>
      </a>
      <NuxtLink v-else to="/#featured-projects" class="mt-6 w-fit rounded-lg bg-jl-red px-4 py-2 text-lg text-white">
        <TagLabel>View work</TagLabel>
      </NuxtLink>

      <div class="mt-16 lg:hidden">
        <SocialLinks :items="socialItems" class="items-center text-lg sm:text-2xl sm:leading-8" />
      </div>
    </div>
  </section>
</template>
