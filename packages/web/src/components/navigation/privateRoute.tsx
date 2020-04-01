import * as consts from 'consts';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContextState } from 'context';

export const PrivateRoute = (props: any) => {
  const { component: Component, ...rest } = props;
  const authContextState = useContext(AuthContextState);
  const firebaseUser = authContextState?.firebaseUser;

  const renderComponent = (componentProps: any) => {
    return <Component {...componentProps} />;
  };

  const doRedirect = () => {
    if (firebaseUser) {
      if ([consts.routes.SIGN_UP, consts.routes.LOG_IN].includes(props.path)) {
        return <Redirect to={consts.routes.HOME} />;
      }

      return null;
    } else {
      return <Redirect to={consts.routes.LOG_IN} />;
    }
  };

  return (
    <Route {...rest} render={renderComponent}>
      {doRedirect()}
    </Route>
  );
};
