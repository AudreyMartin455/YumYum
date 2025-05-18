import {defineStore} from "pinia";
import type {Recipe} from "~/stores/models/recipe.model";
import type {AmountIngredient} from "~/stores/models/amount-ingredient.model";

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        recipes: [] as Recipe[],
        amountsIngredients: [] as AmountIngredient[]
    }),
    actions: {
        addToCart(recipe: Recipe) {
            this.recipes.push(recipe)
        },
        removeToCart(uuidRecipe: string) {
            this.recipes = this.recipes.filter((recipe: Recipe) => recipe.uuid !== uuidRecipe)
        },
        getRecipes(): Recipe[] {
            return this.recipes;
        },
        isInCart(uuidRecipe: string) {
            return this.recipes.some(recipe => recipe.uuid === uuidRecipe)
        },
        generateAmountsIngredient() {
            this.amountsIngredients = [];
            this.getRecipes().forEach(recipe => {
                recipe.amountIngredients.forEach(amountIngredient => {
                    const indexIngredientAlreadyInCart = this.amountsIngredients.findIndex(amountIngredientInCart => {
                        return amountIngredient.ingredient.uuid === amountIngredientInCart.ingredient.uuid && amountIngredient.unit === amountIngredientInCart.unit
                    })
                    if (indexIngredientAlreadyInCart >= 0) {
                        this.amountsIngredients[indexIngredientAlreadyInCart].amount =
                            this.amountsIngredients[indexIngredientAlreadyInCart].amount +
                            Number(amountIngredient.amount.toString())
                    } else {
                        this.amountsIngredients.push(JSON.parse(JSON.stringify(amountIngredient)))
                    }
                    this.amountsIngredients.sort((a, b) => a.ingredient.label.localeCompare(b.ingredient.label))
                })
            })
        },
        getAmountsIngredient() {
            return this.amountsIngredients;
        }
    }
})

