<script setup lang="ts">
import { socialItems } from '#shared/data/site'

useHead({ title: 'Thankyou' })
</script>

<template>
  <div class="page">
    <AppNavbar :social-items="socialItems" />
    <NoticeSection title="Thanks!" :social-items="socialItems">
      Thanks for reaching out! There will be an confirmation email sent out to you in the next couple of minutes. If you
      have any further questions don't hesitate to make contact through
      <a href="mailto:hello@jourideligt.dev" class="font-bold text-jl-red">email</a>
      or
      <a href="https://twitter.com/JourideLigt" target="_blank" rel="noopener" class="font-bold text-jl-red">Twitter</a>.
    </NoticeSection>
  </div>
</template>
