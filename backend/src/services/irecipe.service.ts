import {Observable} from "rxjs";

export interface IRecipeService {
    getAll(): Observable<String>
}


export const IRecipeService = Symbol("IRecipeService");