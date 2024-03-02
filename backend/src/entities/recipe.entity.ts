import {AbstractEntity} from "./abstract.entity";
import {AmountIngredientEntity} from "./amount-ingredient.entity";
import {StepEntity} from "./step.entity";
import {Difficulty} from "./difficulty.type";
import {Tag} from "./category.type";


export interface RecipeEntity extends AbstractEntity {
    label: string;
    amountIngredients: AmountIngredientEntity[],
    steps: StepEntity[],
    timePrep?: number
    timeCook?: number,
    difficulty: Difficulty,
    image?: string,
    tags: Tag[]
}