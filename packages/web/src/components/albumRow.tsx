import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { StyledButton } from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Album } from 'types';

interface AlbumRowProps {
  album: Album;
  withSongs?: boolean;
  passedOnClickAlbum?: (album: Album) => Promise<void>;
}

interface MenuPosition {
  top: number;
  left: number;
}

export const AlbumRow = (props: AlbumRowProps) => {
  const { album, passedOnClickAlbum, withSongs } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const playerContext = useContext(PlayerContext);
  const userContext = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();

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
  };

  const handleClickPlayNow = () => {
    playerContext?.replaceQueueWithSongs(album.songs);
    handleMenuClose();
  };

  const handleClickAddToQueue = () => {
    playerContext?.addSongsToEndOfQueue(album.songs);
    handleMenuClose();
  };

  const handleClickGoToAlbum = () => {
    history.push(`${consts.routes.ALBUM}/${album?.id}`);
  };

  const onClickAlbum = () => {
    playerContext?.replaceQueueWithSongs(album.songs);
  };

  const resolvedOnClick =
    typeof passedOnClickAlbum === 'function'
      ? passedOnClickAlbum
      : onClickAlbum;

  const onClickAddToPlaylist = (playlistId: string) => () => {
    const songIds = album.songs.map((s) => s.id);
    userContext?.addSongsToPlaylist(playlistId, songIds);
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

  const onClickGoToArtist = () => {
    history.push(`${consts.routes.ARTIST}/${album.artist.id}`);
    handleMenuClose();
  };

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${album.label?.id}`);
    handleMenuClose();
  };

  return (
    <>
      <ListItem
        alignItems="flex-start"
        onClick={() => resolvedOnClick(album)}
        button={true}
      >
        <ListItemAvatar>
          <Avatar variant="square" src={album.profileImageUrlLarge} />
        </ListItemAvatar>
        <ListItemText
          primary={album.title}
          secondary={
            <>
              {!location.pathname.includes(consts.routes.ARTIST) ? (
                <Typography variant="body2">{album.artist.name}</Typography>
              ) : null}
              {!location.pathname.includes(consts.routes.LABEL) ? (
                <Typography variant="caption">
                  {album.label?.name ?? null}
                </Typography>
              ) : null}
            </>
          }
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
        <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
        <MenuItem onClick={handleClickAddToQueue}>Add to Queue</MenuItem>
        <MenuItem onClick={handleClickGoToAlbum}>Go to Album</MenuItem>
        {location.pathname.includes(consts.routes.LABEL) ? (
          <MenuItem onClick={onClickGoToArtist}>Go To Artist</MenuItem>
        ) : null}
        {!location.pathname.includes(consts.routes.LABEL) ? (
          <MenuItem onClick={onClickGoToLabel}>Go To Label</MenuItem>
        ) : null}
        {/* eslint-disable-next-line no-self-compare*/}
        {userContext?.playlists?.length ?? 0 > 0 ? (
          <NestedMenuItem
            label="Add to Playlist"
            parentMenuOpen={!!menuPosition}
          >
            {renderPlaylists()}
          </NestedMenuItem>
        ) : null}
      </Menu>
      {withSongs ? <Divider variant="inset" component="li" /> : null}
    </>
  );
};
