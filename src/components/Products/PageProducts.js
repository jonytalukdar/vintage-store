import React, { useContext } from 'react';
import { ProductContext } from '../../context/products-context';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import ProductList from './ProductList';

const PageProducts = () => {
  const { sorted, page, changePage } = useContext(ProductContext);

  if (sorted[page]) {
    return (
      <>
        <ProductList products={sorted[page]} />;
        {sorted.length > 1 && (
          <article className="pagination-buttons">
            {/* prev button */}
            {page > 0 && (
              <button
                className="prev-page-btn"
                onClick={() => changePage(page - 1)}
              >
                <FaAngleDoubleLeft />
              </button>
            )}
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
            {/* next button */}
            {page < sorted.length - 1 && (
              <button
                className="next-page-btn"
                onClick={() => changePage(page + 1)}
              >
                <FaAngleDoubleRight />
              </button>
            )}
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
