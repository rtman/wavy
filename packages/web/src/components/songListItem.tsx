import { Menu, MenuItem } from '@material-ui/core';
import { CustomListItemProps, Song } from 'commonTypes';
import { CustomListItem } from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

interface SongListItemProps
  extends Omit<CustomListItemProps, 'onClickOpenMenu'> {
  onClick?: () => void;
  song: Song;
}

interface MenuPosition {
  top: number;
  left: number;
}

export const SongListItem = (props: SongListItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const playerContext = useContext(PlayerContext);
  const userContext = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  const { onClick, song } = props;

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
    setMenuPosition(null);
  };

  const handleClickPlayNow = () => {
    if (location.pathname.includes(consts.routes.QUEUE)) {
      playerContext?.playSongInQueue(song);
    } else {
      playerContext?.replaceQueueWithSongs([song]);
    }

    onCloseMenu();
  };

  const handleClickAddToQueue = () => {
    playerContext?.addSongsToEndOfQueue([song]);

    onCloseMenu();
  };

  const handleClickRemoveFromQueue = () => {
    playerContext?.removeSongFromQueue(song.id);

    onCloseMenu();
  };

  const onClickPlay = () => {
    playerContext?.replaceQueueWithSongs([song]);
  };

  const onClickGoToArtist = () => {
    history.push(`${consts.routes.ARTIST}/${song.artist.id}`);
    onCloseMenu();
  };

  const onClickGoToAlbum = () => {
    history.push(`${consts.routes.ALBUM}/${song.album.id}`);
    onCloseMenu();
  };

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${song.label?.id}`);
    onCloseMenu();
  };

  const onClickToggleFavourite = () => {
    userContext?.updateFavourites(song.id);
    onCloseMenu();
  };

  const getFavouriteTitle = () => {
    return userContext?.user?.songFavourites?.find((f) => f.song.id === id)
      ? 'Unfavourite'
      : 'Favourite';
  };

  const onClickAddToPlaylist = (playlistId: string) => () => {
    userContext?.addSongsToPlaylist(playlistId, [song.id]);
  };

  const onClickRemoveFromPlaylist = () => {
    if (id) {
      userContext?.removeSongsFromPlaylist(id, [song.id]);
    }
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

  const makeMenu = () => {
    return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onCloseMenu}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: 200,
          },
        }}
      >
        <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
        <MenuItem
          onClick={
            location.pathname.includes(consts.routes.QUEUE)
              ? handleClickRemoveFromQueue
              : handleClickAddToQueue
          }
        >
          {location.pathname.includes(consts.routes.QUEUE)
            ? 'Remove From Queue'
            : 'Add to Queue'}
        </MenuItem>
        {location.pathname.includes(consts.routes.ALBUM) ? null : (
          <MenuItem onClick={onClickGoToAlbum}>Go to Album</MenuItem>
        )}
        {location.pathname.includes(consts.routes.ARTIST) ? null : (
          <MenuItem onClick={onClickGoToArtist}>Go to Artist</MenuItem>
        )}
        {!location.pathname.includes(consts.routes.LABEL) && song.label ? (
          <MenuItem onClick={onClickGoToLabel}>Go to Label</MenuItem>
        ) : null}

        <MenuItem onClick={onClickToggleFavourite}>
          {getFavouriteTitle()}
        </MenuItem>

        {location.pathname.includes(consts.routes.PLAYLIST) ? (
          <MenuItem onClick={onClickRemoveFromPlaylist}>
            Remove From Playlist
          </MenuItem>
        ) : null}
        {/* eslint-disable-next-line no-self-compare */}
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
