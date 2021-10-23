import { createContext, useState } from 'react';

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
