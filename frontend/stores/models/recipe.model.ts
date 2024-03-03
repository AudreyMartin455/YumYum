import type {AmountIngredient} from "~/stores/models/amount-ingredient.model";
import type {Step} from "~/stores/models/step.model";
import type {Tag} from "~/stores/models/tag.type";

export interface Recipe {
    uuid?: string,
    createdOn?: Date,
    updateOn?: Date,
    label: string;
    amountIngredients: AmountIngredient[],
    steps: Step[],
    timePrep?: number
    timeCook?: number,
    difficulty: Difficulty,
    image?: string,
    tags: string[],
    type: DishesType,
}

export type Difficulty = 'EASY' | 'MEDIUM'| 'DIFFICULT'
export type DishesType = 'DISH' | 'DESSERT' | 'BREAKFAST'