import {defineStore} from "pinia";
import type {Ingredient} from "~/stores/models/ingredient.model";
import {getIngredients, postIngredient} from "~/server/services/ingredient.service";

export const useIngredientStore = defineStore('ingredientStore', {
    state: () => ({
        ingredients: [] as Ingredient[],
    }),
    actions: {
        async getIngredients() {
            this.ingredients = (await getIngredients()).data;
        },
        async createIngredient(ingredient: Ingredient) {
            await postIngredient(ingredient);
        }
    }
})