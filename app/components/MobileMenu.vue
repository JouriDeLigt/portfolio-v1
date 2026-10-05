<script setup lang="ts">
import { site, type NavItem, type SocialItem } from '#shared/data/site'

defineProps<{
  open: boolean
  items: NavItem[]
  socialItems: SocialItem[]
}>()

defineEmits<{
  navigate: []
}>()
</script>

<!-- Full-screen menu below lg. Inert and invisible while closed, so it can't be reached by keyboard or screen reader. -->
<template>
  <div
    id="mobile-menu"
    role="dialog"
    aria-modal="true"
    aria-label="Menu"
    class="fixed inset-0 flex flex-col overflow-y-auto bg-[#f2f2f2] px-[10px] pt-28 pb-10 transition-[opacity,visibility] duration-300 sm:px-[35px] sm:pt-36 lg:hidden"
    :class="open ? 'visible opacity-100' : 'invisible opacity-0'"
    :inert="!open"
  >
    <SectionGradient mirrored />

    <nav aria-label="Mobile" class="relative">
      <ul>
        <li
          v-for="(item, index) in items"
          :key="item.href"
          class="border-b-2 border-jl-black/10 transition duration-500 ease-out motion-reduce:transition-none"
          :class="open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          :style="{ transitionDelay: open ? `${100 + index * 60}ms` : '0ms' }"
        >
          <NuxtLink
            :to="item.href"
            class="group flex items-center justify-between gap-4 py-4 text-[clamp(1.5rem,7.5vw,2.75rem)] leading-tight font-bold capitalize"
            @click="$emit('navigate')"
          >
            <span><span aria-hidden="true" class="text-jl-red">&lt;</span>{{ item.title }}<span aria-hidden="true" class="text-jl-red">/&gt;</span></span>
            <span class="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-jl-red transition-transform duration-200 group-hover:translate-x-1">
              <img src="/static/icons/arrow.svg" alt="" width="22" height="22">
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div
      class="relative mt-auto pt-12 transition duration-500 ease-out motion-reduce:transition-none"
      :class="open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
      :style="{ transitionDelay: open ? `${100 + items.length * 60}ms` : '0ms' }"
    >
      <p class="text-sm font-light">Get in touch</p>
      <a :href="`mailto:${site.email}`" class="mt-1 inline-block text-xl font-bold text-jl-red">{{ site.email }}</a>
      <SocialLinks :items="socialItems" class="mt-8 items-center text-2xl" />
    </div>
  </div>
</template>
