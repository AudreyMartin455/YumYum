import {Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {IRecipeService} from "../services/irecipe.service";
import {Observable} from "rxjs";

@Controller('recipe')
export class RecipeController {
  constructor(@Inject(IRecipeService) private readonly recipeService: IRecipeService) {}

  @Get()
  getAll(): Observable<String> {
    return this.recipeService.getAll();
  }

  @Get('/:uuid')
  get(@Param('uuid') uuid: string): Observable<String> {
    return this.recipeService.getAll();
  }

  @Post()
  post(): Observable<String> {
    return this.recipeService.getAll();
  }

  @Patch('/:uuid')
  patch(@Param('uuid') uuid: string): Observable<String> {
    return this.recipeService.getAll();
  }

  @Delete('/:uuid')
  delete(@Param('uuid') uuid: string): Observable<void> {
    return;
  }
}
