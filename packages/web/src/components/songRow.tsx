import React, { useContext } from 'react';
import * as helpers from 'helpers';
import { Avatar, Divider, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { PlayerContext } from 'context';

interface SongRowProps {
  song: Song;
  passedOnClickSong?: (song: Song) => Promise<void>;
  secondaryStyle?: boolean;
}

export const SongRow = (props: SongRowProps) => {
  const { song, passedOnClickSong, secondaryStyle } = props;

  const imageUrl = helpers.hooks.useGetStorageHttpUrl(song.image);
  const songUrl = helpers.hooks.useGetStorageHttpUrl(song.url);
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
        {secondaryStyle ? null : (
          <ListItemAvatar>
            <Avatar variant="square" src={imageUrl} />
          </ListItemAvatar>
        )}
        <ListItemText primary={song.title} secondary={!secondaryStyle && song.artist_name} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
