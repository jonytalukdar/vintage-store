import React, { createContext, useEffect, useState } from 'react';

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
  height: 0,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: 'success',
  });
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener('scroll', () => {});
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
    height,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
