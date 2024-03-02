// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt','nuxt-primevue'],
  primevue: {
    usePrimeVue: true,
    components: {
      include: '*',
    }
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css','~/assets/css/main.css']
})