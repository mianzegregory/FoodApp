import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  count: number;
  imagePath: string; 
  price: number;
}
interface CartState {
  cartItems: Record<string,CartItem>; 
}

const initialState: CartState = {
  cartItems: {},
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add item in the carts
    addItem: (state, action: PayloadAction<{ itemName: string; imagePath: string; price: number}>) => {
      const { itemName, imagePath, price } = action.payload;

      if (state.cartItems[itemName]) {
        state.cartItems[itemName].count++;
      } else {
        state.cartItems[itemName] = { count: 1, imagePath, price };
      }
    },
// to remove item in the cart delete
    removeItem: (state, action: PayloadAction<string>) => {
      const itemName = action.payload;
      if (state.cartItems[itemName]) {
        delete state.cartItems[itemName];
      }
    },
  },
});


export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;


export const selectCartItems = (state: { cart: CartState }) => state.cart.cartItems;