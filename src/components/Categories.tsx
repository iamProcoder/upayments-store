import { useAppDispatch } from '../redux/hooks';
import { selectedCategory } from '../redux/filter/filterSlice'

import { useQuery } from "react-query";
import { CategoryList } from '../services/category.service'
import { Category } from '../types/CategoryModel';

const Categories = () => {
  const dispatch = useAppDispatch();
  
  const { isLoading, isError, data } = useQuery<any>("categories", CategoryList);

  if (isLoading) return <p>"Loading..."</p>;
  if (isError) return <p>Error!</p>;

  const handleChange = (e: React.ChangeEvent<{value: string}>) => {
    const sValue: string = e.target.value;
    dispatch(selectedCategory(sValue))
  }

  return (
    <div className="relative inline-block text-left w-80">
      <select onChange={handleChange} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
        <option value="-1">Categories</option>
        {data &&
          data.categories.map((cat: any) => (
            <option
              key={cat._id}
              value={cat.name}
              className="text-gray-500 px-4 py-3 text-base"              
            >
              {cat.name} 
            </option>
          ))}
      </select>
    </div>
  );
}

export default Categories