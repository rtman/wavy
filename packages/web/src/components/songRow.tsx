import { StyledButton, StyledAvatar, StyledListItemText } from 'components';
import React, { useContext } from 'react';
import * as helpers from 'helpers';
import { Avatar, Button, ButtonBase, Divider, ListItem, ListItemAvatar, ListItemSecondaryAction, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { PlayerContext } from 'context';
import { useHistory } from 'react-router-dom';

interface SongRowProps {
  song: Song;
  passedOnClickSong?: (song: Song) => Promise<void>;
  secondaryStyle?: boolean;
  enableGoToArtist?: boolean;
}

export const SongRow = (props: SongRowProps) => {
  const { song, passedOnClickSong, secondaryStyle } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const imageUrl = helpers.hooks.useGetStorageHttpUrl(song.image);
  const playerContext = useContext(PlayerContext);
  const history = useHistory();

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

  const onClickSong = (song: Song) => {
    playerContext.replaceQueueWithSongs([song]);
  };

  const onClickGoToArtist = (song: Song) => {
    history.push(`/artist/${song.artist_id}`);
  };

  const resolvedOnClick = typeof passedOnClickSong === 'function' ? passedOnClickSong : onClickSong;

  return (
    <>
      <ListItem alignItems="flex-start">
        {secondaryStyle ? null : (
          <ListItemAvatar>
            <ButtonBase onClick={() => resolvedOnClick(song)}>
              <Avatar variant="square" src={imageUrl} />
            </ButtonBase>
          </ListItemAvatar>
        )}
        {/* <StyledButton onClick={() => onClickGoToArtist(song)}> */}
        <StyledListItemText
          primary={song.title}
          secondary={secondaryStyle ? null : song.artist_name}
          onClick={secondaryStyle ? () => onClickSong(song) : () => onClickGoToArtist(song)}
        />
        {/* </StyledButton> */}
        <ListItemSecondaryAction>
          <StyledButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
            <MoreVert />
          </StyledButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
        <MenuItem onClick={handleClickAddToQueue}>Add to Queue</MenuItem>
      </Menu>
    </>
  );
};
