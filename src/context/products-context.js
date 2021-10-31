import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../utils/URL';
import { featuredProducts } from '../utils/helpers';

export const ProductContext = createContext({
  // for auto suggessation
  loading: false,
  products: [],
  featured: [],
  sorted: [],
  page: 0,
  filters: {},
  changePage: () => {},
  updateFilters: () => {},
});

const ProductProvider = ({ children }) => {
  //state
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  // some extra state for filter
  const [sorted, setSorted] = useState([]);
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    shipping: false,
    price: 'all',
  });

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      setProducts(response.data);
      setSorted(response.data);
      const featured = featuredProducts(response.data);
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);

  const changePage = (index) => {
    console.log(index);
  };

  const updateFilters = (e) => {
    console.log(e);
  };

  const context = {
    loading: loading,
    products: products,
    featured: featured,
    sorted,
    page,
    filters,
    changePage,
    updateFilters,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
