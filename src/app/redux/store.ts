"use client"

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

// Exporting AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
