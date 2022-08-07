import { FC, useState } from 'react';
import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/solid'

import { useMutation, useQueryClient } from 'react-query'

// import { DeleteProduct } from '../services/product.service';
import { Product } from '../types/ProductModel';

const ProductItem: FC<Product> = (product: Product) => {

  //const queryClient = useQueryClient();
  // const mutation = useMutation(DeleteProduct, {
  //   onSuccess() {
  //     queryClient.invalidateQueries('products')
  //   }
  // })
  
  const [isHover, setHover] = useState<boolean>(false);
  const mouseOver = () => setHover(true);
  const mouseOut = () => setHover(false);

  // const deleteProduct = (id: string) => {
  //   try {
  //     mutation.mutate(id);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div
      className="relative max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-2 hover:transition-transform hover:opacity-70"
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      <Link to={`/product-detail/${product._id}`}>
        <img
          className="p-8 rounded-t-lg max-h-96 w-96"
          src={product.avatar}
          alt={product.name}
        />
        <div className="px-5 pb-2 flex justify-center">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </div>
      </Link>

      <div className="flex justify-center items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          <>$ {product.price}</>
        </span>
      </div>
      {/* <button
        type={'submit'}
        hidden={!isHover}
        className="text-white font-semibold bg-red-600 w-full h-14 p-1 rounded absolute bottom-0 left-0"
        onClick={() => deleteProduct(product.id)}
      >
        <TrashIcon className='m-auto text-white w-8 h-8' />
      </button> */}
    </div>
  );
}

export default ProductItem