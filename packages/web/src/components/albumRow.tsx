import React, { useContext } from 'react';
import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Menu,
  MenuItem
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import * as helpers from 'helpers';
import { PlayerContext } from 'context';
import { useHistory } from 'react-router-dom';

interface AlbumRowProps {
  album: Album;
  passedOnClickAlbum?: (album: Album) => Promise<void>;
}

export const AlbumRow = (props: AlbumRowProps) => {
  const { album, passedOnClickAlbum } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const playerContext = useContext(PlayerContext);
  const history = useHistory();

  const albumImageUrl = helpers.hooks.useGetStorageHttpUrl(album.image);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlayNow = () => {
    playerContext.replaceQueueWithSongs(album.songs);
    handleMenuClose();
  };

  const handleClickAddToQueue = () => {
    playerContext.addSongsToEndOfQueue(album.songs);
    handleMenuClose();
  };

  const handleClickGoToAlbum = () => {
    history.push(`/album/${album?.id}`);
  };

  const onClickAlbum = () => {
    playerContext.replaceQueueWithSongs(album.songs);
  };

  const resolvedOnClick = typeof passedOnClickAlbum === 'function' ? passedOnClickAlbum : onClickAlbum;

  return (
    <>
      <ListItem alignItems="flex-start" onClick={() => resolvedOnClick(album)}>
        <ListItemAvatar>
          <Avatar variant="square" src={albumImageUrl} />
        </ListItemAvatar>
        <ListItemText primary={album.title} />
        <ListItemSecondaryAction>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
            <MoreVert />
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
        <MenuItem onClick={handleClickAddToQueue}>Add to Queue</MenuItem>
        <MenuItem onClick={handleClickGoToAlbum}>Go to Album</MenuItem>
      </Menu>
      <Divider variant="inset" component="li" />
    </>
  );
};
