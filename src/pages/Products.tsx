import { Fragment, FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom'
import { useQuery } from "react-query";
import { PlusCircleIcon } from '@heroicons/react/solid'

import { ProductList } from '../services/product.service'
import { Product } from '../types/ProductModel';

import ProductItem from '../components/ProductItem';
import Filter from '../components/Filter'

import { useAppSelector } from '../redux/hooks';
import { searchValue, selectValue } from '../redux/filter/filterSlice';

const Products: FC<{}> = (): ReactElement => { 
  const navigate = useNavigate();
  const selected = useAppSelector<string>(selectValue);
  const search = useAppSelector<string>(searchValue);

  const filterItem: string = selected !== '-1' ? selected : '' || search !== '' ? search : '';
  const { isLoading, isError, data } = useQuery<Product[]>(["products"], () => ProductList(filterItem), {
    select: (products: Product[]) => products.filter(product => {
        return product['category']?.toLowerCase().includes(filterItem.toLowerCase()) || product['name']?.toLowerCase().includes(filterItem.toLowerCase());
    })
  });
  if (isLoading) return <p>"Loading..."</p>;
  if (isError) return <p>Error!</p>;

  return (
    <>
      <Filter />
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data &&
          data.map((p: Product) => (
            <Fragment key={p.id}>
              <ProductItem {...p} />
            </Fragment>
          ))}
      </div>
      <div className="flex justify-end items-start hover:cursor-pointer" onClick={() => navigate('/add-product')}>
        <PlusCircleIcon className=" h-20 w-20 text-black" />
      </div>
      
    </>
  );
}

export default Products