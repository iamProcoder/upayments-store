import axios from 'axios';
import { Category } from '../types/CategoryModel'

const url: string = process.env.REACT_APP_API_URL;
export const CategoryList = async () => {
    const { data } = await axios.get<Category[]>(`${url}/categories`);
    return data;
}
export const CategoryById = async (id: string) => {
    const { data } = await axios.get<Category>(`${url}/categories/${id}`);
    return data;
}