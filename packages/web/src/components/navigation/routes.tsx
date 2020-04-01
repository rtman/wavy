import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';
import * as consts from 'consts';
import * as screens from 'screens';
import { PublicRoute } from './publicRoute';
import { PrivateRoute } from './privateRoute';
import { AuthContextState } from 'context';

export const Routes = () => {
  const authContextState = useContext(AuthContextState);
  console.log(
    'Navigator - authContextState.firebaseUser',
    authContextState?.firebaseUser
  );

  return (
    <Switch>
      <PublicRoute exact={true} path={consts.routes.ROOT} />
      <PublicRoute
        exact={true}
        path={consts.routes.LOG_IN}
        component={screens.Login}
      />
      <PublicRoute
        exact={true}
        path={consts.routes.SIGN_UP}
        component={screens.Signup}
      />
      <PrivateRoute
        exact={true}
        path={consts.routes.HOME}
        component={screens.Home}
      />
      <PrivateRoute
        exact={true}
        path={`${consts.routes.ALBUM}/:id?`}
        component={screens.Album}
      />
      <PrivateRoute
        exact={true}
        path={`${consts.routes.ARTIST}/:id?`}
        component={screens.Artist}
      />
      <PrivateRoute
        exact={true}
        path={consts.routes.QUEUE}
        component={screens.Queue}
      />
      <PrivateRoute
        exact={true}
        path={consts.routes.PLAYLISTS}
        component={screens.Playlists}
      />
      <PrivateRoute
        exact={true}
        path={`${consts.routes.PLAYLIST}/:id?`}
        component={screens.Playlist}
      />
      <PrivateRoute
        exact={true}
        path={consts.routes.FOLLOWING}
        component={screens.Following}
      />
      <PrivateRoute
        exact={true}
        path={consts.routes.FAVOURITES}
        component={screens.Favourites}
      />
    </Switch>
  );
};
