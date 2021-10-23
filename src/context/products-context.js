import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
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
    axios.get(`${url}/products`).then((data) => console.log(data));
    return () => {};
  }, []);

  const context = {
    loading,
    products,
    featured,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
