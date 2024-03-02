import {Module} from "@nestjs/common";
import {RecipeDao} from "./recipe.dao";

const dao = [RecipeDao]

@Module({
    providers: [...dao],
    exports: [...dao]
})
export class DaoModule {
}
