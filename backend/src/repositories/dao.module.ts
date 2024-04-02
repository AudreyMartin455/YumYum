import {Module} from "@nestjs/common";
import {RecipeDao} from "./recipe.dao";
import {IngredientDao} from "./ingredient.dao";

const dao = [RecipeDao, IngredientDao]

@Module({
    providers: [...dao],
    exports: [...dao]
})
export class DaoModule {
}
