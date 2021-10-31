import React, { useContext } from 'react';
import { ProductContext } from '../../context/products-context';
import ProductList from './ProductList';

const PageProducts = () => {
  const { sorted, page, changePage } = useContext(ProductContext);

  if (sorted[page]) {
    return (
      <>
        <ProductList products={sorted[page]} />;
        {sorted.length > 1 && (
          <article className="pagination-buttons">
            {sorted.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => changePage(index)}
                  className={`page-btn ${page === index && 'page-btn-current'}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </article>
        )}
      </>
    );
  } else {
    return (
      <h3 className="search-errors">
        Unfortunately your search query did not find any product
      </h3>
    );
  }
};

export default PageProducts;
