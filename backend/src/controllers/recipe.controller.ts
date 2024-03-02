import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Patch, Post} from '@nestjs/common';
import {IRecipeService} from "../services/irecipe.service";
import {map, Observable} from "rxjs";
import {RecipeMapper} from "../mappers/recipe.mapper";
import {RecipeDto} from "../dto/recipe.dto";
import {ApiBody, ApiConsumes, ApiOperation, ApiTags} from "@nestjs/swagger";
import {SchemaObjectFactory} from "@nestjs/swagger/dist/services/schema-object-factory";

@ApiTags('Recipe Controller')
@Controller('recipe')
export class RecipeController {
    constructor(@Inject(IRecipeService) private readonly recipeService: IRecipeService, private readonly recipeMapper: RecipeMapper) {
    }

    @Get()
    getAll(): Observable<String> {
        return this.recipeService.getAll();
    }

    @Get('/:uuid')
    get(@Param('uuid') uuid: string): Observable<String> {
        return this.recipeService.getAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiConsumes('application/json')
    @ApiOperation(
        {summary: 'Create a new recipe', description: 'Create a recipe'}
    )
    public post(@Body() recipe: RecipeDto): Observable<RecipeDto> {
        return this.recipeService.create(this.recipeMapper.toEntity(recipe)).pipe(
            map((recipe) => this.recipeMapper.toDto(recipe))
        )
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
