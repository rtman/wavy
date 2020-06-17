import * as consts from 'consts';
import { AuthContextState } from 'context';
import React, { FunctionComponent, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PublicRoute {
  exact: boolean;
  path: string;
  component?: FunctionComponent;
}

export const PublicRoute = (props: PublicRoute) => {
  const { component: Component, ...rest } = props;
  const authContextState = useContext(AuthContextState);
  const firebaseUser = authContextState?.firebaseUser;

  const renderComponent = () => {
    return Component ? <Component /> : undefined;
  };

  const doRoute = () => {
    if (firebaseUser) {
      return <Redirect to={consts.routes.HOME} />;
    } else {
      if (props.path === consts.routes.ROOT) {
        return <Redirect to={consts.routes.LOG_IN} />;
      }
      return <Route {...rest} render={renderComponent} />;
    }
  };

  return doRoute();
};
