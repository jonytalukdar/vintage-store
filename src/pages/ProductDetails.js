import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import Loading from '../components/Loading';
import { CartContext } from '../context/cart-context';
import { ProductContext } from '../context/products-context';

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  const history = useHistory();

  const product = products.find((item) => item.id === parseInt(id));

  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image: { url },
      title,
      description,
      price,
    } = product;
    return (
      <section className="single-product">
        <img src={url} alt={title} className="single-product-image" />
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              addToCart(product);
              history.push('/cart');
            }}
          >
            add to cart
          </button>
        </article>
      </section>
    );
  }
};

export default ProductDetails;
