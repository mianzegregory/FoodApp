import { createSlice } from '@reduxjs/toolkit';
import productsData from '@/app/products.json'; 

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