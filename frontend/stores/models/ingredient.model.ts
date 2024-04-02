import type {Tag} from "~/stores/models/tag.type";

export interface Ingredient {
    uuid: string,
    createdOn: Date,
    updateOn: Date,
    label: string
    tags: Tag[]
}