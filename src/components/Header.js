import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import logo from '../assets/logo.svg';
import { UserContext } from '../context/user-context';
import CartLink from './Cart/CartLink';
import LoginLink from './LoginLink';

const Header = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <header className="header">
      <img className="logo" src={logo} alt="Vintage Tech" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            {user.token && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </div>
          <div>
            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
