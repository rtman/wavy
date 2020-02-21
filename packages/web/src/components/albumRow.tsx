import React from 'react';
import { Avatar, Divider, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import * as helpers from 'helpers';

export const AlbumRow = (album: Album, onClickAlbum?: (album: Album) => Promise<void>) => {
  const onClick = onClickAlbum ? onClickAlbum : () => null;

  const albumImageUrl = helpers.hooks.useGetStorageHttpUrl(album.image);

  return (
    <>
      <ListItem alignItems="flex-start" onClick={() => onClick(album)}>
        <ListItemAvatar>
          <Avatar variant="square" src={albumImageUrl} />
        </ListItemAvatar>
        <ListItemText primary={album.title} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
