import axios, {AxiosResponse} from "axios";
import {Ingredient} from "~/stores/models/ingredient.model";

export const getIngredients = async (): Promise<AxiosResponse<Ingredient[]>> => {
    return await axios.get('http://localhost:3000/ingredient');
}

export const postIngredient = async (body: Ingredient): Promise<AxiosResponse<Ingredient>> => {
    return await axios.post('http://localhost:3000/ingredient', body);
}