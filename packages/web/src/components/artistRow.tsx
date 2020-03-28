import { StyledButton, StyledListItemText } from 'components';
import React, { useContext } from 'react';
import * as helpers from 'helpers';
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
import { useHistory } from 'react-router-dom';
import { UserContext } from 'context';

interface ArtistRowProps {
  artist: Artist;
  passedOnClickArtist?: (artist: Artist) => Promise<void>;
}

export const ArtistRow = (props: ArtistRowProps) => {
  const { artist, passedOnClickArtist } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const imageUrl = helpers.hooks.useGetStorageHttpUrl(artist.image);
  const history = useHistory();
  const userContext = useContext(UserContext);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onClickGoToArtist = () => {
    history.push(`/artist/${artist.id}`);
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
            <Avatar variant="square" src={imageUrl} />
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
        <MenuItem onClick={onClickToggleFollow}>
          {userContext?.user?.following.find((f) => f.id === artist.id)
            ? 'Unfollow'
            : 'Follow'}
        </MenuItem>
      </Menu>
    </>
  );
};
