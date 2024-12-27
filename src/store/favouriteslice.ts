import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/ProductsType';
import type { RootState } from '.';

interface Favourites {
  favourites: Product[];
}

const initialState: Favourites = {
  favourites: JSON.parse(localStorage.getItem('favourites') || '[]'),
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const newFavourites: Product = action.payload;
      const existingFavourites = state.favourites.find(
        (product) => product.id === newFavourites.id
      );
      if (!existingFavourites) {
        state.favourites.push({
          id: newFavourites.id,
          brand: newFavourites.brand,
          category: newFavourites.category,
          description: newFavourites.description,
          price: newFavourites.price,
          images: newFavourites.images,
          title: newFavourites.title,
        });
        localStorage.setItem('favourites', JSON.stringify(state.favourites));
      }
    },
  },
});

export const { addToFavourites } = favouritesSlice.actions;
export const selectFavourites = (state: RootState) =>
  state.favourites.favourites;

const favouritesReducer = favouritesSlice.reducer;

export default favouritesReducer;
