import * as consts from 'consts';
import {
  Avatar,
  ButtonBase,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { PlayerContext, UserContext } from 'context';
import { SongWithAudio } from 'screens/home/types';
import { StyledButton, StyledListItemText } from 'components';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { useContext, useState } from 'react';

interface SongRowProps {
  song: SongWithAudio;
  passedOnClickSong?: (song: SongWithAudio) => Promise<void>;
  secondaryStyle?: boolean;
  enableGoToArtist?: boolean;
}

interface MenuPosition {
  top: number;
  left: number;
}

export const SongRow = (props: SongRowProps) => {
  const { song, passedOnClickSong, secondaryStyle } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const playerContext = useContext(PlayerContext);
  const userContext = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuPosition(null);
  };

  const handleClickPlayNow = () => {
    if (location.pathname.includes(consts.routes.QUEUE)) {
      playerContext?.playSongInQueue(song);
    } else {
      playerContext?.replaceQueueWithSongs([song]);
    }

    handleMenuClose();
  };

  const handleClickAddToQueue = () => {
    playerContext?.addSongsToEndOfQueue([song]);

    handleMenuClose();
  };

  const handleClickRemoveFromQueue = () => {
    playerContext?.removeSongFromQueue(song.id);

    handleMenuClose();
  };

  const onClickSong = () => {
    playerContext?.replaceQueueWithSongs([song]);
  };

  const onClickGoToArtist = () => {
    history.push(`${consts.routes.ARTIST}/${song.artist.id}`);
    handleMenuClose();
  };

  const onClickGoToAlbum = () => {
    history.push(`${consts.routes.ALBUM}/${song.album.id}`);
    handleMenuClose();
  };

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${song.label?.id}`);
    handleMenuClose();
  };

  const resolvedOnClick =
    typeof passedOnClickSong === 'function' ? passedOnClickSong : onClickSong;

  const onClickToggleFavourite = () => {
    userContext?.updateFavourites(song.id);
    handleMenuClose();
  };

  const getFavouriteTitle = () => {
    return userContext?.user?.favourites?.find((f) => f.song.id === song.id)
      ? 'Unfavourite'
      : 'Favourite';
  };

  // console.log('location', location);
  // console.log('song', song);

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

  // console.log('songRow song', song);

  return (
    <>
      <ListItem alignItems="flex-start" dense={true}>
        {secondaryStyle ? null : (
          <ListItemAvatar>
            <ButtonBase onClick={() => resolvedOnClick(song)}>
              <Avatar variant="square" src={song.imageUrl} />
            </ButtonBase>
          </ListItemAvatar>
        )}
        {/* <StyledButton onClick={() => onClickGoToArtist(song)}> */}
        <StyledListItemText
          primary={song.title}
          secondary={
            <>
              {secondaryStyle ? null : (
                <Typography variant="body2">{song.artist.name}</Typography>
              )}
              <Typography variant="caption">
                {song.label?.name ?? null}
              </Typography>
            </>
          }
          onClick={
            secondaryStyle ? () => onClickSong() : () => onClickGoToArtist()
          }
        />
        {/* </StyledButton> */}
        <ListItemSecondaryAction>
          <StyledButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
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
    </>
  );
};
