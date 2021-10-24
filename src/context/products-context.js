import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL';
import { featuredProducts } from '../utils/helpers';

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

  console.log(featured);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      setProducts(response.data);
      const featured = featuredProducts(response.data);
      setFeatured(featured);
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
