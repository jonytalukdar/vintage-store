import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../context/cart-context';
import { UserContext } from '../context/user-context';
import EmptyCart from '../components/Cart/EmptyCart';

//strapi elements
import submitOrder from '../strapi/submitOrder';

const Checkout = (props) => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user, alert, showAlert, hideAlert } = useContext(UserContext);
  const history = useHistory();

  // state values
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  let isEmpty = !name || alert.show;

  if (cart.length < 1) {
    return <EmptyCart />;
  }

  return <div></div>;
};

export default Checkout;
