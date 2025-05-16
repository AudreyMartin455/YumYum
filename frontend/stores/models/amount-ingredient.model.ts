import type {Ingredient} from "~/stores/models/ingredient.model";

export interface AmountIngredient {
    amount: number,
    unit: Unit,
    ingredient: Ingredient
}

export type Unit = 'PIECE' | 'ML' | 'L' | 'MG' | 'G'