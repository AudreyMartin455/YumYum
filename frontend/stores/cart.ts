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
            this.recipes.forEach(recipe => {
                recipe.amountIngredients.forEach(amountIngredient => {
                    const indexIngredientAlreadyInCart = this.amountsIngredients.findIndex(amountIngredientInCart => {
                        return amountIngredient.ingredient.uuid === amountIngredientInCart.ingredient.uuid
                    })
                    if (indexIngredientAlreadyInCart >= 0) {
                        this.amountsIngredients = this.amountsIngredients.map((amountIngredientInCart, index) => {
                            if (index === indexIngredientAlreadyInCart) {
                                amountIngredientInCart.amount = amountIngredientInCart.amount + amountIngredient.amount
                            }
                            return amountIngredientInCart
                        })
                    } else {
                        this.amountsIngredients.push(amountIngredient)
                    }
                })
            })
        },
        getAmountsIngredient() {
            return this.amountsIngredients;
        }
    }
})