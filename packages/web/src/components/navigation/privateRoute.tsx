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
  const firebaseUser = authContext?.firebaseUser;

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
