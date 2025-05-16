import {Module} from "@nestjs/common";
import {RecipeMapper} from "./recipe.mapper";
import {AmountIngredientMapper} from "./amount-ingredient.mapper";
import {IngredientMapper} from "./ingredient.mapper";
import {StepMapper} from "./step.mapper";

const mappers = [RecipeMapper, AmountIngredientMapper, IngredientMapper, StepMapper]

@Module({
    providers: [...mappers],
    exports: [...mappers]
})

export class MapperModule {
}
