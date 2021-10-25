import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';

/// get user from localStorage

const getUserFromLocalStorage = () => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { username: null, token: null };
};

export const UserContext = createContext({
  user: {},
  userLogin: (user) => {},
  userLogout: () => {},
  alert: {},
  showAlert: () => {},
  hideAlert: () => {},
});

const UserProvider = ({ children }) => {
  //   const [user, setUser] = useState({ username: null, token: null });
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [alert, setAlert] = useState({
    show: true,
    msg: '',
    type: 'success',
  });

  //login
  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  // logout
  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem('user');
  };

  // show alert
  const showAlert = ({ msg, type = 'success' }) => {
    setAlert({ show: true, msg, type });
  };

  //hide alert
  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };

  const context = {
    user,
    userLogin,
    userLogout,
    alert,
    showAlert,
    hideAlert,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
