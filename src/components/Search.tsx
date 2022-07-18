import React, { useState, useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks';
import { searchProduct } from '../redux/filter/filterSlice'

const Search = () => {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>('');
    useEffect(() => {
        dispatch(searchProduct(search));
    }, [search]);

    const handleSearchChange = (e: React.ChangeEvent<{value: string}>) => {    
        const sValue: string = e.target.value;
        if (sValue.length > 2) setSearch(sValue);
        
        if (sValue.length === 0) setSearch('');
    }

    return (
      <div className="relative inline-block text-left w-80">
        <input
          onChange={handleSearchChange}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
          type="text"
          placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        />
      </div>
    );
}

export default Search