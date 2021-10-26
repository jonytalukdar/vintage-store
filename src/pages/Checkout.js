import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../context/cart-context';
import { UserContext } from '../context/user-context';
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements';
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section form">
      <h2 className="section-title">Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3>
          order total : <span>{total}</span>
        </h3>
        {/* single input */}
        <div className="form-control">
          <label htmlFor="name">name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* end single input */}
        {/* card element */}
        <div className="stripe-element">
          <label htmlFor="card-element">Debit or Credit Card</label>
          <p className="stripe-info">
            Test using this card : <span>4242 4242 4242 4242</span>
            <br />
            enter 5 digits for zip code
            <br />
            enter any 3 digits for CVC
          </p>
        </div>
        {/* end card element */}

        {/* stripe element */}
        <CardElement className="card-element"></CardElement>
        {error && <p className="form-empty">{error}</p>}
        {/* empty value */}
        {isEmpty ? (
          <p className="form-empty">Please fill out all input</p>
        ) : (
          <button className="btn btn-primary btn-block">Submit</button>
        )}

        {/* end stripe element */}
      </form>
    </section>
  );
};

const CardForm = injectStripe(Checkout);

const StripeWrapper = () => {
  return (
    <StripeProvider apiKey="pk_test_51IejRfD0bRJfEs6TtIuwOYhg7gnqkkab83AkaDvidJmlHLNYoQWdrZfE4Y3gYPA8s7rbEk79jdAUBgEtynO283gH00Fbu9VLEq">
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};

export default StripeWrapper;
