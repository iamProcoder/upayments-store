import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface FilterState {
  selectedValue: string
  searchValue: string
}

const initialState: FilterState = {
    selectedValue: "-1",
    searchValue: ""
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    selectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedValue = action.payload
    },
    searchProduct: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
  },
})

export const { selectedCategory, searchProduct } = filterSlice.actions;

export const selectValue = (state: RootState) => state.filter.selectedValue;
export const searchValue = (state: RootState) => state.filter.searchValue;

export default filterSlice.reducer