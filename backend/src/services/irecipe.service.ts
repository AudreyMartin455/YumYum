import {Observable} from "rxjs";
import {RecipeEntity} from "../entities/recipe.entity";

export interface IRecipeService {
    getAll(filters?: {[key:string]:any}): Observable<RecipeEntity[]>;
    get(uuid: string): Observable<RecipeEntity>;
    create(recipe: RecipeEntity): Observable<RecipeEntity>;
    delete(uuid: string): Observable<void>;
}


export const IRecipeService = Symbol("IRecipeService");