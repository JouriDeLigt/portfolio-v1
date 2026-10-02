<script setup lang="ts">
/**
 * Renders text as an HTML-like tag, e.g. "<About me />", without screen readers
 * reading out the brackets.
 */
defineProps<{
  /** Space before the closing "/>" */
  spaced?: boolean
}>()
</script>

<template>
  <span aria-hidden="true">&lt;</span><slot /><span aria-hidden="true">{{ spaced ? ' />' : '/>' }}</span>
</template>
