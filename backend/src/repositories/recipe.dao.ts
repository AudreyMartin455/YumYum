import {Injectable, Logger} from "@nestjs/common";
import {RecipeEntity} from "../entities/recipe.entity";
import {AbstractDao} from "./abstract.dao";
import {Observable} from "rxjs";

@Injectable()
export class RecipeDao extends AbstractDao<RecipeEntity>{

    constructor() {
        super('recipe');
    }

    public getAllRecipe(filters: {[key:string]:any}): Observable<RecipeEntity[]> {
        if(filters != null){
            return this.findAllByFilters(filters)
        }
        return this.findAll();
    }

    public getRecipe(uuid:string): Observable<RecipeEntity> {
        return this.findByUuid(uuid);
    }

    public createRecipe(recipe: RecipeEntity): Observable<RecipeEntity> {
        return this.create(recipe)
    }

    public deleteRecipe(uuid: string): Observable<void> {
        return this.delete(uuid) as Observable<void>;
    }
}