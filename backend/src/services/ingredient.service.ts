import {Injectable} from "@nestjs/common";
import {Observable} from "rxjs";
import {IIngredientService} from "./iingredient.service";
import {IngredientDao} from "../repositories/ingredient.dao";
import {IngredientEntity} from "../entities/ingredient.entity";

@Injectable()
export class IngredientService implements IIngredientService {

    constructor(private ingredientDao: IngredientDao) {
    }

    getAll(filters?: { [key: string]: any }): Observable<IngredientEntity[]> {
        return this.ingredientDao.getAllIngredient(filters);
    }

    get(uuid: string): Observable<IngredientEntity> {
        return this.ingredientDao.getIngredient(uuid);
    }

    create(recipe: IngredientEntity): Observable<IngredientEntity> {
        return this.ingredientDao.createIngredient(recipe);
    }

    delete(uuid: string): Observable<void> {
        return this.ingredientDao.deleteIngredient(uuid);
    }
}