import {DishesType, Recipe} from "~/stores/models/recipe.model";
import axios, {AxiosResponse} from "axios";

// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const getRecipes = async (type: DishesType): Promise<AxiosResponse<Recipe[]>> => {
    return await axios.get('http://localhost:3000/recipe?type=' + type);
}

export const getRecipe = async (uuid: string): Promise<AxiosResponse<Recipe>> => {
    return await axios.get('http://localhost:3000/recipe/' + uuid);
}

export const postRecipe = async (body: Recipe): Promise<AxiosResponse<Recipe>> => {
    return await axios.post('http://localhost:3000/recipe', body);
}

export const updateRecipe = async (body: Recipe): Promise<AxiosResponse<Recipe>> => {
    return await axios.put(`http://localhost:3000/recipe/${body.uuid}`, body);
}

export const deleteRecipe = async (uuid: string): Promise<AxiosResponse<void>> => {
    return await axios.delete(`http://localhost:3000/recipe/${uuid}`);
}