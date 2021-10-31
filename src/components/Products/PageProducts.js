import React, { useContext } from 'react';
import { ProductContext } from '../../context/products-context';
import ProductList from './ProductList';

const PageProducts = () => {
  const { sorted, page, changePage } = useContext(ProductContext);

  if (sorted[page]) {
    return <ProductList products={sorted[0]} />;
  } else {
    return (
      <h3 className="search-errors">
        Unfortunately your search query did not find any product
      </h3>
    );
  }
};

export default PageProducts;
