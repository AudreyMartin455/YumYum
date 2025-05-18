import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Inject,
    Logger,
    Param,
    Post,
    Put,
    Query
} from '@nestjs/common';
import {IRecipeService} from "../services/irecipe.service";
import {map, Observable} from "rxjs";
import {RecipeMapper} from "../mappers/recipe.mapper";
import {RecipeDto} from "../dto/recipe.dto";
import {ApiConsumes, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {DishesType} from "../entities/dishes.type";

@ApiTags('Recipe Controller')
@Controller('recipes')
export class RecipeController {
    constructor(@Inject(IRecipeService) private readonly recipeService: IRecipeService, private readonly recipeMapper: RecipeMapper) {
    }

    @Get()
    @ApiQuery({
        name: "type",
        required: false
    })
    getAll(@Query('type') type?: DishesType): Observable<RecipeDto[]> {
        Logger.log(`GET ALL RECIPES ${type}`)
        let filters: { type: DishesType };
        if (type != null) {
            filters = {type};
        }
        return this.recipeService.getAll(filters).pipe(
            map((recipes) => this.recipeMapper.allToDto(recipes))
        );
    }

    @Get('/:uuid')
    get(@Param('uuid') uuid: string): Observable<RecipeDto> {
        Logger.log(`GET RECIPE ${uuid}`)
        return this.recipeService.get(uuid).pipe(
            map((recipe) => this.recipeMapper.toDto(recipe))
        );
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiConsumes('application/json')
    @ApiOperation(
        {summary: 'Create a new recipe', description: 'Create a recipe'}
    )
    public post(@Body() recipe: RecipeDto): Observable<RecipeDto> {
        Logger.log('POST RECIPE')
        return this.recipeService.create(this.recipeMapper.toEntity(recipe)).pipe(
            map((recipe) => this.recipeMapper.toDto(recipe))
        )
    }

    @Put('/:uuid')
    patch(@Param('uuid') uuid: string, @Body() recipe: RecipeDto): Observable<RecipeDto> {
        Logger.log(`PUT RECIPE ${uuid}`)
        return this.recipeService.update(this.recipeMapper.toEntity(recipe)).pipe(
            map((recipe) => this.recipeMapper.toDto(recipe))
        );
    }

    @Delete('/:uuid')
    delete(@Param('uuid') uuid: string): Observable<void> {
        return this.recipeService.delete(uuid);
    }
}
