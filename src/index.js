import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import ProductProvider from './context/products-context';
import CartProvider from './context/cart-context';

ReactDOM.render(
  <Router>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </Router>,
  document.getElementById('root')
);
