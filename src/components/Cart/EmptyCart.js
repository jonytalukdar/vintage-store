import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <section className="section empty-cart">
      <h1>Empty Cart...</h1>
      <Link to="/products" className="btn btn-primary">
        Fill It
      </Link>
    </section>
  );
};

export default EmptyCart;
