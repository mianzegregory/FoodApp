"use client"

interface CartState {
  cartItems: Record<string, number>;
}

const initialState: CartState = {
  cartItems: {},
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'addItem':
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.payload]: (state.cartItems[action.payload] || 0) + 1,
        },
      };
    case 'removeItem':
      const { [action.payload]: _, ...newCartItems } = state.cartItems;
      return {
        ...state,
        cartItems: newCartItems,
      };
    default:
      return state;
  }
};

export default cartReducer;