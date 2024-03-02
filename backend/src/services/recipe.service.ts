import {IRecipeService} from "./irecipe.service";
import {Injectable} from "@nestjs/common";
import {Observable, of} from "rxjs";

@Injectable()
export class RecipeService implements IRecipeService {
    getAll(): Observable<String> {
        return of("Hello");
    }
    
}