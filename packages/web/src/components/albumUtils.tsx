import { Menu, MenuItem } from '@material-ui/core';
import { Album, MenuPosition } from 'commonTypes';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface AlbumUtils {
  data: Album;
  anchorEl: null | HTMLElement;
  menuPosition: MenuPosition | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const AlbumUtils = (props: AlbumUtils) => {
  const playerContext = useContext(PlayerContext);
  const userContext = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();

  const { data, anchorEl, menuPosition, setAnchorEl } = props;

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlayNow = () => {
    playerContext?.replaceQueueWithSongs(data.songs);
    onMenuClose();
  };

  const handleClickAddToQueue = () => {
    playerContext?.addSongsToEndOfQueue(data.songs);
    onMenuClose();
  };

  const handleClickGoToAlbum = () => {
    history.push(`${consts.routes.ALBUM}/${data?.id}`);
  };

  const onClickAddToPlaylist = (playlistId: string) => () => {
    const songIds = data.songs.map((s) => s.id);
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
    history.push(`${consts.routes.ARTIST}/${data.artist.id}`);
    onMenuClose();
  };

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${data.label?.id}`);
    onMenuClose();
  };

  const makeMenu = () => {
    return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
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
        {(userContext?.playlists?.length ?? 0) > 0 ? (
          <NestedMenuItem
            label="Add to Playlist"
            parentMenuOpen={!!menuPosition}
          >
            {renderPlaylists()}
          </NestedMenuItem>
        ) : null}
      </Menu>
    );
  };

  return makeMenu();
};
