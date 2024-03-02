import {Injectable} from "@nestjs/common";
import {RecipeEntity} from "../entities/recipe.entity";
import {RecipeDto} from "../dto/recipe.dto";
import {AmountIngredientDto} from "../dto/amount-ingredient.dto";
import {StepDto} from "../dto/step.dto";
import {StepEntity} from "../entities/step.entity";

@Injectable()
export class StepMapper {

    public toDto(step: StepEntity): StepDto {
        return <StepDto>{
            order: step.order,
            label: step.label
        }
    }

    public toEntity(step: StepDto): StepEntity {
        return <StepEntity>{
            order: step.order,
            label: step.label
        }
    }
    public allToDto(steps: StepEntity[]): StepDto[] {
        return steps.map(step => this.toDto(step))
    }

    public allToEntity(steps: StepDto[]): StepEntity[] {
        return steps.map(step => this.toEntity(step))
    }
}