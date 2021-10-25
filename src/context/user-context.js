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
});

const UserProvider = ({ children }) => {
  //   const [user, setUser] = useState({ username: null, token: null });
  const [user, setUser] = useState(getUserFromLocalStorage());

  console.log(user);

  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem('user');
  };

  const context = {
    user,
    userLogin,
    userLogout,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
