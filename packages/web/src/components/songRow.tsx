import React, { useContext } from 'react';
import { useGetStorageHttpUrl } from 'components';
import { Avatar, Divider, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { PlayerContext } from '../App';

export const SongRow = (song: Song, passedOnClickSong?: (song: Song) => Promise<void>) => {
  const imageUrl = useGetStorageHttpUrl(song.image);
  const songUrl = useGetStorageHttpUrl(song.url);
  const playerContext = useContext(PlayerContext);

  const onClickSong = (song: Song) => {
    const resolvedSong = {
      ...song,
      url: songUrl
    };
    if (playerContext?.playAudio) {
      playerContext.playAudio(resolvedSong);
    }
  };

  const resolvedOnClick = typeof passedOnClickSong === 'function' ? passedOnClickSong : onClickSong;

  return (
    <>
      <ListItem alignItems="flex-start" onClick={() => resolvedOnClick(song)}>
        <ListItemAvatar>
          <Avatar variant="square" src={imageUrl} />
        </ListItemAvatar>
        <ListItemText primary={song.title} secondary={song.artist_name} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
