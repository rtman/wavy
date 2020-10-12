import { Menu, MenuItem } from '@material-ui/core';
import { Album, CustomListItemProps } from 'commonTypes';
import { CustomListItem } from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { CSSProperties, useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface AlbumListItemProps
  extends Omit<CustomListItemProps, 'onClickOpenMenu'> {
  album: Album;
  onClick?: () => void;
  style?: CSSProperties;
}

interface MenuPosition {
  top: number;
  left: number;
}

export const AlbumListItem = (props: AlbumListItemProps) => {
  const playerContext = useContext(PlayerContext);
  const userContext = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { album, onClick } = props;

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlayNow = () => {
    playerContext?.replaceQueueWithSongs(album.songs);
    onMenuClose();
  };

  const handleClickAddToQueue = () => {
    playerContext?.addSongsToEndOfQueue(album.songs);
    onMenuClose();
  };

  const handleClickGoToAlbum = () => {
    history.push(`${consts.routes.ALBUM}/${album?.id}`);
  };

  const onClickPlay = () => {
    playerContext?.replaceQueueWithSongs(album.songs);
  };

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
    onMenuClose();
  };

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${album.label?.id}`);
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
    );
  };

  return (
    <>
      <CustomListItem
        onClick={onClick ?? onClickPlay}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      {makeMenu()}
    </>
  );
};
