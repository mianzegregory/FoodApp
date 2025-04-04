"use client"

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Corrected import statement
import './globals.css'; // Importing global CSS
import './APP.css'; // Importing APP CSS
import Navbar from './components/Navbar'; // Importing Navbar component

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar /> {/* Render the Navbar component */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
