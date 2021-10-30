import React, { createContext, useEffect, useReducer, useState } from 'react';
import { reducer } from './reducer';
export const CartContext = createContext({
  // for auto suggession
  cart: [],
  total: 0,
  cartItems: 0,
  removeItem: (id) => {},
  increase: (id) => {},
  decrease: (id) => {},
  addToCart: (product) => {},
  clearCart: () => {},
});

const getCartFormLocalStorage = () => {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, getCartFormLocalStorage());
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    //local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    //cart Items
    let newItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newItems);

    //totolPrice
    let newTotalPrice = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotalPrice = parseFloat(newTotalPrice.toFixed(2));
    setTotal(newTotalPrice);
  }, [cart]);

  // remove item
  const removeItemHandler = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  //  Increase amount
  const increaseAmountHandler = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  // decrease item
  const decreaseAmountHandler = (id, amount) => {
    if (amount === 1) {
      dispatch({ type: 'REMOVE', payload: id });
      return;
    } else {
      dispatch({ type: 'DECREASE', payload: id });
    }
  };

  //  add cart
  const addToCartHandler = (product) => {
    let item = [...cart].find((item) => item.id === product.id);
    if (item) {
      dispatch({ type: 'INCREASE', payload: product.id });
      return;
    } else {
      dispatch({ type: 'ADDTOCART', payload: product });
    }
  };

  //  clear cart
  const clearCartHandler = () => {
    dispatch({ type: 'CLEARCART' });
  };

  const context = {
    cart,
    total,
    cartItems,
    removeItem: removeItemHandler,
    increase: increaseAmountHandler,
    decrease: decreaseAmountHandler,
    addToCart: addToCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
