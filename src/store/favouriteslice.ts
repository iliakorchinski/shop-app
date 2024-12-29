import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/ProductsType';
import type { RootState } from '.';

interface Favourites {
  favourites: Product[];
  like: boolean;
}

const initialState: Favourites = {
  favourites: JSON.parse(localStorage.getItem('favourites') || '[]'),
  like: false,
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourites: (state, action) => {
      const newFavourites: Product = action.payload;
      const existingFavourites = state.favourites.find(
        (product) => product.id === newFavourites.id
      );
      if (!existingFavourites) {
        state.like = true;
        state.favourites.push({
          id: newFavourites.id,
          brand: newFavourites.brand,
          category: newFavourites.category,
          description: newFavourites.description,
          price: newFavourites.price,
          images: newFavourites.images,
          title: newFavourites.title,
          isLiked: state.like,
        });
      } else {
        state.like = false;
        state.favourites = state.favourites.filter(
          (product) => product.id !== existingFavourites.id
        );

        // state.favourites.forEach((product) => {
        //   if (product.id === existingFavourites.id) {
        //     product.isLiked = false;
        //   }
        // });
      }
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
  },
});

export const { toggleFavourites } = favouritesSlice.actions;
export const selectFavourites = (state: RootState) =>
  state.favourites.favourites;

const favouritesReducer = favouritesSlice.reducer;

export default favouritesReducer;
