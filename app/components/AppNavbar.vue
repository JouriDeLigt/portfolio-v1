<script setup lang="ts">
import type { NavItem, SocialItem } from '#shared/data/site'

defineProps<{
  navItems?: NavItem[]
  socialItems: SocialItem[]
}>()

const navIsOpen = ref(false)
const openButton = useTemplateRef<HTMLButtonElement>('openButton')
const closeButton = useTemplateRef<HTMLButtonElement>('closeButton')

async function openMenu() {
  navIsOpen.value = true
  await nextTick()
  closeButton.value?.focus()
}

function closeMenu({ restoreFocus = true } = {}) {
  navIsOpen.value = false
  if (restoreFocus) openButton.value?.focus()
}
</script>

<template>
  <header class="fixed top-0 left-0 z-50 w-full">
    <!-- Off-screen until it receives keyboard focus -->
    <a href="#main" class="absolute -top-full left-4 z-[60] rounded-lg bg-jl-red px-4 py-2 text-white focus:top-4">
      Skip to content
    </a>

    <div class="flex items-start justify-between px-[10px] py-4 sm:px-[35px] sm:py-8 lg:px-8">
      <NuxtLink to="/">
        <NuxtImg src="/static/logo/logo-mark-black.webp" alt="Jouri de Ligt home" width="59" height="39" densities="x1 x2" format="webp" />
      </NuxtLink>
      <nav v-if="navItems" aria-label="Main" class="hidden flex-col items-center space-y-4 lg:flex">
        <NuxtLink v-for="item in navItems" :key="item.href" :to="item.href" class="group capitalize">
          <span aria-hidden="true" class="transition duration-300 ease-in-out group-hover:text-jl-red">&lt;</span>{{ item.title }}<span aria-hidden="true" class="transition duration-300 ease-in-out group-hover:text-jl-red">/&gt;</span>
        </NuxtLink>
      </nav>
      <button
        ref="openButton"
        type="button"
        aria-label="Open menu"
        aria-controls="mobile-menu"
        :aria-expanded="navIsOpen"
        class="relative h-[27px] w-[42px] lg:hidden"
        @click="openMenu"
      >
        <span class="absolute top-0 left-0 h-[5px] w-full rounded-full bg-jl-black" />
        <span class="absolute top-1/2 left-0 h-[5px] w-full -translate-y-1/2 rounded-full bg-jl-black" />
        <span class="absolute top-full left-0 h-[5px] w-full -translate-y-full rounded-full bg-jl-black" />
      </button>
    </div>

    <div class="fixed bottom-8 left-8 hidden lg:block">
      <SocialLinks :items="socialItems" rotated class="ml-[30px] origin-bottom-left -rotate-90 text-2xl" />
    </div>

    <!-- Inert while closed, so keyboard and screen reader users can't reach the off-canvas links -->
    <div
      id="mobile-menu"
      class="fixed top-0 right-0 flex h-full w-4/5 items-center justify-center bg-white transition duration-500"
      :class="navIsOpen ? 'translate-x-0' : 'translate-x-full'"
      :inert="!navIsOpen"
      @keydown.esc="closeMenu()"
    >
      <button
        ref="closeButton"
        type="button"
        aria-label="Close menu"
        class="absolute top-4 left-4 h-[40px] w-[40px]"
        @click="closeMenu()"
      >
        <span class="absolute top-1/2 left-0 h-[5px] w-full -translate-y-1/2 rotate-45 rounded-full bg-jl-red" />
        <span class="absolute top-1/2 left-0 h-[5px] w-full -translate-y-1/2 -rotate-45 rounded-full bg-jl-red" />
      </button>
      <nav v-if="navItems" aria-label="Mobile" class="flex flex-col items-center space-y-4">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="group capitalize"
          @click="closeMenu({ restoreFocus: false })"
        >
          <span aria-hidden="true" class="transition duration-300 ease-in-out group-hover:text-jl-red">&lt;</span>{{ item.title }}<span aria-hidden="true" class="transition duration-300 ease-in-out group-hover:text-jl-red">/&gt;</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
