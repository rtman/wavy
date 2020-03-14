import React from 'react';
import * as consts from 'consts';
import { NavMenuItem } from './styles';
import { RowContainer } from 'components';

export const NavMenu = () => {
  return (
    <RowContainer justifyContent={'flex-end'}>
      <NavMenuItem to={consts.routes.HOME}>Home</NavMenuItem>
      <NavMenuItem to={consts.routes.QUEUE}>Queue</NavMenuItem>
      <NavMenuItem to={consts.routes.PLAYLIST}>Playlists</NavMenuItem>
      <NavMenuItem to={consts.routes.HOME}>Following</NavMenuItem>
      <NavMenuItem to={consts.routes.HOME}>Favourites</NavMenuItem>
    </RowContainer>
  );
};
