
interface CartState {
  cartItems: Record<string, number>;
}

const initialState: CartState = {
  cartItems: {},
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.payload]: (state.cartItems[action.payload] || 0) + 1,
        },
      };
    case REMOVE_ITEM:
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