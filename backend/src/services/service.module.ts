import {Module} from "@nestjs/common";
import {IRecipeService} from "./irecipe.service";
import {RecipeService} from "./recipe.service";
import {DaoModule} from "../repositories/dao.module";
import {IIngredientService} from "./iingredient.service";
import {IngredientService} from "./ingredient.service";

const services = [{
    provide: IRecipeService,
    useClass: RecipeService
},{
    provide: IIngredientService,
    useClass: IngredientService
}];

@Module({
    imports: [DaoModule],
    providers: [...services],
    exports: [...services]
})
export class ServiceModule {
}
