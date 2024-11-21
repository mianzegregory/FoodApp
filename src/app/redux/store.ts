
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: true,
      serializableCheck: false,
      actionCreatorCheck: true,
    }),
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;