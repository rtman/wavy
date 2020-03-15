import { StyledButton, StyledListItemText } from 'components';
import * as consts from 'consts';
import React, { useContext, useState } from 'react';
import * as helpers from 'helpers';
import { Avatar, ButtonBase, ListItem, ListItemAvatar, ListItemSecondaryAction, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { PlayerContext } from 'context';
import { useHistory, useLocation } from 'react-router-dom';
import NestedMenuItem from 'material-ui-nested-menu-item';

interface SongRowProps {
  song: Song;
  passedOnClickSong?: (song: Song) => Promise<void>;
  secondaryStyle?: boolean;
  enableGoToArtist?: boolean;
}

export const SongRow = (props: SongRowProps) => {
  const { song, passedOnClickSong, secondaryStyle } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<any>(null);
  const imageUrl = helpers.hooks.useGetStorageHttpUrl(song.image);
  const playerContext = useContext(PlayerContext);
  const history = useHistory();
  const location = useLocation();

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX
    });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuPosition(null);
  };

  const handleClickPlayNow = () => {
    if (location.pathname.includes(consts.routes.QUEUE)) {
      playerContext.playSongInQueue(song);
    } else {
      playerContext.replaceQueueWithSongs([song]);
    }

    handleMenuClose();
  };

  const handleClickAddToQueue = () => {
    playerContext.addSongsToEndOfQueue([song]);

    handleMenuClose();
  };

  const handleClickRemoveFromQueue = () => {
    playerContext.removeSongFromQueue(song.id);

    handleMenuClose();
  };

  const onClickSong = () => {
    playerContext.replaceQueueWithSongs([song]);
  };

  const onClickGoToArtist = () => {
    history.push(`/artist/${song.artist_id}`);
  };

  const onClickGoToAlbum = () => {
    history.push(`/album/${song.album_id}`);
  };

  const resolvedOnClick = typeof passedOnClickSong === 'function' ? passedOnClickSong : onClickSong;

  // console.log('location', location);
  // console.log('song', song);

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
          onClick={secondaryStyle ? () => onClickSong() : () => onClickGoToArtist()}
        />
        {/* </StyledButton> */}
        <ListItemSecondaryAction>
          <StyledButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
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
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: 200
          }
        }}
      >
        <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
        <MenuItem onClick={location.pathname.includes(consts.routes.QUEUE) ? handleClickRemoveFromQueue : handleClickAddToQueue}>
          {location.pathname.includes(consts.routes.QUEUE) ? 'Remove From Queue' : 'Add to Queue'}
        </MenuItem>
        {location.pathname.includes(consts.routes.ALBUM) ? null : <MenuItem onClick={onClickGoToAlbum}>Go to Album</MenuItem>}
        {location.pathname.includes(consts.routes.ARTIST) ? null : <MenuItem onClick={onClickGoToArtist}>Go to Artist</MenuItem>}
        <NestedMenuItem label="Add to Playlist" parentMenuOpen={!!menuPosition}>
          <MenuItem>Playlist 1</MenuItem>
        </NestedMenuItem>
      </Menu>
    </>
  );
};
