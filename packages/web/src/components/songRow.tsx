import React, { useContext } from 'react';
import * as helpers from 'helpers';
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
import { PlayerContext } from 'context';

interface SongRowProps {
  song: Song;
  passedOnClickSong?: (song: Song) => Promise<void>;
  secondaryStyle?: boolean;
}

export const SongRow = (props: SongRowProps) => {
  const { song, passedOnClickSong, secondaryStyle } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const imageUrl = helpers.hooks.useGetStorageHttpUrl(song.image);
  const songUrl = helpers.hooks.useGetStorageHttpUrl(song.url);
  const playerContext = useContext(PlayerContext);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlayNow = () => {
    playerContext.replaceQueueWithSongs([song]);
    handleMenuClose();
  };

  const handleClickAddToQueue = () => {
    playerContext.addSongsToEndOfQueue([song]);

    handleMenuClose();
  };

  // const handleClickPlayAndClearQueue = () => {
  //   playerContext.replaceQueueWithSongs([song]);
  //   handleMenuClose();
  // };

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
        <ListItemText primary={song.title} secondary={secondaryStyle ? null : song.artist_name} />
        <ListItemSecondaryAction>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
            <MoreVert />
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
        <MenuItem onClick={handleClickAddToQueue}>Add to Queue</MenuItem>
        {/* <MenuItem onClick={handleClickPlayAndClearQueue}>Play and Clear Queue</MenuItem> */}
      </Menu>
      <Divider variant="inset" component="li" />
    </>
  );
};
