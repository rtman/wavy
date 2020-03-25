import { StyledButton, StyledListItemText } from 'components';
import * as consts from 'consts';
import React, { useContext, useEffect } from 'react';
import * as helpers from 'helpers';
import { Avatar, ButtonBase, ListItem, ListItemAvatar, ListItemSecondaryAction, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { PlayerContext } from 'context';
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';

interface PlaylistRowProps {
  playlist: Playlist;
  passedOnClickPlaylist?: (playlist: Playlist) => Promise<void>;
}

export const PlaylistRow = (props: PlaylistRowProps) => {
  const { playlist, passedOnClickPlaylist } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const imageUrl = helpers.hooks.useGetStorageHttpUrl(playlist.image);
  const playerContext = useContext(PlayerContext);
  const history = useHistory();
  const [submitSearch, { loading, error, data }] = useLazyQuery(consts.queries.PLAYLIST_BY_ID);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlayNow = () => {
    submitSearch({ variables: { id: playlist.id } });
    handleMenuClose();
  };

  useEffect(() => {
    if (!loading && data?.playlistById) {
      playerContext.replaceQueueWithSongs(data?.playlistById?.songs);
    }
  }, [loading, data]);

  const onClickGoToPlaylist = () => {
    history.push(`/playlist/${playlist.id}`);
    handleMenuClose();
  };

  const resolvedOnClick = typeof passedOnClickPlaylist === 'function' ? passedOnClickPlaylist : handleClickPlayNow;

  // console.log('location', location);
  // console.log('song', song);

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <ButtonBase onClick={() => resolvedOnClick(playlist)}>
            <Avatar variant="square" src={imageUrl} />
          </ButtonBase>
        </ListItemAvatar>
        {/* <StyledButton onClick={() => onClickGoToArtist(song)}> */}
        <StyledListItemText
          primary={playlist.title}
          secondary={playlist.description}
          // onClick={secondaryStyle ? () => onClickSong() : () => onClickGoToArtist()}
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
        <MenuItem onClick={onClickGoToPlaylist}>Go to Playlist</MenuItem>
      </Menu>
    </>
  );
};
