import * as consts from 'consts';
import { AuthContext } from 'context';
import React, { FunctionComponent, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PrivateRoute {
  exact: boolean;
  path: string;
  component: FunctionComponent;
}

export const PrivateRoute = (props: PrivateRoute) => {
  const { component: Component, ...rest } = props;
  const authContext = useContext(AuthContext);

  const { firebaseUser, signedIn } = authContext ?? {};

  return (
    <Route
      {...rest}
      render={() =>
        firebaseUser && signedIn ? (
          <Component />
        ) : (
          <Redirect to={consts.routes.LOG_IN} />
        )
      }
    />
  );
};
