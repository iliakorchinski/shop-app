import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/ProductsType';
import type { RootState } from '.';

interface AllProducts {
  products: Product[];
}

const initialState: AllProducts = {
  products: JSON.parse(localStorage.getItem('products') || '[]'),
};

export const allProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    saveAllProducts: (state, action) => {
      const allProducts: Product[] = action.payload;
      if (state.products.length < 29) {
        state.products.push(...allProducts);
        localStorage.setItem('products', JSON.stringify(state.products));
      }
    },
  },
});

export const { saveAllProducts } = allProductsSlice.actions;

export const selectFavourites = (state: RootState) => state.products.products;

const allProductsReducer = allProductsSlice.reducer;

export default allProductsReducer;
