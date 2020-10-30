import { Menu, MenuItem } from '@material-ui/core';
import { IdParam, MenuPosition, Song } from 'commonTypes';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { useContext } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

interface SongUtils {
  data: Song;
  anchorEl: null | HTMLElement;
  menuPosition: MenuPosition | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const SongUtils = (props: SongUtils) => {
  const playerContext = useContext(PlayerContext);
  const userContext = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const { id } = useParams<IdParam>();

  const { data, anchorEl, menuPosition, setAnchorEl } = props;

  const onCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClickPlayNow = () => {
    if (location.pathname.includes(consts.routes.QUEUE)) {
      playerContext?.playSongInQueue(data);
    } else {
      playerContext?.replaceQueueWithSongs([data]);
    }

    onCloseMenu();
  };

  const handleClickAddToQueue = () => {
    playerContext?.addSongsToEndOfQueue([data]);

    onCloseMenu();
  };

  const handleClickRemoveFromQueue = () => {
    playerContext?.removeSongFromQueue(data.id);

    onCloseMenu();
  };

  const onClickGoToArtist = () => {
    history.push(`${consts.routes.ARTIST}/${data.artist.id}`);
    onCloseMenu();
  };

  const onClickGoToAlbum = () => {
    history.push(`${consts.routes.ALBUM}/${data.album.id}`);
    onCloseMenu();
  };

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${data.label?.id}`);
    onCloseMenu();
  };

  const onClickToggleFavourite = () => {
    userContext?.updateFavourites(data.id);
    onCloseMenu();
  };

  const getFavouriteTitle = () => {
    return userContext?.user?.songFavourites?.find((f) => f.song.id === data.id)
      ? 'Unfavourite'
      : 'Favourite';
  };

  const onClickAddToPlaylist = (playlistId: string) => () => {
    userContext?.addSongsToPlaylist(playlistId, [data.id]);
  };

  const onClickRemoveFromPlaylist = () => {
    if (id) {
      userContext?.removeSongsFromPlaylist(id, [data.id]);
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
        {!location.pathname.includes(consts.routes.LABEL) && data.label ? (
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
