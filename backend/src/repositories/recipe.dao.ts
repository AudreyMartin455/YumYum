import {Injectable} from "@nestjs/common";
import {RecipeEntity} from "../entities/recipe.entity";
import {AbstractDao} from "./abstract.dao";
import {Observable} from "rxjs";

@Injectable()
export class RecipeDao extends AbstractDao<RecipeEntity>{

    constructor() {
        super('recipe');
    }
    public createRecipe(recipe: RecipeEntity): Observable<RecipeEntity> {
        return this.create(recipe)
    }
}