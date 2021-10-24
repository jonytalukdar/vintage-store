import React, { createContext, useEffect, useState } from 'react';

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
  const [cart, setCart] = useState(getCartFormLocalStorage());
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
    const removedCartItem = [...cart].filter((item) => item.id !== id);
    setCart(removedCartItem);
  };

  //  Increase amount
  const increaseAmountHandler = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newCart);
  };

  // decrease item
  const decreaseAmountHandler = (id, amount) => {
    if (amount === 1) {
      removeItemHandler(id);
      return;
    } else {
      const newCart = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setCart(newCart);
    }
  };

  //  add cart
  const addToCartHandler = (product) => {
    const { id, title, image: url, price } = product;

    const item = [...cart].find((item) => item.id === id);
    if (item) {
      increaseAmountHandler(id);
      return;
    } else {
      const newItem = { id, title, image: url.url, price, amount: 1 };
      const newCart = [...cart, { ...newItem }];
      setCart(newCart);
    }
  };

  //  clear cart
  const clearCartHandler = () => {
    setCart([]);
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
