import {ConflictException, Injectable} from "@nestjs/common";
import {EMPTY, forkJoin, map, mergeMap, Observable, of} from "rxjs";
import {IIngredientService} from "./iingredient.service";
import {IngredientDao} from "../repositories/ingredient.dao";
import {IngredientEntity} from "../entities/ingredient.entity";
import {RecipeDao} from "../repositories/recipe.dao";

@Injectable()
export class IngredientService implements IIngredientService {

    constructor(private ingredientDao: IngredientDao, private recipeDao: RecipeDao) {
    }

    update(ingredient: IngredientEntity): Observable<IngredientEntity> {
        return this.ingredientDao.updateIngredient(ingredient).pipe(
            mergeMap(() => {
                return this.recipeDao.getAllRecipe({"amountIngredients.ingredient.uuid": ingredient.uuid})
            }),
            mergeMap(recipes => {
                if (recipes.length === 0) return of(EMPTY);
                const observables = recipes.map(recipe => this.recipeDao.updateRecipe({
                    ...recipe,
                    amountIngredients: recipe.amountIngredients.map(amount => amount.ingredient.uuid === ingredient.uuid ? {
                        ...amount,
                        ingredient
                    } : amount)
                }))
                return forkJoin(observables);
            }),
            map(() => ingredient)
        );
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
        return this.recipeDao.getAllRecipe().pipe(
            mergeMap((recipe) => {
                const ingredientUsed = recipe.some(recipe => recipe.amountIngredients.some(amount => amount.ingredient.uuid === uuid))
                if (ingredientUsed) {
                    throw new ConflictException('Ingredient is used in at least one recipe')
                }
                return this.ingredientDao.deleteIngredient(uuid);
            })
        )
    }
}