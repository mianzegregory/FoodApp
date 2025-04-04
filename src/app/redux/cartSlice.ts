"use client"

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  count: number;
  price: number;
  imagePath: string;
  itemName: string; // Added itemName to the CartItem interface
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += action.payload.count;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItemCount: (state, action: PayloadAction<{ id: number; count: number }>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count = action.payload.count;
      }
    },
  },
});

export const { addItem, removeItem, updateItemCount } = cartSlice.actions;
export default cartSlice.reducer;
