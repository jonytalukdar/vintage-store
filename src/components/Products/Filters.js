import React, { useContext } from 'react';
import { ProductContext } from '../../context/products-context';

const Filters = () => {
  const {
    filters: { search, category, shipping, price },
    updateFilters,
    sorted,
  } = useContext(ProductContext);
  return (
    <section className="filters-section">
      <h2 className="section-title">Search Products</h2>
      <form className="filters-form">
        <div>
          {/* input  */}
          <div className="form-group">
            <label htmlFor="search">Search</label>
            <input
              className="form-control"
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={updateFilters}
            />
          </div>
          {/* end input */}
          {/* select category input */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="form-control"
              value={category}
              onChange={updateFilters}
            >
              <option value="all">all</option>
              <option value="phone">Phone</option>
              <option value="computer">Computer</option>
              <option value="radio">Radio</option>
            </select>
          </div>
          {/* end category select */}
          {/* shipping input */}
          <div className="form-group">
            <input
              type="checkbox"
              id="shipping"
              name="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor="shipping">Free Shipping</label>
          </div>
          {/* end of shipping input */}
        </div>
        <div className="price-group">
          <p>Price</p>
          <label htmlFor="price">
            <input
              type="radio"
              name="price"
              value="all"
              checked={price === 'all'}
              onChange={updateFilters}
            />
            all
          </label>
          <label htmlFor="price">
            <input
              type="radio"
              name="price"
              value="0"
              checked={price === 0}
              onChange={updateFilters}
            />
            $0 - $300
          </label>
          <label htmlFor="price">
            <input
              type="radio"
              name="price"
              value="300"
              checked={price === 300}
              onChange={updateFilters}
            />
            $300 - $650
          </label>
          <label htmlFor="price">
            <input
              type="radio"
              name="price"
              value="650"
              checked={price === 650}
              onChange={updateFilters}
            />
            $650 - $1000
          </label>
        </div>
      </form>
      <h6>Total Products : {sorted.flat().length}</h6>
    </section>
  );
};

export default Filters;
