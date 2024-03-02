import {AbstractEntity} from "./abstract.entity";
import {Tag} from "./category.type";

export interface IngredientEntity extends AbstractEntity {
    label: string
    tags: Tag[]
}