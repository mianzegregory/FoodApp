"use client"

import React from "react";
import { useAppSelector } from "../redux/hooks";  
import Link from "next/link";  

const Confirmation: React.FC = () => {

  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const itemsList = Object.entries(cartItems);  // Convert cart items from object to array

  // Calculate total amount
  const totalAmount = itemsList.reduce((total, [itemName, { count, price }]) => {
    return total + price * count;
  }, 0);

  return (
    <div className="confirmationContainer">
      <h2>Order Confirmation</h2>

      {/* If the cart is empty, show a message to add items */}
      {itemsList.length === 0 ? (
        <p>Your cart is empty. Add items to your cart before checking out.</p>
      ) : (
        <div>
         
          <h3>Thank you for your purchase!</h3>

          {/* List all items in the cart */}
          <ul>
            {itemsList.map(([itemName, { count, price }]) => (
              <li key={itemName}>
                {itemName} - {count} x sh{price} = sh{count * price}  
              </li>
            ))}
          </ul>

          {/* Show total price */}
          <h3>Total Amount: sh{totalAmount}</h3>

          {/* Link to go back to the shopping page */}
          <Link href="/Home">Back to Shopping</Link>
        </div>
      )}
    </div>
  );
};

export default Confirmation;
