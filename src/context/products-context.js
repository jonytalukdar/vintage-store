import { createContext } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const context = {};

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
