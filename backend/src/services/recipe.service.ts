import {IRecipeService} from "./irecipe.service";
import {Injectable} from "@nestjs/common";
import {Observable, of} from "rxjs";
import {RecipeEntity} from "../entities/recipe.entity";
import {RecipeDao} from "../repositories/recipe.dao";

@Injectable()
export class RecipeService implements IRecipeService {

    constructor(private recipeDao: RecipeDao) {
    }
    getAll(filters?: {[key:string]:any}): Observable<RecipeEntity[]> {
        return this.recipeDao.getAllRecipe(filters);
    }

    create(recipe: RecipeEntity): Observable<RecipeEntity> {
        return this.recipeDao.createRecipe(recipe);
    }
    
}