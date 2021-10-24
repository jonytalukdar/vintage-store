import React, { createContext, useEffect, useState } from 'react';
import localCart from '../utils/localCart';

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

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(localCart);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    //local storage

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
    const removedCartItem = [...cart].filter((item) => item.id !== id);
    setCart(removedCartItem);
  };

  //  Increase amount
  const increaseAmountHandler = (id) => {};

  // decrease item
  const decreaseAmountHandler = (id) => {};

  //  add cart
  const addToCartHandler = (product) => {};

  //  clear cart
  const clearCartHandler = () => {};

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
