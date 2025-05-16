
import {IngredientDto} from "./ingredient.dto";
import {Unit} from "../entities/unit.type";
import {ApiProperty} from "@nestjs/swagger";

export class AmountIngredientDto {
    @ApiProperty({ example: 100 })
    amount: number;

    @ApiProperty({ example: 'ML' })
    unit: Unit;

    @ApiProperty({ type: IngredientDto })
    ingredient: IngredientDto
}