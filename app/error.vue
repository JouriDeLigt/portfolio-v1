<script setup lang="ts">
import type { NuxtError } from '#app'
import { socialItems } from '#shared/data/site'

const props = defineProps<{
  error: NuxtError
}>()

const status = computed(() => props.error.status ?? 500)

useHead({ title: () => (status.value === 404 ? '404 error' : 'Error') })
</script>

<template>
  <div class="page">
    <AppNavbar :social-items="socialItems" />
    <NoticeSection :title="`${status}!`" :social-items="socialItems">
      {{ status === 404 ? 'Unfortunately, we did not find this site' : 'Unfortunately, something went wrong' }}
    </NoticeSection>
  </div>
</template>
