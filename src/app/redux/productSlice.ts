import { createSlice } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string; 
}

interface ProductState {
  products: Product[];
}


const image = {
  apple: '/images/apple.jpg',
  avocado: '/images/avacado.jpg',
  burger: '/images/burger.jpg',
  hotdog: '/images/hotdog.jpg',
  melon: '/images/melon.jpg',
  pizza: '/images/pizaa.jpg',
  salad: '/images/salad.jpg',
};

const initialState: ProductState = {
  products: [
    { id: 1, name: 'Apple', price: 50, image: image.apple }, 
    { id: 2, name: 'Avacado', price: 30, image: image.avocado }, 
    { id: 3, name: 'Burger', price: 80, image: image.burger },
    { id: 4, name: 'Hotdog', price: 100, image: image.hotdog },
    { id: 5, name: 'Melon', price: 120, image: image.melon },
    { id: 6, name: 'Pizaa', price: 800, image: image.pizza }, 
    { id: 7, name: 'Salad', price: 50, image: image.salad },
  ],
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  
  },
});

export default productSlice.reducer;

export const selectProducts = (state: { products: ProductState }) => state.products.products;