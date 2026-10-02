<script setup lang="ts">
import type { SocialItem } from '#shared/data/site'

defineProps<{
  items: SocialItem[]
  /** Counter-rotates the icons when the whole tag is rotated, as in the desktop sidebar. */
  rotated?: boolean
}>()
</script>

<template>
  <span class="flex leading-none font-bold">
    &lt;img src=&quot;
    <span class="flex space-x-4 px-4">
      <a
        v-for="item in items"
        :key="item.name"
        :href="item.url"
        target="_blank"
        rel="noopener"
        :class="{ 'rotate-90': rotated }"
      >
        <img :src="`/static/icons/${item.icon}`" :alt="item.name" width="25" height="25">
      </a>
    </span>
    &quot;/&gt;
  </span>
</template>
