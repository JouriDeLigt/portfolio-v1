<script setup lang="ts">
import { skills } from '#shared/data/site'
</script>

<template>
  <section id="about" class="relative flex min-h-screen w-full items-start justify-center pt-16">
    <SectionGradient mirrored />
    <div class="relative z-10 container flex flex-col">
      <h2 class="text-2xl font-bold capitalize lg:text-4xl"><TagLabel spaced>About me</TagLabel></h2>
      <NuxtImg
        src="/static/images/about.webp"
        alt="Desk setup with the Jouri de Ligt logo"
        width="1200"
        height="1200"
        sizes="sm:100vw md:100vw lg:620px xl:780px 2xl:1024px"
        format="webp"
        loading="lazy"
        class="mt-16 h-96 w-full rounded-2xl object-cover"
      />
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
