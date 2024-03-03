import {defineStore} from "pinia";
import type {DishesType, Recipe} from "~/stores/models/recipe.model";
import {getRecipes} from "~/server/services/recipe.service";

export const useRecipeStore = defineStore('recipeStore', {
    state: () => ({
        recipes: [] as Recipe[],
    }),
    actions: {
        async getRecipes(type: DishesType) {
            this.recipes = (await getRecipes(type)).data;
        }
    }
})