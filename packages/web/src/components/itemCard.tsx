import {
  Card,
  CardActionArea,
  CardActions,
  // CardContent,
  CardMedia,
  GridListTile,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MoreVert } from '@material-ui/icons';
import { Album, Artist, Label, Playlist, Song } from 'commonTypes';
import { Flex, Spacing, StyledButton } from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

type Item = Album | Artist | Label | Playlist | Song;
interface ItemCardProps {
  item: Item;
  passedOnClick?: (item: Item) => Promise<void>;
}

interface MenuPosition {
  top: number;
  left: number;
}

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem',
    maxWidth: '220px',
  },
}));

export const ItemCard = (props: ItemCardProps) => {
  const { item, passedOnClick } = props;
  const playerContext = useContext(PlayerContext);
  const userContext = useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuPosition(null);
  };

  const title = 'title' in item ? item.title : item.name;

  const getImageUrl = () => {
    if (item.__typename === 'Song') {
      return item.album.profileImageUrlThumb;
    }
    if (
      item.__typename === 'Album' ||
      item.__typename === 'Artist' ||
      item.__typename === 'Label' ||
      item.__typename === 'Playlist'
    ) {
      return item.profileImageUrlThumb ?? '';
    }
  };

  const getSongs = () => {
    if (item.__typename === 'Playlist') {
      return item?.songs?.map((s) => s.song) ?? [];
    }
    if (
      item.__typename === 'Album' ||
      item.__typename === 'Artist' ||
      item.__typename === 'Label'
    ) {
      return item.songs ?? [];
    }
    if (item.__typename === 'Song') {
      return [item];
    }
    return [];
  };

  const onClickPlayNow = () => {
    playerContext?.replaceQueueWithSongs(getSongs());
  };

  const onClickAddToQueue = () => {
    playerContext?.addSongsToEndOfQueue(getSongs());

    handleMenuClose();
  };

  const onClickToggleFavourite = () => {
    userContext?.updateFavourites(item.id);
    handleMenuClose();
  };

  const getFavouriteTitle = () => {
    return userContext?.user?.songFavourites?.find((f) => f.song.id === item.id)
      ? 'Unfavourite'
      : 'Favourite';
  };

  const onClickGoTo = () => {
    if (item.__typename && item.__typename !== 'Song') {
      history.push(
        `${consts.routes[item.__typename?.toLocaleUpperCase()]}/${item.id}`
      );
    }

    if (item.__typename && item.__typename === 'Song') {
      history.push(`${consts.routes.ALBUM}/${item.album.id}`);
    }

    handleMenuClose();
  };

  const onClickAddToPlaylist = (playlistId: string) => () => {
    const ids = getSongs().map((s) => s.id);
    userContext?.addSongsToPlaylist(playlistId, ids);
  };

  const renderPlaylists = () => {
    const playlistList = userContext?.playlists?.map((playlistInstance) => {
      const playlist = playlistInstance.playlist;
      return (
        <MenuItem key={playlist.id} onClick={onClickAddToPlaylist(playlist.id)}>
          {playlist.title}
        </MenuItem>
      );
    });

    return playlistList;
  };

  return (
    <GridListTile>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            onClick={onClickGoTo}
            component="img"
            image={getImageUrl()}
            alt={title}
          />
        </CardActionArea>
        <Spacing.BetweenComponents />
        <CardActions>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            fullWidth={true}
          >
            <Typography align="left">{title}</Typography>
            <StyledButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
            >
              <MoreVert />
            </StyledButton>
          </Flex>
        </CardActions>
        <Spacing.BetweenComponents />
      </Card>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: 200,
          },
        }}
      >
        <MenuItem onClick={onClickPlayNow}>Play Now</MenuItem>
        <MenuItem onClick={onClickAddToQueue}>Add to Queue</MenuItem>

        <MenuItem onClick={onClickGoTo}>{`Go to ${
          item.__typename === 'Song' ? 'Album' : item.__typename
        }`}</MenuItem>

        {item.__typename === 'Song' ? (
          <MenuItem onClick={onClickToggleFavourite}>
            {getFavouriteTitle()}
          </MenuItem>
        ) : null}

        {/* eslint-disable-next-line no-self-compare */}
        {userContext?.playlists?.length ?? 0 > 0 ? (
          <NestedMenuItem
            label="Add to Playlist"
            parentMenuOpen={!!menuPosition}
          >
            {renderPlaylists()}
          </NestedMenuItem>
        ) : null}
      </Menu>
    </GridListTile>
  );
};
