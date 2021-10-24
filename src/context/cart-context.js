import React, { createContext, useState } from 'react';
import localCart from '../utils/localCart';

export const CartContext = createContext({
  // for auto suggession
  cart: [],
  total: 0,
  cartItems: 0,
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(localCart);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  const context = {
    cart,
    total,
    cartItems,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
