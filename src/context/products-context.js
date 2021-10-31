import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../utils/URL';
import { featuredProducts, paginate } from '../utils/helpers';

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
      setSorted(paginate(response.data));
      const featured = featuredProducts(response.data);
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);

  useEffect(() => {
    let newProducts = [...products].sort((a, b) => a.price - b.price);

    setPage(0);
    setSorted(paginate(newProducts));
  }, [filters, products]);

  const changePage = (index) => {
    setPage(index);
  };

  const updateFilters = (e) => {
    const type = e.target.type;
    const filter = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    let filterValue;

    if (type === 'radio') {
      value === 'all' ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }

    setFilters({ ...filters, [filter]: filterValue });
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
