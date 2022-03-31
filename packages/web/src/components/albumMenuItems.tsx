import { MenuItem } from '@material-ui/core';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { memo, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Album, MenuPosition } from 'types';

interface AlbumMenuItems {
  data: Album;
  menuPosition: MenuPosition | null;
  closeMenu: () => void;
}

export const AlbumMenuItems = memo((props: AlbumMenuItems) => {
  const playerContext = useContext(PlayerContext);
  const userContext = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();

  const { data, menuPosition, closeMenu } = props;

  const handleClickPlayNow = () => {
    playerContext?.replaceQueueWithSongs(data.songs ?? []);
    closeMenu();
  };

  const handleClickAddToQueue = () => {
    playerContext?.addSongsToEndOfQueue(data.songs ?? []);
    closeMenu();
  };

  const handleClickGoToAlbum = () => {
    history.push(`${consts.routes.ALBUM}/${data?.id}`);
  };

  const onClickAddToPlaylist = (playlistId: string) => () => {
    const songIds = (data.songs ?? []).map((s) => s.id);

    userContext?.addSongsToPlaylist(playlistId, songIds);
  };

  const renderPlaylists = () => {
    const playlistList = userContext?.playlists?.map((playlist) => {
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
    closeMenu();
  };

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${data.label?.id}`);
    closeMenu();
  };

  return (
    <>
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
        <NestedMenuItem label="Add to Playlist" parentMenuOpen={!!menuPosition}>
          {renderPlaylists()}
        </NestedMenuItem>
      ) : null}
    </>
  );
});
