import {AbstractEntity} from "./abstract.entity";
import {Unit} from "./unit.type";
import {IngredientEntity} from "./ingredient.entity";

export interface AmountIngredientEntity extends AbstractEntity {
    amount: number,
    unit: Unit,
    ingredient: IngredientEntity
}