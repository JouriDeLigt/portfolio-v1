<script setup lang="ts">
import type { NuxtError } from '#app'
import { socialItems } from '#shared/data/site'

const props = defineProps<{
  error: NuxtError
}>()

const status = computed(() => props.error.status ?? 500)

useSeoMeta({
  title: () => (status.value === 404 ? 'Page not found' : 'Something went wrong'),
  robots: 'noindex, follow',
})
</script>

<template>
  <div class="page">
    <AppNavbar :social-items="socialItems" />
    <main id="main" tabindex="-1" class="outline-hidden">
      <NoticeSection :title="`${status}!`" :social-items="socialItems">
        {{ status === 404 ? 'Unfortunately, we did not find this site' : 'Unfortunately, something went wrong' }}
      </NoticeSection>
    </main>
  </div>
</template>
