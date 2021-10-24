import React, { useContext } from 'react';
import ProductList from './ProductList';
import Loading from '../Loading';
import { ProductContext } from '../../context/products-context';

const FeaturedProducts = () => {
  const { loading, featured } = useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }

  return <ProductList title="Featured Products" products={featured} />;
};

export default FeaturedProducts;
