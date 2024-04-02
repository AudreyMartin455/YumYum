import {Injectable} from "@nestjs/common";
import {IngredientEntity} from "../entities/ingredient.entity";
import {IngredientDto} from "../dto/ingredient.dto";


@Injectable()
export class IngredientMapper {

    public toDto(ingredient: IngredientEntity): IngredientDto {
        return <IngredientDto>{
            uuid: ingredient.uuid,
            createdOn: ingredient.createdOn,
            updateOn: ingredient.updatedOn,
            label: ingredient.label,
            tags: ingredient.tags
        }
    }

    public toEntity(ingredient: IngredientDto): IngredientEntity {
        return <IngredientEntity>{
            uuid: ingredient.uuid,
            createdOn: ingredient.createdOn,
            updatedOn: ingredient.updatedOn,
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