import { Module } from '@nestjs/common';
import {RecipeController} from "./controllers/recipe.controller";
import {ServiceModule} from "./services/service.module";
import {DaoModule} from "./repositories/dao.module";
import {MapperModule} from "./mappers/mapper.module";

@Module({
  imports: [DaoModule, ServiceModule, MapperModule],
  controllers: [RecipeController],
})
export class AppModule {
}
