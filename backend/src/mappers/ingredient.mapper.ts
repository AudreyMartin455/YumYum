import {Injectable} from "@nestjs/common";
import {RecipeEntity} from "../entities/recipe.entity";
import {RecipeDto} from "../dto/recipe.dto";
import {AmountIngredientDto} from "../dto/amount-ingredient.dto";
import {StepDto} from "../dto/step.dto";
import {StepEntity} from "../entities/step.entity";
import {IngredientEntity} from "../entities/ingredient.entity";
import {IngredientDto} from "../dto/ingredient.dto";

@Injectable()
export class IngredientMapper {

    public toDto(ingredient: IngredientEntity): IngredientDto {
        return <IngredientDto>{
            label: ingredient.label,
            tags: ingredient.tags
        }
    }

    public toEntity(ingredient: IngredientDto): IngredientEntity {
        return <IngredientEntity>{
            label: ingredient.label,
            tags: ingredient.tags
        }
    }
    public allToDto(ingredients: IngredientEntity[]): IngredientDto[] {
        return ingredients.map(ingredient => this.toDto(ingredient))
    }

    public allToEntity(ingredients: IngredientDto[]): IngredientEntity[] {
        return ingredients.map(ingredient => this.toEntity(ingredient))
    }
}