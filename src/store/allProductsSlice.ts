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

      if (state.products.length === 0) {
        state.products.push(...allProducts);
        localStorage.setItem('products', JSON.stringify(state.products));
      }
    },
    deleteProduct: (state, action) => {
      const selectedProduct: Product = action.payload;
      console.log(selectedProduct);
      state.products = state.products.filter(
        (product: Product) => product.id !== selectedProduct.id
      );
      localStorage.setItem('products', JSON.stringify(state.products));
    },
  },
});

export const { saveAllProducts, deleteProduct } = allProductsSlice.actions;

export const selectFavourites = (state: RootState) => state.products.products;

const allProductsReducer = allProductsSlice.reducer;

export default allProductsReducer;
