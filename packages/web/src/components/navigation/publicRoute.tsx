import * as consts from 'consts';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContextState } from 'context';

export const PublicRoute = (props: any) => {
  const { component: Component, ...rest } = props;
  const authContextState = useContext(AuthContextState);
  const firebaseUser = authContextState?.firebaseUser;

  const renderComponent = (componentProps: any) => {
    return <Component {...componentProps} />;
  };

  const doRedirect = () => {
    if (firebaseUser) {
      return <Redirect to={firebaseUser ? consts.routes.HOME : props.path} />;
    }
    return null;
  };

  return (
    <Route {...rest} render={renderComponent}>
      {doRedirect()}
    </Route>
  );
};
