<script setup lang="ts">
import { homeNavItems, type NavItem, type SocialItem } from '#shared/data/site'

defineProps<{
  /** Desktop navigation */
  navItems?: NavItem[]
  socialItems: SocialItem[]
}>()

// The mobile menu always offers the full navigation; the section links work from any page
const route = useRoute()
const mobileItems = computed(() => route.path === '/' ? homeNavItems : [{ title: 'Home', href: '/' }, ...homeNavItems])

const navIsOpen = ref(false)
const header = useTemplateRef<HTMLElement>('header')
const toggleButton = useTemplateRef<HTMLButtonElement>('toggleButton')

function closeMenu({ restoreFocus = true } = {}) {
  if (!navIsOpen.value) return
  navIsOpen.value = false
  if (restoreFocus) toggleButton.value?.focus()
}

// While the menu covers the page: no scrolling behind it, and everything outside the
// header is unreachable for keyboard and screen reader users
function lockPage(locked: boolean) {
  document.documentElement.style.overflow = locked ? 'hidden' : ''
  for (const element of header.value?.parentElement?.children ?? []) {
    if (element !== header.value) element.toggleAttribute('inert', locked)
  }
}

watch(navIsOpen, lockPage)

// The menu only exists below lg; close it when the window grows past that
let desktop: MediaQueryList | undefined
const onBreakpointChange = () => desktop?.matches && closeMenu({ restoreFocus: false })

onMounted(() => {
  desktop = window.matchMedia('(min-width: 1024px)')
  desktop.addEventListener('change', onBreakpointChange)
})

onBeforeUnmount(() => {
  desktop?.removeEventListener('change', onBreakpointChange)
  lockPage(false)
})
</script>

<template>
  <header ref="header" class="fixed top-0 left-0 z-50 w-full" @keydown.esc="closeMenu()">
    <!-- Off-screen until it receives keyboard focus -->
    <a href="#main" class="absolute -top-full left-4 z-[60] rounded-lg bg-jl-red px-4 py-2 text-white focus:top-4">
      Skip to content
    </a>

    <!-- Above the mobile menu, so the logo and the toggle stay visible -->
    <div class="relative z-20 flex items-start justify-between px-[10px] py-4 sm:px-[35px] sm:py-8 lg:px-8">
      <NuxtLink to="/" @click="closeMenu({ restoreFocus: false })">
        <NuxtImg src="/static/logo/logo-mark-black.webp" alt="Jouri de Ligt home" width="59" height="39" densities="x1 x2" format="webp" />
      </NuxtLink>
      <nav v-if="navItems" aria-label="Main" class="hidden flex-col items-center space-y-4 lg:flex">
        <NuxtLink v-for="item in navItems" :key="item.href" :to="item.href" class="group capitalize">
          <span aria-hidden="true" class="transition duration-300 ease-in-out group-hover:text-jl-red">&lt;</span>{{ item.title }}<span aria-hidden="true" class="transition duration-300 ease-in-out group-hover:text-jl-red">/&gt;</span>
        </NuxtLink>
      </nav>
      <!-- Hamburger that morphs into a close icon -->
      <button
        ref="toggleButton"
        type="button"
        :aria-label="navIsOpen ? 'Close menu' : 'Open menu'"
        aria-controls="mobile-menu"
        :aria-expanded="navIsOpen"
        class="relative h-[27px] w-[42px] lg:hidden"
        @click="navIsOpen ? closeMenu() : (navIsOpen = true)"
      >
        <span
          class="absolute left-0 h-[5px] w-full rounded-full transition-all duration-300 motion-reduce:transition-none"
          :class="navIsOpen ? 'top-1/2 -translate-y-1/2 rotate-45 bg-jl-red' : 'top-0 bg-jl-black'"
        />
        <span
          class="absolute top-1/2 left-0 h-[5px] w-full -translate-y-1/2 rounded-full bg-jl-black transition-all duration-300 motion-reduce:transition-none"
          :class="{ 'scale-x-0 opacity-0': navIsOpen }"
        />
        <span
          class="absolute left-0 h-[5px] w-full rounded-full transition-all duration-300 motion-reduce:transition-none"
          :class="navIsOpen ? 'top-1/2 -translate-y-1/2 -rotate-45 bg-jl-red' : 'top-full -translate-y-full bg-jl-black'"
        />
      </button>
    </div>

    <div class="fixed bottom-8 left-8 hidden lg:block">
      <SocialLinks :items="socialItems" rotated class="ml-[30px] origin-bottom-left -rotate-90 text-2xl" />
    </div>

    <MobileMenu
      :open="navIsOpen"
      :items="mobileItems"
      :social-items="socialItems"
      class="z-10"
      @navigate="closeMenu({ restoreFocus: false })"
    />
  </header>
</template>
