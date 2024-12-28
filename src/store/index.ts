import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favouriteslice';
import allProductsReducer from './allProductsSlice';

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    products: allProductsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
