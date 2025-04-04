"use client"


import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../products.json'; // Corrected import statement

interface Product {
  id: number;
  name: string;
  price: number;
  image: string; 
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: productsData, 
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  
  },
});

export default productSlice.reducer;

export const selectProducts = (state: { products: ProductState }) => state.products.products;
