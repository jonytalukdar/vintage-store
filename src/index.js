import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import ProductProvider from './context/products-context';
import CartProvider from './context/cart-context';
import UserProvider from './context/user-context';

ReactDOM.render(
  <Router>
    <ProductProvider>
      <CartProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CartProvider>
    </ProductProvider>
  </Router>,
  document.getElementById('root')
);
