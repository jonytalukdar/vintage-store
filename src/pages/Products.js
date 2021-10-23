import React, { useContext } from 'react';
import { ProductContext } from '../context/products-context';
import ProductList from '../components/Products/ProductList'
import Loading from '../components/Loading'

export default function Products() {
  const { loading, products } = useContext(ProductContext);

  if(loading){
    return <Loading/>
  }

  return  <ProductList title="Our Products" products={products}/>
}
