import React, { useContext } from 'react';
import * as consts from 'consts';
import { NavMenuItem, NavButton } from './styles';
import { RowContainer } from 'components';
import { AuthContextState } from 'context';

export const NavMenu = () => {
  const authContextState = useContext(AuthContextState);

  return (
    <RowContainer justifyContent={'flex-end'}>
      <NavMenuItem to={consts.routes.HOME}>Home</NavMenuItem>
      <NavMenuItem to={consts.routes.QUEUE}>Queue</NavMenuItem>
      <NavMenuItem to={consts.routes.PLAYLISTS}>Playlists</NavMenuItem>
      <NavMenuItem to={consts.routes.FOLLOWING}>Following</NavMenuItem>
      <NavMenuItem to={consts.routes.FAVOURITES}>Favourites</NavMenuItem>
      <NavButton onClick={() => authContextState?.logout()}>Log out</NavButton>
    </RowContainer>
  );
};
