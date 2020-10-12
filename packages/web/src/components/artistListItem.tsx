import { Menu, MenuItem } from '@material-ui/core';
import { Artist, UpdateFollowingType } from 'commonTypes';
import { CustomListItemProps } from 'commonTypes';
import { CustomListItem } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { CSSProperties, useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface ArtistListItemProps
  extends Omit<CustomListItemProps, 'onClickOpenMenu'> {
  artist: Artist;
  onClick?: () => void;
  style?: CSSProperties;
}

export const ArtistListItem = (props: ArtistListItemProps) => {
  const history = useHistory();
  const location = useLocation();
  const userContext = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { artist, onClick } = props;

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onClickGoToArtist = () => {
    history.push(`${consts.routes.ARTIST}/${artist.id}`);
    handleMenuClose();
  };

  const onClickToggleFollow = () => {
    userContext?.updateFollowing({
      id: artist.id.toString(),
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
        <MenuItem onClick={onClick ?? onClickGoToArtist}>Go to Artist</MenuItem>
        {location.pathname.includes('dashboard') ? null : (
          <MenuItem onClick={onClickToggleFollow}>
            {userContext?.user?.artistFollows?.find(
              (f) => f.artist.id === artist.id
            )
              ? 'Unfollow'
              : 'Follow'}
          </MenuItem>
        )}
      </Menu>
    );
  };

  return (
    <>
      <CustomListItem
        onClick={onClickGoToArtist}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      {makeMenu()}
    </>
  );
};
