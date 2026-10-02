// The sitemap picks up <img src> of prerendered pages, which are @nuxt/image variants
// (/_ipx/<modifiers>/static/...). List the original project screenshots instead and skip
// decorative images such as the gradients and icons.
const IPX_PATH = /^\/_ipx\/[^/]+(\/.+)$/

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('sitemap:resolved', (ctx) => {
    for (const url of ctx.urls) {
      url.images = url.images
        ?.map((image) => {
          const loc = new URL(String(image.loc))
          const original = loc.pathname.match(IPX_PATH)?.[1]
          return original ? { ...image, loc: new URL(original, loc.origin).href } : image
        })
        .filter(image => String(image.loc).includes('/static/projects/'))
    }
  })
})
