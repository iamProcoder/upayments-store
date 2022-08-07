import axiosAuth from '../helpers/AxiosInterceptor';
import { Product } from '../types/ProductModel'

const url: string = process.env.REACT_APP_API_URL;
export const ProductList = async (filterParams: string) => {
    const { data } = await axiosAuth.get<Product[]>(`${url}/api/products`);
    return data;
}

export const ProductById = async (id: string) => {
    const { data } = await axiosAuth.get(`${url}/api/products/${id}`);
    return data;
}

export const AddProduct = async (product: Product) => {
    const { data } = await axiosAuth.post<Product>(`${url}/api/products`, { ...product });
    debugger;
    return data;
}

//---Removed because there is no delete in the new api----
// export const DeleteProduct = async (id: string) => {
//     const { data } = await axios.delete<Product>(`${url}/products/${id}`);
//     return data;
// }