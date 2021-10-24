import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import EmptyCart from '../components/Cart/EmptyCart';
import CartItem from '../components/Cart/CartItem';
import { Link } from 'react-router-dom';
// import {UserContext} from '../context/user-context'

export default function Cart() {
  let user = false;
  const { cart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="cart cart-items">
      <h2>Your Cart</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} cart={item} />;
      })}
      <h2>Total $ : {total}</h2>
      {user ? (
        <Link to="/checkout" className="btn btn-primary btn-block">
          checkout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-primary btn-block">
          login
        </Link>
      )}
    </section>
  );
}
