import {Difficulty} from "../entities/difficulty.type";
import {Tag} from "../entities/category.type";
import {AmountIngredientDto} from "./amount-ingredient.dto";
import {StepDto} from "./step.dto";
import {ApiProperty} from "@nestjs/swagger";
import {IsArray} from 'class-validator';
import {DishesType} from "../entities/dishes.type";

//TODO Mettre uuid, createdOn, updatedOn en readonly sur swagger
export class RecipeDto {

    @ApiProperty({ example: '71ba6898-f2fc-4910-80a9-710c348b82c2' })
    readonly uuid?: string;

    @ApiProperty()
    readonly createdOn?: Date;

    @ApiProperty()
    readonly updatedOn?: Date;

    @ApiProperty({ example: 'Lasagnes' })
    label: string;

    @ApiProperty({type: [AmountIngredientDto]})
    @IsArray()
    amountIngredients: AmountIngredientDto[];

    @ApiProperty({type: [StepDto]})
    @IsArray()
    steps: StepDto[];

    @ApiProperty({ example: 30 })
    timePrep?: number;

    @ApiProperty({ example: 150 })
    timeCook?: number;

    @ApiProperty({ example: 'EASY' })
    difficulty: Difficulty;

    @ApiProperty()
    image?: string;

    @ApiProperty()
    tags: Tag[]

    @ApiProperty({ example: 'DISHES' })
    type: DishesType
}