import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Logger, Param, Post, Put} from '@nestjs/common';
import {map, Observable} from "rxjs";
import {ApiConsumes, ApiOperation, ApiTags} from "@nestjs/swagger";
import {IIngredientService} from "../services/iingredient.service";
import {IngredientDto} from "../dto/ingredient.dto";
import {IngredientMapper} from "../mappers/ingredient.mapper";


@ApiTags('Ingredient Controller')
@Controller('ingredient')
export class IngredientController {
    constructor(@Inject(IIngredientService) private readonly ingredientService: IIngredientService, private readonly ingredientMapper: IngredientMapper) {
    }

    @Get()
    getAll(): Observable<IngredientDto[]> {
        Logger.log('GET ALL INGREDIENT')
        return this.ingredientService.getAll().pipe(
            map((ingredients) => this.ingredientMapper.allToDto(ingredients))
        );
    }

    @Get('/:uuid')
    get(@Param('uuid') uuid: string): Observable<IngredientDto> {
        Logger.log(`GET INGREDIENT ${uuid}`)
        return this.ingredientService.get(uuid).pipe(
            map((ingredient) => this.ingredientMapper.toDto(ingredient))
        );
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiConsumes('application/json')
    @ApiOperation(
        {summary: 'Create a new ingredient', description: 'Create an ingredient'}
    )
    public post(@Body() ingredient: IngredientDto): Observable<IngredientDto> {
        Logger.log('POST INGREDIENT')
        return this.ingredientService.create(this.ingredientMapper.toEntity(ingredient)).pipe(
            map((ingredient) => this.ingredientMapper.toDto(ingredient))
        )
    }

    @Put('/:uuid')
    put(@Param('uuid') uuid: string, @Body() ingredient: IngredientDto): Observable<IngredientDto> {
        Logger.log(`PUT INGREDIENT ${uuid}`)
        return this.ingredientService.update(this.ingredientMapper.toEntity(ingredient)).pipe(
            map((ingredient) => this.ingredientMapper.toDto(ingredient))
        );
    }

    @Delete('/:uuid')
    delete(@Param('uuid') uuid: string): Observable<void> {
        Logger.log(`DELETE INGREDIENT ${uuid}`)
        return this.ingredientService.delete(uuid);
    }
}
