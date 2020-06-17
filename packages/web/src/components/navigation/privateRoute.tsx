import * as consts from 'consts';
import { AuthContextState } from 'context';
import { Redirect, Route } from 'react-router-dom';
import React, { FunctionComponent, useContext } from 'react';

interface PrivateRoute {
  exact: boolean;
  path: string;
  component: FunctionComponent;
}

export const PrivateRoute = (props: PrivateRoute) => {
  const { component: Component, ...rest } = props;
  const authContextState = useContext(AuthContextState);
  const firebaseUser = authContextState?.firebaseUser;

  const renderComponent = () => {
    return Component ? <Component /> : undefined;
  };

  const doRoute = () => {
    if (firebaseUser) {
      if ([consts.routes.SIGN_UP, consts.routes.LOG_IN].includes(props.path)) {
        return <Redirect to={consts.routes.HOME} />;
      }

      return <Route {...rest} render={renderComponent} />;
    } else {
      return <Redirect to={consts.routes.LOG_IN} />;
    }
  };

  return doRoute();
};
