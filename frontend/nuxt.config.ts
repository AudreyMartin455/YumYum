// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt','nuxt-primevue','@nuxt/image'],
  primevue: {
    usePrimeVue: true,
    components: {
      include: '*',
    }
  },
  app: {
    pageTransition: { name: 'dishes/new', mode: 'out-in' }
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css','~/assets/css/main.css']
})