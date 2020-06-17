import { StyledButton, StyledListItemText } from 'components';
import * as consts from 'consts';
import React, { useContext, useEffect } from 'react';
import {
  Avatar,
  ButtonBase,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { PlayerContext } from 'context';
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import { Playlist, QueryPlaylistByIdArgs } from 'types';

interface PlaylistRowProps {
  playlist: Playlist;
  passedOnClickPlaylist?: (playlist: Playlist) => Promise<void>;
}

interface PlaylistByIdData {
  playlistById: Playlist;
}

export const PlaylistRow = (props: PlaylistRowProps) => {
  const { playlist, passedOnClickPlaylist } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const playerContext = useContext(PlayerContext);
  const history = useHistory();
  const [
    getPlaylistById,
    { loading: queryLoading, data: queryData },
  ] = useLazyQuery<PlaylistByIdData, QueryPlaylistByIdArgs>(
    consts.queries.PLAYLIST_BY_ID
  );

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // TODO: fix, this isnt setup right
  const handleClickPlayNow = () => {
    getPlaylistById({ variables: { id: playlist.id } });
    handleMenuClose();
  };

  const playlistImageUrl = playlist.imageUrl ?? '';
  const playlistTitle = playlist.title ?? '';
  const playlistDescription = playlist.description ?? '';
  const playlistId = playlist.id ?? '';

  const playlistSongs = queryData?.playlistById?.songs ?? [];

  useEffect(() => {
    if (!queryLoading && playlistSongs) {
      const songs = playlistSongs.map((s) => s.song);
      playerContext.replaceQueueWithSongs(songs);
    }
    // TODO: Re enable and fix deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryLoading, queryData]);
  // }, [queryLoading, queryData, playerContext]);

  const onClickGoToPlaylist = () => {
    history.push(`${consts.routes.PLAYLIST}/${playlistId}`);
    handleMenuClose();
  };

  const resolvedOnClick =
    typeof passedOnClickPlaylist === 'function'
      ? passedOnClickPlaylist
      : handleClickPlayNow;

  // console.log('location', location);
  // console.log('song', song);

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <ButtonBase onClick={() => resolvedOnClick(playlist)}>
            <Avatar variant="square" src={playlistImageUrl} />
          </ButtonBase>
        </ListItemAvatar>
        {/* <StyledButton onClick={() => onClickGoToArtist(song)}> */}
        <StyledListItemText
          primary={playlistTitle}
          secondary={playlistDescription}
          // onClick={secondaryStyle ? () => onClickSong() : () => onClickGoToArtist()}
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
      >
        <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
        <MenuItem onClick={onClickGoToPlaylist}>Go to Playlist</MenuItem>
      </Menu>
    </>
  );
};
