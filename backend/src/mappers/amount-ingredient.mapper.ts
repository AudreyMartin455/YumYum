import {Injectable} from "@nestjs/common";
import {RecipeEntity} from "../entities/recipe.entity";
import {RecipeDto} from "../dto/recipe.dto";
import {AmountIngredientDto} from "../dto/amount-ingredient.dto";
import {StepDto} from "../dto/step.dto";
import {IngredientEntity} from "../entities/ingredient.entity";
import {IngredientDto} from "../dto/ingredient.dto";
import {AmountIngredientEntity} from "../entities/amount-ingredient.entity";
import {IngredientMapper} from "./ingredient.mapper";

@Injectable()
export class AmountIngredientMapper {

    constructor(private readonly ingredientMapper: IngredientMapper) {

    }


    public toDto(amount: AmountIngredientEntity): AmountIngredientDto {
        return <AmountIngredientDto>{
            amount: amount.amount,
            unit: amount.unit,
            ingredient: this.ingredientMapper.toDto(amount.ingredient)
        }
    }

    public toEntity(amount: AmountIngredientDto): AmountIngredientEntity {
        return <AmountIngredientEntity>{
            amount: amount.amount,
            unit: amount.unit,
            ingredient: this.ingredientMapper.toEntity(amount.ingredient)
        }
    }
    public allToDto(amounts: AmountIngredientEntity[]): AmountIngredientDto[] {
        return amounts?.map(amount => this.toDto(amount))
    }

    public allToEntity(amounts: AmountIngredientDto[]): AmountIngredientEntity[] {
        return amounts?.map(amount => this.toEntity(amount))
    }
}