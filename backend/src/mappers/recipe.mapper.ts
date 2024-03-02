import {Injectable} from "@nestjs/common";
import {RecipeEntity} from "../entities/recipe.entity";
import {RecipeDto} from "../dto/recipe.dto";
import {AmountIngredientDto} from "../dto/amount-ingredient.dto";
import {StepDto} from "../dto/step.dto";
import {AmountIngredientMapper} from "./amount-ingredient.mapper";
import {StepMapper} from "./step.mapper";

@Injectable()
export class RecipeMapper {

    constructor(private readonly amountIngredientMapper: AmountIngredientMapper, private readonly stepMapper: StepMapper) {
    }

    public toDto(recipe: RecipeEntity): RecipeDto {
        return <RecipeDto>{
            uuid: recipe.uuid,
            label: recipe.label,
            amountIngredients: this.amountIngredientMapper.allToDto(recipe.amountIngredients),
            steps: this.stepMapper.allToDto(recipe.steps),
            timePrep: recipe.timePrep,
            timeCook: recipe.timeCook,
            image: recipe.image,
            difficulty: recipe.difficulty,
            tags: recipe.tags
        }
    }

    public toEntity(recipe: RecipeDto): RecipeEntity {
        return <RecipeEntity>{
            uuid: recipe.uuid,
            label: recipe.label,
            amountIngredients: this.amountIngredientMapper.allToEntity(recipe.amountIngredients),
            steps: this.stepMapper.allToEntity(recipe.steps),
            timePrep: recipe.timePrep,
            timeCook: recipe.timeCook,
            image: recipe.image,
            difficulty: recipe.difficulty,
            tags: recipe.tags
        }
    }
}