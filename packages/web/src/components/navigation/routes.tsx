import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import * as consts from 'consts';
import * as screens from 'screens';
import { PublicRoute } from './publicRoute';

export const Routes = (props: any) => {
  console.log('Navigator - Routes - props', props);

  return (
    <Switch>
      <PublicRoute exact={true} path={consts.routes.ROOT}>
        <Redirect to={consts.routes.SIGN_UP} />
      </PublicRoute>
      <PublicRoute exact={true} path={consts.routes.HOME} component={screens.Home} />
      <PublicRoute exact={true} path={consts.routes.SIGN_UP} component={screens.Signup} />
      <PublicRoute exact={true} path={`${consts.routes.ALBUM}/:id?`} component={screens.Album} />
      <PublicRoute exact={true} path={`${consts.routes.ARTIST}/:id?`} component={screens.Artist} />
      <PublicRoute exact={true} path={consts.routes.QUEUE} component={screens.Queue} />
    </Switch>
  );
};
