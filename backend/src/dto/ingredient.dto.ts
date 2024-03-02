import {Tag} from "../entities/category.type";
import {ApiProperty} from "@nestjs/swagger";

export class IngredientDto {
    @ApiProperty({ example: 'Béchamel' })
    label: string

    @ApiProperty()
    tags: Tag[]
}