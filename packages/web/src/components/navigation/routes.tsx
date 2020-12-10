import * as consts from 'consts';
import { AuthContext } from 'context';
import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as screens from 'screens';
import { UnknownRoute } from 'screens';

import { PrivateRoute } from './privateRoute';
import { PublicRoute } from './publicRoute';

export const Routes = () => {
  return (
    <Switch>
      <PublicRoute
        exact={true}
        path={consts.routes.ROOT}
        component={screens.Login}
      />
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
        path={`${consts.routes.LABEL}/:id?`}
        component={screens.Label}
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
      <PrivateRoute
        exact={true}
        path={consts.routes.SEARCH}
        component={screens.Search}
      />
      <PrivateRoute
        exact={true}
        path={consts.routes.CREATE_ARTIST}
        component={screens.CreateArtist}
      />
      <PrivateRoute
        exact={true}
        path={consts.routes.CREATE_CREATOR_SELECTION}
        component={screens.CreateCreatorSelection}
      />
      <PrivateRoute
        exact={true}
        path={consts.routes.CREATE_LABEL}
        component={screens.CreateLabel}
      />
      <PrivateRoute
        exact={true}
        path={`${consts.routes.LABEL_CREATE_UNCLAIMED_ARTIST}/:id?`}
        component={screens.LabelCreateUnclaimedArtist}
      />
      <PrivateRoute
        exact={true}
        path={consts.routes.DASHBOARD}
        component={screens.Dashboard}
      />
      <PrivateRoute
        exact={true}
        path={`${consts.routes.ARTIST_DASHBOARD}/:id?`}
        component={screens.ArtistDashboard}
      />
      <PrivateRoute
        exact={true}
        path={`${consts.routes.LABEL_DASHBOARD}/:id?`}
        component={screens.LabelDashboard}
      />
      <PrivateRoute
        exact={true}
        path={`${consts.routes.ARTIST_CREATE_RELEASE}/:id?`}
        component={screens.ArtistCreateRelease}
      />
      <PrivateRoute
        exact={true}
        path={`${consts.routes.LABEL_CREATE_RELEASE}/:id?`}
        component={screens.LabelCreateRelease}
      />
      <PrivateRoute
        exact={true}
        path={`${consts.routes.PERMISSIONS}/:id?`}
        component={screens.Permissions}
      />
      <PrivateRoute
        exact={true}
        path={consts.routes.MANAGE_SUBSCRIPTIONS}
        component={screens.ManageSubscriptions}
      />
      <PrivateRoute
        exact={true}
        path={consts.routes.CLAIM_ARTIST}
        component={screens.ClaimArtist}
      />
      {/* <PrivateRoute
      exact={true}
      path={`${consts.routes.LABEL_DASHBOARD}/:id?`}
      component={screens.LabelDashboard}
    /> */}
      <Route path="*">
        <UnknownRoute />
      </Route>
    </Switch>
  );
};
