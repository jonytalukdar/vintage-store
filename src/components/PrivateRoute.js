import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../context/user-context';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={() => {
        return user.token ? children : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
