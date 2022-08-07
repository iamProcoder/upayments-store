import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import { ProductById } from '../services/product.service'

const ProductDetail = () => {

  const { id } = useParams<'id'>();
  const { isLoading, isError, data } = useQuery(["product", id], () => ProductById(id!));

  if (isLoading) return <p>"Loading..."</p>;
  if (isError) return <p>Error!</p>;

  const { product } = data;
  return (
    <div className="m-8 p-5">
      {data && (
        <>
          <div className="flex justify-start items-start">
            <img
              className="rounded-md border max-h-96 w-96"
              src={product?.avatar}
              alt={product?.name}
            />
            <div className="flex flex-col justify-between items-stretch gap-y-72 mx-6">
              <div className="text-4xl font-bold w-auto h-11">{product?.name}</div>

              <div className="text-2xl font-medium mt-5 text-gray-700 w-auto h-11">
                $ {product?.price}
              </div>
            </div>
          </div>
          <hr className="text-black my-4" />
          <span className="text-xl font-bold">Description</span>
          <div className="text-base text-gray-800 mt-5">
            {product?.description}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail