import * as consts from 'consts';
import { AuthContext } from 'context';
import React, { FunctionComponent, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PublicRoute {
  exact: boolean;
  path: string;
  component: FunctionComponent;
}

export const PublicRoute = (props: PublicRoute) => {
  const { component: Component, ...rest } = props;
  const authContext = useContext(AuthContext);
  const { firebaseUser, signedIn } = authContext ?? {};

  return (
    <Route
      {...rest}
      render={({ location }) =>
        firebaseUser && signedIn ? (
          <Redirect to={consts.routes.HOME} />
        ) : (
          <Component />
        )
      }
    />
  );
};
