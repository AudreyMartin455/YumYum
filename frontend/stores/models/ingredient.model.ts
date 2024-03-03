import type {Tag} from "~/stores/models/tag.type";

export interface Ingredient {
    label: string
    tags: Tag[]
}