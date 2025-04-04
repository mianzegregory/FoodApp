"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";  
import { removeItem } from "../redux/cartSlice"; 
import Link from "next/link";

// Define types for cart items
interface CartItem {
  id: number; 
  price: number; 
  count: number; 
  imagePath: string;
}

// Checkout component that displays items and payment options
const Checkout: React.FC = () => {
  const cartItems: CartItem[] = useAppSelector((state) => state.cart.items); 
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.count), 0);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cartContainer">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(({ id, count, price, imagePath }) => (
            <div key={id} className="cartItem">
              <img src={imagePath} alt={id.toString()} />
              <p>{id}</p>
              <p>Quantity: {count}</p>
              <p>Total Price: sh{price * count}</p>
              <button onClick={() => handleRemoveItem(id)}>Remove</button>
            </div>
          ))}
          <h3>Total Price: sh{totalPrice}</h3>
        </div>
      )}
      <div className="paymentMethod">
        <h3>Select Payment Method</h3>
        <label>
          <input type="radio" name="paymentMethod" value="card" />
          Card
        </label>
        <label>
          <input type="radio" name="paymentMethod" value="mpesa" />
          MPesa
        </label>
      </div>
      <div className="goToConfirmationButton">
        <Link href="/confirmation">
          <button>Proceed to Payment</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
