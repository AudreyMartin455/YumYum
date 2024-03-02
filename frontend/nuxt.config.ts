// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt','nuxt-primevue','@nuxtjs/tailwindcss'],
  primevue: {
    usePrimeVue: true,
    cssLayerOrder: 'reset,primevue',
    components: {
      include: '*',
    }
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css']
})