import { Module } from '@nestjs/common';
import {RecipeController} from "./controllers/recipe.controller";
import {RecipeService} from "./services/recipe.service";
import {IRecipeService} from "./services/irecipe.service";

@Module({
  imports: [],
  controllers: [RecipeController],
  providers: [{
    provide: IRecipeService,
    useClass: RecipeService
  }],
})
export class AppModule {}
