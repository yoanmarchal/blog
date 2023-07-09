export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Blog post generated on-demand once until next deploy
    '/articles/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false }
  },

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    '@nuxthq/studio',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ]
})
