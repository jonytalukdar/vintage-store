import React, { createContext } from 'react';

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const context = {};
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
