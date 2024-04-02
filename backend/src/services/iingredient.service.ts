import {Observable} from "rxjs";
import {RecipeEntity} from "../entities/recipe.entity";
import {IngredientEntity} from "../entities/ingredient.entity";

export interface IIngredientService {
    getAll(filters?: {[key:string]:any}): Observable<IngredientEntity[]>;
    get(uuid: string): Observable<IngredientEntity>;
    create(ingredient: IngredientEntity): Observable<IngredientEntity>;
    delete(uuid: string): Observable<void>;
}


export const IIngredientService = Symbol("IIngredientService");