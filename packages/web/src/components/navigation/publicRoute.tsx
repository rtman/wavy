import React from 'react';
import { Route } from 'react-router-dom';

export const PublicRoute = (props: any) => {
  const { component: Component, ...rest } = props;
  const renderComponent = (componentProps: any) => {
    return <Component {...componentProps} />;
  };

  return <Route {...rest} render={renderComponent} />;
};
