import React, { useContext, useEffect } from 'react';
import { RowContainer, StyledButton } from 'components';
import { Button } from '@material-ui/core';
import { PlayArrow, Pause, SkipPrevious, SkipNext } from '@material-ui/icons';
import { ProgressBar } from 'components';
import { ColumnContainer } from 'components/columnContainer';
import { useHistory } from 'react-router-dom';
import * as helpers from 'helpers';
import { SongArtist, SongTitle } from './styles';
import { PlayerContext } from 'context';

export const Player = () => {
  const playerContext = useContext(PlayerContext);

  const currentSong = playerContext.currentSong;

  const currentState = helpers.hooks.usePlayState(currentSong?.audio ?? new Audio());
  const history = useHistory();

  console.log('currentState', currentState);

  const songTitle = currentSong?.title ?? '';
  const songArtist = currentSong?.artist_name ?? '';

  const onClickArtist = () => {
    history.push(`/artist/${currentSong?.artist_id}`);
  };

  const onClickSong = () => {
    return null;
  };

  const onClickPlay = () => {
    if (currentState !== 'pause') {
      playerContext.playQueue();
    } else {
      playerContext.unPause();
    }
  };

  useEffect(() => {
    if (currentState === 'ended') {
      playerContext.playNextSongInQueue();
    }
  }, [currentState]);

  return (
    <RowContainer width={'100%'}>
      <StyledButton onClick={playerContext.playPreviousSongInQueue}>
        <SkipPrevious />
      </StyledButton>
      <StyledButton>
        {currentState === 'playing' ? <Pause onClick={playerContext.pause} /> : <PlayArrow onClick={onClickPlay} />}
      </StyledButton>
      <StyledButton onClick={playerContext.playNextSongInQueue}>
        <SkipNext />
      </StyledButton>
      <ProgressBar />
      <ColumnContainer>
        <SongTitle onClick={onClickSong}>{songTitle}</SongTitle>
        <SongArtist onClick={onClickArtist}>{songArtist}</SongArtist>
      </ColumnContainer>
    </RowContainer>
  );
};
