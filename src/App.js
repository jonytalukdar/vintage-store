import React from 'react';
import { Switch, Route } from 'react-router-dom';

//pages
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductsDetails from './pages/ProductDetails';

import Header from './components/Header';
import Alert from './components/Alert';
import PrivateRoute from './components/PrivateRoute';
import ScrollButton from './components/ScrollButton';
//component
const App = () => {
  return (
    <>
      <Header />
      <Alert />
      <ScrollButton />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={ProductsDetails} />
        <Route path="/login" component={Login} />
        {/* <PrivateRoute path="/checkout" component={Checkout} /> */}
        <PrivateRoute path="/checkout">
          <Checkout />
        </PrivateRoute>
        <Route exact path="*" component={Error} />
      </Switch>
    </>
  );
};

export default App;
