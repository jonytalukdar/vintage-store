import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL';

export const ProductContext = createContext({
  // for auto suggessation
  loading: false,
  products: [],
  featured: [],
});

const ProductProvider = ({ children }) => {
  //state
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
    return () => {};
  }, []);

  const context = {
    loading: loading,
    products: products,
    featured: featured,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
