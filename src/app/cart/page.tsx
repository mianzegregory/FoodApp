"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { removeItem } from "../redux/cartSlice";
import Link from "next/link";
// cart component that displays item
const Cart: React.FC = () => {
  // redux store from hooks
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();
// state where i handled the payment methods shown by stack overflow how to configrure payment
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mpesa'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [mpesaPin, setMpesaPin] = useState('');
  const [showMpesaPin, setShowMpesaPin] = useState(false); 
  // where the total price is created
  const totalPrice = Object.entries(cartItems).reduce((acc, [itemName, { price, count }]) => {
    return acc + (price * count);
  }, 0);
// Removal of item i tried using the window confirmation learnt from stack overflow
  const handleRemoveButtonClick = (itemName: string) => {
    const confirmRemove = window.confirm(`Are you sure you want to remove ${itemName} from your cart?`);
    if (confirmRemove) {
      dispatch(removeItem(itemName));
    }
  };

  // To choose either Mpesa or card
  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value as 'card' | 'mpesa');
    setShowMpesaPin(false);  
  };
// Submit card information
  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
  };
// Submit mpesa information
  const handleMpesaPinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  // Check if payment details are complete
  const isPaymentComplete = () => {
    if (paymentMethod === 'card') {
      return cardNumber && expiryDate && cvv;
    }
    if (paymentMethod === 'mpesa') {
      return mpesaPin;
    }
    return false;
  };

  return (
    <div className="cartContainer">
      <h2>Your Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        Object.entries(cartItems).map(([itemName, { count, price, imagePath }]) => {
          const totalItemPrice = price * count;

          return (
            <div key={itemName} className="cartItem">
              <img src={imagePath} alt={itemName} />
              <p>{itemName}</p>
              <p>Quantity: {count}</p>
              <p>Total Price: sh{totalItemPrice}</p>
              <button onClick={() => handleRemoveButtonClick(itemName)}>Remove</button>
            </div>
          );
        })
      )}
              {/*show total price has nothing eroor */}
      {Object.keys(cartItems).length > 0 && (
        <div className="totalPrice">
          <h3>Total Price: sh{totalPrice}</h3>
        </div>
      )}
{/*A radio buttons to choose*/}
      <div className="paymentMethod">
        <h3>Select Payment Method</h3>
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="card" 
            checked={paymentMethod === 'card'} 
            onChange={handlePaymentMethodChange}
          />
          Card
        </label>
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="mpesa" 
            checked={paymentMethod === 'mpesa'} 
            onChange={handlePaymentMethodChange}
          />
          MPesa
        </label>
      </div>
{/*Entering details for card*/}
      {paymentMethod === 'card' && (
        <div className="cardDetails">
          <h4>Enter Card Details</h4>
          <form onSubmit={handleCardSubmit}>
            <div>
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit Card</button>
          </form>
        </div>
      )}
{/*Entering details for Mpesa*/}
      {paymentMethod === 'mpesa' && (
        <div className="mpesaDetails">
          <h4>MPesa Payment</h4>
          <p>Please send the money to <b>+254 707664929</b></p>
          
          <button onClick={() => setShowMpesaPin(!showMpesaPin)}>
            {showMpesaPin ? 'Hide MPesa PIN' : 'Enter MPesa PIN'}
          </button>

          {showMpesaPin && (
            <form onSubmit={handleMpesaPinSubmit}>
              <div>
                <label htmlFor="mpesaPin">Enter MPesa PIN:</label>
                <input
                  type="password"
                  id="mpesaPin"
                  value={mpesaPin}
                  onChange={(e) => setMpesaPin(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit MPesa Pin</button>
            </form>
          )}
        </div>
      )}
{/*Button to Confirmation page*/}
      <div className="goToConfirmationButton">
        <Link href="/confirmation">
          <button disabled={!isPaymentComplete()}>Go to Confirmation Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
