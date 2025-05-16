import axios, {AxiosResponse} from "axios";
import {Ingredient} from "~/stores/models/ingredient.model";

export const getIngredients = async (): Promise<AxiosResponse<Ingredient[]>> => {
    return await axios.get('http://localhost:3000/ingredient');
}

export const postIngredient = async (body: Ingredient): Promise<AxiosResponse<Ingredient>> => {
    return await axios.post('http://localhost:3000/ingredient', body);
}

export const putIngredient = async (body: Ingredient): Promise<AxiosResponse<Ingredient>> => {
    return await axios.put(`http://localhost:3000/ingredient/${body.uuid}`, body);
}

export const deleteIngredient = async (uuid: string): Promise<AxiosResponse<void>> => {
    return await axios.delete(`http://localhost:3000/ingredient/${uuid}`);
}