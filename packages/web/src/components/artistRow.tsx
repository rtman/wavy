import {
  Avatar,
  ButtonBase,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { StyledButton, StyledListItemText } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Artist } from 'types';

interface ArtistRowProps {
  artist: Artist;
  passedOnClickArtist?: (artist: Artist) => Promise<void>;
}

export const ArtistRow = (props: ArtistRowProps) => {
  const { artist, passedOnClickArtist } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory();
  const location = useLocation();
  const userContext = useContext(UserContext);

  console.log('artist', artist);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
    userContext?.updateFollowing(artist.id.toString());
    handleMenuClose();
  };

  const resolvedOnClick =
    typeof passedOnClickArtist === 'function'
      ? passedOnClickArtist
      : onClickGoToArtist;

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <ButtonBase onClick={() => resolvedOnClick(artist)}>
            <Avatar variant="square" src={artist.imageUrl} />
          </ButtonBase>
        </ListItemAvatar>
        <StyledListItemText
          primary={artist.name}
          // secondary={secondaryStyle ? null : artist.name}
          // onClick={secondaryStyle ? () => onClickSong() : () => onClickGoToArtist()}
        />
        <ListItemSecondaryAction>
          <StyledButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <MoreVert />
          </StyledButton>
        </ListItemSecondaryAction>
      </ListItem>
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
            {userContext?.user?.following?.find(
              (f) => f.artist.id === artist.id
            )
              ? 'Unfollow'
              : 'Follow'}
          </MenuItem>
        )}
      </Menu>
    </>
  );
};
