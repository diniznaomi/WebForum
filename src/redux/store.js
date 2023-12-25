import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './Categories/categoriesReducer';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
})