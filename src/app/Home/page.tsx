"use client";

import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { addItem, removeItem } from '../redux/cartSlice';
import { selectProducts } from '../redux/productSlice';

import '../APP.css';
import { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const products = useAppSelector(selectProducts);
  const [showCart, setShowCart] = React.useState(false);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const handleButtonClick = (productName: string) => {
    const product = products.find((p) => p.name === productName);
    if (product) {
    
      dispatch(addItem({ itemName: productName, imagePath: product.image, price: product.price }));
    }
  };

 
// where my outline start conatins the outer part of the code and the add to cart button
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Foodstore</h1>
        <div className="Cart">
          
          <Link href="/cart">
            <button onClick={handleToggleCart}>
              <img src="cart.png" alt="cart" />
              {Object.keys(cartItems).length}
            </button>
          </Link>
        </div>
      </header>
      <div className="banner">
        <div className="customShape">
          <h2>Fresh Produce</h2>
        </div>
      </div>

      <main className="mainContent">
        <h2>Shop Our Products</h2>
        <p>Explore a wide range of fresh fruits, vegetables, and snacks.</p>
     
        <div className="productContainer">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p className="text">{product.name} - sh{product.price}</p>
              <div className="buttontake">
                <button onClick={() => handleButtonClick(product.name)}>Take Item</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 jefgreg Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
