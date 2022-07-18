import axios from 'axios';
import { Product } from '../types/ProductModel'

const url: string = process.env.REACT_APP_API_URL;
export const ProductList = async (filterParams: string) => {
    const { data } = await axios.get<Product[]>(`${url}/products`);
    return data;
}

export const ProductById = async (id: string) => {
    const { data } = await axios.get<Product>(`${url}/products/${id}`);
    return data;
}

export const AddProduct = async (product: Product) => {
    const { data } = await axios.post<Product>(`${url}/products`, { ...product });
    return data;
}

export const DeleteProduct = async (id: string) => {
    const { data } = await axios.delete<Product>(`${url}/products/${id}`);
    return data;
}