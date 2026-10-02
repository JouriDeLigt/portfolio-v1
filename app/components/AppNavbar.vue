<script setup lang="ts">
import type { NavItem, SocialItem } from '#shared/data/site'

defineProps<{
  navItems?: NavItem[]
  socialItems: SocialItem[]
}>()

const navIsOpen = ref(false)
</script>

<template>
  <header class="fixed top-0 left-0 z-50 w-full">
    <div class="flex items-start justify-between px-[10px] py-4 sm:px-[35px] sm:py-8 lg:px-8">
      <NuxtLink to="/">
        <img src="/static/logo/logo-mark-black.png" alt="Jouri de Ligt logo" width="59" height="39">
      </NuxtLink>
      <nav v-if="navItems" class="hidden flex-col items-center space-y-4 lg:flex">
        <NuxtLink v-for="item in navItems" :key="item.href" :to="item.href" class="group capitalize">
          <span class="transition duration-300 ease-in-out group-hover:text-jl-red">&lt;</span>{{ item.title }}<span class="transition duration-300 ease-in-out group-hover:text-jl-red">/&gt;</span>
        </NuxtLink>
      </nav>
      <button type="button" aria-label="Open menu" class="relative h-[27px] w-[42px] lg:hidden" @click="navIsOpen = !navIsOpen">
        <span class="absolute top-0 left-0 h-[5px] w-full rounded-full bg-jl-black" />
        <span class="absolute top-1/2 left-0 h-[5px] w-full -translate-y-1/2 rounded-full bg-jl-black" />
        <span class="absolute top-full left-0 h-[5px] w-full -translate-y-full rounded-full bg-jl-black" />
      </button>
    </div>

    <div class="fixed bottom-8 left-8 hidden lg:block">
      <SocialLinks :items="socialItems" rotated class="ml-[30px] origin-bottom-left -rotate-90 text-2xl" />
    </div>

    <div
      class="fixed top-0 right-0 flex h-full w-4/5 items-center justify-center bg-white transition duration-500"
      :class="navIsOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <button type="button" aria-label="Close menu" class="absolute top-4 left-4 h-[40px] w-[40px]" @click="navIsOpen = false">
        <span class="absolute top-1/2 left-0 h-[5px] w-full -translate-y-1/2 rotate-45 rounded-full bg-jl-red" />
        <span class="absolute top-1/2 left-0 h-[5px] w-full -translate-y-1/2 -rotate-45 rounded-full bg-jl-red" />
      </button>
      <nav v-if="navItems" class="flex flex-col items-center space-y-4">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="group capitalize"
          @click="navIsOpen = false"
        >
          <span class="transition duration-300 ease-in-out group-hover:text-jl-red">&lt;</span>{{ item.title }}<span class="transition duration-300 ease-in-out group-hover:text-jl-red">/&gt;</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
