import {Module} from "@nestjs/common";
import {IRecipeService} from "./irecipe.service";
import {RecipeService} from "./recipe.service";
import {DaoModule} from "../repositories/dao.module";

const services = [{
    provide: IRecipeService,
    useClass: RecipeService
}];

@Module({
    imports: [DaoModule],
    providers: [...services],
    exports: [...services]
})
export class ServiceModule {
}
