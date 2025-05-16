// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: [
        {
            path: '~/components',
            pathPrefix: true
        },
        {
            path: '~/components/design-system',
            pathPrefix: false
        }],
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', 'nuxt-primevue', '@nuxt/image'],
    primevue: {
        usePrimeVue: true,
        components: {
            include: '*',
            prefix: 'P-'
        },
    },
    app: {
        pageTransition: {name: 'dishes/new', mode: 'out-in'},
        head: {
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'
                },
            ]
        }
    },
    css: ['primevue/resources/themes/aura-light-green/theme.css', '~/assets/css/main.css']
})