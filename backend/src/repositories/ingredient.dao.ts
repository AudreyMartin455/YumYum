import {Injectable} from "@nestjs/common";
import {AbstractDao} from "./abstract.dao";
import {Observable} from "rxjs";
import {IngredientEntity} from "../entities/ingredient.entity";

@Injectable()
export class IngredientDao extends AbstractDao<IngredientEntity> {

    constructor() {
        super('ingredient');
    }

    public getAllIngredient(filters: { [key: string]: any }): Observable<IngredientEntity[]> {
        if (filters != null) {
            return this.findAllByFilters(filters)
        }
        return this.findAll();
    }

    public getIngredient(uuid: string): Observable<IngredientEntity> {
        return this.findByUuid(uuid);
    }

    public createIngredient(recipe: IngredientEntity): Observable<IngredientEntity> {
        return this.create(recipe)
    }

    public deleteIngredient(uuid: string): Observable<void> {
        return this.delete(uuid) as Observable<void>;
    }
}