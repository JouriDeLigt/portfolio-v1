<script setup lang="ts">
/** Decorative gradient behind a section. Add `class="size-full"` to stretch it over the whole section. */
defineProps<{
  mirrored?: boolean
  /** Above the fold: load immediately with high priority */
  priority?: boolean
}>()
</script>

<template>
  <NuxtImg
    src="/static/images/gradient-w.webp"
    alt=""
    width="1920"
    height="1080"
    sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
    densities="x1"
    format="webp"
    quality="70"
    :loading="priority ? 'eager' : 'lazy'"
    :fetchpriority="priority ? 'high' : undefined"
    :preload="priority ? { fetchPriority: 'high' } : false"
    class="absolute inset-0 object-contain opacity-50"
    :class="{ '-scale-x-100': mirrored }"
  />
</template>
