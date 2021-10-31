import React, { useContext } from 'react';
import { ProductContext } from '../../context/products-context';
import ProductList from './ProductList';

const PageProducts = () => {
  const { sorted, page, changePage } = useContext(ProductContext);

  return <ProductList products={sorted} />;
};

export default PageProducts;
