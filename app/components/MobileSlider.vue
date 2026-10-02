<script setup lang="ts">
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

defineProps<{
  images: string[]
  alt: string
}>()

const slider = useTemplateRef<HTMLElement>('slider')
const prev = useTemplateRef<HTMLElement>('prev')
const next = useTemplateRef<HTMLElement>('next')
const pagination = useTemplateRef<HTMLElement>('pagination')

let swiper: Swiper | undefined

onMounted(() => {
  swiper = new Swiper(slider.value!, {
    modules: [Navigation, Pagination],
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    navigation: { prevEl: prev.value, nextEl: next.value },
    pagination: { el: pagination.value, clickable: true },
  })
})

onBeforeUnmount(() => swiper?.destroy())
</script>

<template>
  <div ref="slider" class="swiper w-full">
    <div ref="prev" class="swiper-button-prev" />
    <div ref="next" class="swiper-button-next" />
    <div ref="pagination" class="swiper-pagination" />
    <div class="swiper-wrapper">
      <div v-for="image in images" :key="image" class="swiper-slide">
        <img :src="image" :alt="alt" class="h-full w-full rounded-2xl shadow-md">
      </div>
    </div>
  </div>
</template>
