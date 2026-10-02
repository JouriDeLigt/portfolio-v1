<script setup lang="ts">
import { featuredProjects } from '#shared/data/projects'
import { projectNavItems, site, socialItems } from '#shared/data/site'

definePageMeta({
  validate: route => featuredProjects.some(project => project.slug === route.params.slug),
})

const route = useRoute()
// validate() guarantees the project exists
const project = featuredProjects.find(project => project.slug === route.params.slug)!

useSeoMeta({
  title: project.title,
  description: project.description,
  // Without its own image the page uses public/og-image.jpg
  ...(project.ogImage
    ? { ogImage: { url: project.ogImage, width: 1200, height: 630, type: 'image/jpeg', alt: `${project.title} website` } }
    : {}),
})

// Home > project title (the /project segment has no page of its own)
useBreadcrumbItems({ overrides: [undefined, false, { label: project.title }] })

// Plain schema nodes don't resolve relative ids, so these are absolute
const pageUrl = `${site.url}/project/${project.slug}`
useSchemaOrg([
  defineWebPage({ '@type': 'ItemPage', 'mainEntity': { '@id': `${pageUrl}#project` } }),
  {
    '@type': 'CreativeWork',
    '@id': `${pageUrl}#project`,
    'name': project.title,
    'description': project.description,
    'url': project.websiteUrl,
    'image': `${site.url}${project.ogImage ?? project.thumbnail}`,
    'keywords': project.skills.map(skill => skill.name).join(', '),
    'creator': { '@id': `${site.url}/#identity` },
  },
])
</script>

<template>
  <div class="page">
    <AppNavbar :nav-items="projectNavItems" :social-items="socialItems" />
    <main id="main" tabindex="-1" class="outline-hidden">
      <HeroSection :title="project.title" :subtext="project.excerpt" :url="project.websiteUrl" :social-items="socialItems" />
      <section class="relative flex min-h-screen w-full flex-col items-start justify-center pt-16">
        <div class="relative z-10 container">
          <div class="flex flex-col rounded-2xl bg-white p-8">
            <div class="grid grid-cols-2 gap-8">
              <div v-for="(image, index) in project.desktopImages.slice(0, 2)" :key="image" class="col-span-1 w-full">
                <NuxtImg
                  :src="image"
                  :alt="`${project.title} desktop page ${index + 1}`"
                  width="1920"
                  height="1200"
                  sizes="sm:50vw md:50vw lg:262px xl:342px 2xl:464px"
                  format="webp"
                  loading="lazy"
                  class="h-full w-full rounded-2xl object-cover shadow-md"
                />
              </div>
              <div class="col-span-2 max-h-[300px] w-full">
                <NuxtImg
                  :src="project.desktopImages[2]"
                  :alt="`${project.title} desktop page 3`"
                  width="1920"
                  height="1200"
                  sizes="sm:100vw md:100vw lg:556px xl:716px 2xl:960px"
                  format="webp"
                  loading="lazy"
                  class="h-full w-full rounded-2xl object-cover object-top shadow-md"
                />
              </div>
            </div>
            <p v-if="project.desktopText" class="mt-4">{{ project.desktopText }}</p>
          </div>
          <div class="mt-20 flex flex-col rounded-2xl bg-white p-8">
            <!-- Swiper's JavaScript only loads once the slider scrolls into view -->
            <LazyMobileSlider hydrate-on-visible :images="project.mobileImages" :alt="`${project.title} mobile`" />
            <p v-if="project.mobileText" class="mt-4">{{ project.mobileText }}</p>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>
