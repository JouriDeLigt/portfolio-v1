<script setup lang="ts">
// Pages are prerendered at build time, so refresh the year in the browser to keep it current
const year = useState('copyright-year', () => new Date().getFullYear())
onMounted(() => {
  year.value = new Date().getFullYear()
})
</script>

<template>
  <footer class="relative container flex w-full items-start justify-center pt-16 pb-8">
    <div class="relative flex w-full flex-col items-center rounded-2xl bg-white p-8">
      <div class="flex flex-col gap-4">
        <div class="flex justify-center">
          <NuxtLink to="/privacy" class="text-sm font-light text-gray-500 underline transition duration-150 ease-in-out hover:text-jl-red">
            Privacy policy
          </NuxtLink>
        </div>
        <p class="text-center font-bold">
          Website designed by
          <a href="https://twitter.com/VisualsbyFabi" target="_blank" rel="noopener" class="font-bold text-jl-red">@VisualsbyFabi</a>
          and built by
          <a href="https://x.com/JourideLigt" target="_blank" rel="noopener" class="font-bold text-jl-red">@JourideLigt</a>
        </p>
        <p class="text-center font-bold text-black">Copyright © {{ year }} Jouri de Ligt. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
