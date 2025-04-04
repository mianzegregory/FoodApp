"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";  
import { removeItem } from "../redux/cartSlice"; 
import Link from "next/link"; // Added import for Link

// Define types for cart items
interface CartItem {
  id: number; // Ensure id is of type number
  price: number; 
  count: number; 
  imagePath: string;
}

// Cart component that displays items
const Cart: React.FC = () => {
  const cartItems: CartItem[] = useAppSelector((state) => state.cart.items); 
  const dispatch = useAppDispatch();

  return (
    <div className="cartContainer">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(({ id, count, price, imagePath }) => {
          const totalItemPrice = Number(price) * Number(count); 

          return (
            <div key={id} className="cartItem">
              <img src={imagePath} alt={id.toString()} />
              <p>{id}</p>
              <p>Quantity: {count}</p>
              <p>Total Price: sh{totalItemPrice}</p>
              <button onClick={() => dispatch(removeItem(id))}>Remove</button> {/* Delete button */}
            </div>
          );
        })
      )}
      {cartItems.length > 0 && (
        <div className="totalPrice">
          <h3>Total Price: sh{cartItems.reduce((acc, item) => acc + (item.price * item.count), 0)}</h3>
        </div>
      )}
      <div className="goToConfirmationButton">
        <Link href="/confirmation">
          <button>Go to Confirmation Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
