import axiosAuth from '../helpers/AxiosInterceptor';
import { Category } from '../types/CategoryModel'

const url: string = process.env.REACT_APP_API_URL;
export const CategoryList = async () => {
    const { data } = await axiosAuth.get<Category[]>(`${url}/api/categories`);
    return data;
}
export const CategoryById = async (id: string) => {
    const { data } = await axiosAuth.get<Category>(`${url}/api/categories/${id}`);
    return data;
}