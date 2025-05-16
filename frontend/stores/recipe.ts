import {defineStore} from "pinia";
import type {DishesType, Recipe} from "~/stores/models/recipe.model";
import {deleteRecipe, getRecipe, getRecipes, postRecipe, updateRecipe} from "~/server/services/recipe.service";

export const useRecipeStore = defineStore('recipeStore', {
    state: () => ({
        recipes: [] as Recipe[],
        recipe: undefined as (Recipe | undefined)
    }),
    actions: {
        async getRecipes(type: DishesType) {
            this.recipes = (await getRecipes(type)).data;
        },
        async createRecipe(recipe: Recipe) {
            await postRecipe(recipe);
        },
        async getRecipe(uuid: string) {
            this.recipe = (await getRecipe(uuid)).data
        },
        async updateRecipe(recipe: Recipe) {
            this.recipe = (await updateRecipe(recipe)).data
        },
        async deleteRecipe(uuid: string) {
            await deleteRecipe(uuid);
        },
        clearSelectedRecipe() {
            this.recipe = undefined
        }
    }
})