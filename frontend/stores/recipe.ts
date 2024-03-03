import {defineStore} from "pinia";

export const useRecipeStore = defineStore('recipeStore', {
    state: () => ({
        dishes: '',
        breakfast: '',
        desserts: ''
    }),
    actions: {
        async fetch() {
            const infos: any = await $fetch('https://api.nuxt.com/modules/pinia')

            // this.name = infos.name
            // this.description = infos.description
        }
    }
})