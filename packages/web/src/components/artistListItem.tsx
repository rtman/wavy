import { Menu, MenuItem } from '@material-ui/core';
import { Artist, UpdateFollowingType } from 'commonTypes';
import { CustomListItemProps } from 'commonTypes';
import { CustomListItem } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { CSSProperties, useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface ArtistListItemProps extends CustomListItemProps {
  artist: Artist;
  style?: CSSProperties;
}

export const ArtistListItem = (props: ArtistListItemProps) => {
  const history = useHistory();
  const location = useLocation();
  const userContext = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { artist } = props;

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
        <MenuItem onClick={onClickGoToArtist}>Go to Artist</MenuItem>
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
      <CustomListItem {...props} onClickOpenMenu={onClickOpenMenu} />
      {makeMenu()}
    </>
  );
};
