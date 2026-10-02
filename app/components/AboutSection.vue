<script setup lang="ts">
import { skills } from '#shared/data/site'
</script>

<template>
  <section id="about" class="relative flex min-h-screen w-full items-start justify-center pt-16">
    <img src="/static/images/gradient-w.png" alt="gradient" class="absolute inset-0 -scale-x-100 object-contain opacity-50">
    <div class="relative z-10 container flex flex-col">
      <h2 class="text-2xl font-bold capitalize lg:text-4xl">&lt;About me /&gt;</h2>
      <img src="/static/images/dummy-image.jpeg" alt="Dummy image" class="mt-16 h-96 w-full rounded-2xl object-cover">
      <p class="mt-8 text-lg leading-tight">
        As a Front-end developer its my job to ensure your website looks and feels amazing in every aspect. How do i
        achieve that you may ask? I try to keep up with the latest and greatest of technologies out there to help you get
        the website you desire. Down below are some of my favourite technologies i use to build modern day applications.
      </p>
      <div class="mt-8 flex flex-wrap justify-between gap-4">
        <p v-for="skill in skills" :key="skill" class="w-fit grow rounded-lg bg-jl-red px-16 py-2 text-center text-base text-white">
          {{ skill }}
        </p>
      </div>
    </div>
  </section>
</template>
