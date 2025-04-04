"use client";

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav style={{ textAlign: 'center', margin: '20px 0' }}>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '0 15px' }}>
          <Link href="/Home">
            <span style={{ textDecoration: 'none', color: '#007bff', transition: 'color 0.3s', cursor: 'pointer' }}>Home</span>
          </Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link href="/cart">
            <span style={{ textDecoration: 'none', color: '#007bff', transition: 'color 0.3s', cursor: 'pointer' }}>Cart</span>
          </Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link href="/confirmation">
            <span style={{ textDecoration: 'none', color: '#007bff', transition: 'color 0.3s', cursor: 'pointer' }}>Confirmation</span>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        span:hover {
          color: #0056b3; /* Darker blue on hover */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
