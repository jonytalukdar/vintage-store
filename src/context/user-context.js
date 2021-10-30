// import React, { createContext } from 'react';
// import { useState } from 'react/cjs/react.development';

// /// get user from localStorage

// const getUserFromLocalStorage = () => {
//   return localStorage.getItem('user')
//     ? JSON.parse(localStorage.getItem('user'))
//     : { username: null, token: null };
// };

// export const UserContext = createContext({
//   user: {},
//   userLogin: (user) => {},
//   userLogout: () => {},
//   alert: {},
//   showAlert: () => {},
//   hideAlert: () => {},
// });

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(getUserFromLocalStorage());
//   const [alert, setAlert] = useState({
//     show: false,
//     msg: '',
//     type: 'success',
//   });

//   //login
//   const userLogin = (user) => {
//     setUser(user);
//     localStorage.setItem('user', JSON.stringify(user));
//   };

//   // logout
//   const userLogout = () => {
//     setUser({ username: null, token: null });
//     localStorage.removeItem('user');
//   };

//   // show alert
//   const showAlert = ({ msg, type = 'success' }) => {
//     setAlert({ show: true, msg, type });
//   };

//   //hide alert
//   const hideAlert = () => {
//     setAlert({ ...alert, show: false });
//   };

//   const context = {
//     user,
//     userLogin,
//     userLogout,
//     alert,
//     showAlert,
//     hideAlert,
//   };

//   return (
//     <UserContext.Provider value={context}>{children}</UserContext.Provider>
//   );
// };

// export default UserProvider;

import React from 'react';
export const UserContext = React.createContext();

function getUserFromLocalStorage() {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { username: null, token: null };
}

function UserProvider({ children }) {
  // const [user, setUser] = React.useState({ username: null, token: null });
  const [user, setUser] = React.useState(getUserFromLocalStorage());
  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };
  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem('user');
  };
  // alert
  const [alert, setAlert] = React.useState({
    show: false,
    msg: '',
    type: 'success',
  });
  const showAlert = ({ msg, type = 'success' }) => {
    setAlert({ show: true, msg, type });
  };
  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };
  return (
    <UserContext.Provider
      value={{ user, userLogin, userLogout, alert, showAlert, hideAlert }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
