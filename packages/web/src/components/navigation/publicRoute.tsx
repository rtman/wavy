import * as consts from 'consts';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContextState } from 'context';

export const PublicRoute = (props: any) => {
  const { component: Component, ...rest } = props;
  const authContextState = useContext(AuthContextState);
  const firebaseUser = authContextState?.firebaseUser;

  const renderComponent = (componentProps: any) => {
    return Component ? <Component {...componentProps} /> : undefined;
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
