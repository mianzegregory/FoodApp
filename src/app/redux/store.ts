
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'C:/Users/Smart/Desktop/app/nextjs-dashboard/app/state/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;