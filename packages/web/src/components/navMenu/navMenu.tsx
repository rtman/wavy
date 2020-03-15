import React from 'react';
import * as consts from 'consts';
import { NavMenuItem } from './styles';
import { RowContainer } from 'components';

export const NavMenu = () => {
  return (
    <RowContainer justifyContent={'flex-end'}>
      <NavMenuItem to={consts.routes.HOME}>Home</NavMenuItem>
      <NavMenuItem to={consts.routes.QUEUE}>Queue</NavMenuItem>
      <NavMenuItem to={consts.routes.PLAYLISTS}>Playlists</NavMenuItem>
      <NavMenuItem to={consts.routes.FOLLOWING}>Following</NavMenuItem>
      <NavMenuItem to={consts.routes.FAVOURITES}>Favourites</NavMenuItem>
    </RowContainer>
  );
};
