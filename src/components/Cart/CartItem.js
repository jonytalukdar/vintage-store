import React, { useContext } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { CartContext } from '../../context/cart-context';

const CartItem = ({ cart }) => {
  const { id, image, title, price, amount } = cart;
  const { removeItem } = useContext(CartContext);
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => removeItem(id)}
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
