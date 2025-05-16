import {AbstractEntity} from "./abstract.entity";

export interface IngredientEntity extends AbstractEntity {
    label: string
    tags: string[]
}