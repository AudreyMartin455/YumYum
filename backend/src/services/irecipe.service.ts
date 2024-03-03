import {Observable} from "rxjs";
import {RecipeEntity} from "../entities/recipe.entity";

export interface IRecipeService {
    getAll(): Observable<RecipeEntity[]>;
    create(recipe: RecipeEntity): Observable<RecipeEntity>
}


export const IRecipeService = Symbol("IRecipeService");