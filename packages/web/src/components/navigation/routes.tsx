import React, { useContext } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import * as consts from 'consts';
import * as screens from 'screens';
import { PublicRoute } from './publicRoute';
import { AuthContextState } from 'context';

export const Routes = (props: any) => {
  const authContextState = useContext(AuthContextState);
  console.log('Navigator - authContextState.firebaseUser', authContextState?.firebaseUser);

  return (
    <Switch>
      <PublicRoute exact={true} path={consts.routes.ROOT}>
        <Redirect to={authContextState?.firebaseUser ? consts.routes.HOME : consts.routes.SIGN_UP} />
      </PublicRoute>
      <PublicRoute exact={true} path={consts.routes.HOME} component={screens.Home} />
      <PublicRoute exact={true} path={consts.routes.SIGN_UP} component={screens.Signup} />
      <PublicRoute exact={true} path={`${consts.routes.ALBUM}/:id?`} component={screens.Album} />
      <PublicRoute exact={true} path={`${consts.routes.ARTIST}/:id?`} component={screens.Artist} />
      <PublicRoute exact={true} path={consts.routes.QUEUE} component={screens.Queue} />
      <PublicRoute exact={true} path={consts.routes.PLAYLISTS} component={screens.Playlists} />
      <PublicRoute exact={true} path={`${consts.routes.PLAYLIST}/:id?`} component={screens.Playlist} />
      <PublicRoute exact={true} path={consts.routes.FOLLOWING} component={screens.Following} />
      <PublicRoute exact={true} path={consts.routes.FAVOURITES} component={screens.Favourites} />
    </Switch>
  );
};
