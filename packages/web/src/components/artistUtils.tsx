import { Menu, MenuItem } from '@material-ui/core';
import { Artist, MenuPosition, UpdateFollowingType } from 'commonTypes';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface ArtistUtils {
  data: Artist;
  anchorEl: null | HTMLElement;
  menuPosition: MenuPosition | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const ArtistUtils = (props: ArtistUtils) => {
  const userContext = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const { data, anchorEl, setAnchorEl } = props;

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onClickGoToArtist = () => {
    history.push(`${consts.routes.ARTIST}/${data.id}`);
    handleMenuClose();
  };

  const onClickToggleFollow = () => {
    userContext?.updateFollowing({
      id: data.id.toString(),
      type: UpdateFollowingType.Artist,
    });
    handleMenuClose();
  };

  const makeMenu = () => {
    return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
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
      </Menu>
    );
  };

  return makeMenu();
};
