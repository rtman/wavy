import { MenuItem } from '@material-ui/core';
import { Artist, MenuPosition, UpdateFollowingType } from 'commonTypes';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface ArtistMenuItemsProps {
  data: Artist;
  menuPosition: MenuPosition | null;
  closeMenu: () => void;
}

export const ArtistMenuItems = (props: ArtistMenuItemsProps) => {
  const userContext = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const { data, closeMenu } = props;

  const onClickGoToArtist = () => {
    history.push(`${consts.routes.ARTIST}/${data.id}`);
    closeMenu();
  };

  const onClickToggleFollow = () => {
    userContext?.updateFollowing({
      id: data.id.toString(),
      type: UpdateFollowingType.Artist,
    });
    closeMenu();
  };

  return (
    <>
      <MenuItem onClick={onClickGoToArtist}>Go to Artist</MenuItem>
      {location.pathname.includes('dashboard') ? null : (
        <MenuItem onClick={onClickToggleFollow}>
          {userContext?.user?.artistFollows?.find(
            (f) => f.artist.id === data.id
          )
            ? 'Unfollow'
            : 'Follow'}
        </MenuItem>
      )}
    </>
  );
};
