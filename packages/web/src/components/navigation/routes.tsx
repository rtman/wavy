import React from 'react';
import { Switch } from 'react-router-dom';
import * as screens from 'screens';
import { PublicRoute } from './publicRoute';

export const Routes = (props: any) => {
  console.log('Navigator - Routes - props', props);

  return (
    <Switch>
      <PublicRoute exact={true} path="/" component={screens.Home} />
      <PublicRoute exact={true} path="/album/:id?" component={screens.Album} />
      <PublicRoute exact={true} path="/artist/:id?" component={screens.Artist} />
      <PublicRoute exact={true} path="/queue" component={screens.Queue} />
    </Switch>
  );
};
