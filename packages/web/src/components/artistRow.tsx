import {
  Avatar,
  ButtonBase,
  createStyles,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { Artist, UpdateFollowingType } from 'commonTypes';
import { Spacing, StyledButton, StyledListItemText } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

interface ArtistRowProps {
  artist: Artist;
  passedOnClickArtist?: (artist: Artist) => void;
}

export const ArtistRow = (props: ArtistRowProps) => {
  const history = useHistory();
  const location = useLocation();
  const userContext = useContext(UserContext);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { artist, passedOnClickArtist } = props;

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
    userContext?.updateFollowing({
      id: artist.id.toString(),
      type: UpdateFollowingType.Artist,
    });
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
            <Avatar
              variant="square"
              src={artist.profileImageUrlThumb}
              className={classes.avatar}
            />
          </ButtonBase>
        </ListItemAvatar>
        <Spacing.BetweenComponents />
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
            {userContext?.user?.artistFollows?.find(
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
