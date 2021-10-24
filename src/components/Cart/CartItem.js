import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const CartItem = ({ cart }) => {
  const { id, image, title, price, amount } = cart;
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => console.log('cart removed')}
        >
          remove
        </button>
      </div>
      <div>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => console.log('increase')}
        >
          <FaAngleUp />
        </button>
        <p className="cart-amount">{amount}</p>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => console.log('decrease')}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
