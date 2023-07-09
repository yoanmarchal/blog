export default defineNuxtConfig({
  nitro: {
    prerender: {
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json']
    }
  },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  modules: [
    '@vite-pwa/nuxt',
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    '@nuxthq/studio',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ]
})
