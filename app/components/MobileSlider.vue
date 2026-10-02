<script setup lang="ts">
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
  <div ref="slider" class="mobile-slider swiper w-full">
    <div ref="prev" class="swiper-button-prev" />
    <div ref="next" class="swiper-button-next" />
    <div ref="pagination" class="swiper-pagination" />
    <div class="swiper-wrapper">
      <div v-for="image in images" :key="image" class="swiper-slide">
        <NuxtImg
          :src="image"
          :alt="alt"
          sizes="sm:30vw md:30vw lg:179px xl:232px 2xl:313px"
          format="webp"
          loading="lazy"
          class="h-full w-full rounded-2xl shadow-md"
        />
      </div>
    </div>
  </div>
</template>

<style>
/* Overrides Swiper's own CSS; every selector is more specific than Swiper's */
.mobile-slider.swiper {
  --swiper-navigation-sides-offset: 10px;
  display: flex;
  flex-flow: column;
}

.mobile-slider .swiper-button-prev,
.mobile-slider .swiper-button-next {
  width: 27px;
  color: black;
}

/* Same size and position as the icon-font arrows of the original Swiper 8 slider */
.mobile-slider .swiper-button-prev svg,
.mobile-slider .swiper-button-next svg {
  width: auto;
  height: 40px;
}

.mobile-slider .swiper-pagination {
  bottom: unset !important;
  margin-top: 25px;
  position: relative;
  order: 1;
}

.mobile-slider .swiper-pagination .swiper-pagination-bullet {
  background-color: #08080f;
  opacity: 1;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.5);
}

.mobile-slider .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #ee1b49;
}

.mobile-slider .swiper-slide:before,
.mobile-slider .swiper-slide:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-slider .swiper-slide:before {
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0) 100%);
}

.mobile-slider .swiper-slide:after {
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0) 100%);
}

.mobile-slider .swiper-slide.swiper-slide-prev:before,
.mobile-slider .swiper-slide.swiper-slide-next:after {
  opacity: 1;
}
</style>
