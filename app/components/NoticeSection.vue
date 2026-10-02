<script setup lang="ts">
import type { SocialItem } from '#shared/data/site'

/** Full-screen message used by the thank-you and error pages. */
defineProps<{
  title: string
  socialItems: SocialItem[]
}>()
</script>

<template>
  <section class="relative flex h-screen w-full items-center justify-center">
    <SectionGradient mirrored priority />
    <div class="z-10 container flex flex-col">
      <h1 class="text-[40px] leading-none font-bold text-jl-black sm:text-[100px]">{{ title }}</h1>
      <p class="mt-4 text-lg leading-tight xl:text-2xl xl:leading-8">
        <slot />
      </p>
      <NuxtLink to="/" class="mt-6 w-fit rounded-lg bg-jl-red px-4 py-2 text-lg text-white"><TagLabel>Back to home</TagLabel></NuxtLink>

      <div class="mt-16 lg:hidden">
        <SocialLinks :items="socialItems" class="text-2xl" />
      </div>
    </div>
  </section>
</template>
