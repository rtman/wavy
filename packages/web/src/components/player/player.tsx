import React, { useContext, useEffect, useState } from 'react';
import { RowContainer, StyledButton } from 'components';
import { PlayArrow, Pause, SkipPrevious, SkipNext } from '@material-ui/icons';
import { ProgressBar } from 'components';
import { useHistory } from 'react-router-dom';
import * as helpers from 'helpers';
import { SongArtist, SongInfoContainer, SongTitle } from './styles';
import { PlayerContext } from 'context';

export const Player = () => {
  const playerContext = useContext(PlayerContext);
  const [filteredMediaState, setFilteredMediaState] = useState<string>('');

  const currentSong = playerContext.currentSong;
  const allMediaStates = helpers.hooks.useMediaState(
    currentSong?.audio ?? new Audio()
  );

  useEffect(() => {
    setFilteredMediaState(
      helpers.filterMediaStates(allMediaStates, filteredMediaState)
    );
  }, [allMediaStates, filteredMediaState]);

  const history = useHistory();
  // console.log('playerContext currentSong', currentSong);
  const songTitle = currentSong?.title ?? '';
  const songArtist = currentSong?.artist?.name ?? '';

  const onClickArtist = () => {
    history.push(`/artist/${currentSong?.artist.id}`);
  };

  const onClickSong = () => {
    return null;
  };

  const onClickPlay = () => {
    if (filteredMediaState !== 'pause') {
      playerContext.playQueue();
    } else {
      playerContext.unPause();
    }
  };

  useEffect(() => {
    if (filteredMediaState === 'ended') {
      playerContext.playNextSongInQueue();
    }
  }, [filteredMediaState]);
  // }, [filteredMediaState, playerContext]);

  return (
    <RowContainer width={'100%'}>
      <StyledButton onClick={playerContext.playPreviousSongInQueue}>
        <SkipPrevious />
      </StyledButton>
      <StyledButton>
        {filteredMediaState === 'playing' ? (
          <Pause onClick={playerContext.pause} />
        ) : (
          <PlayArrow onClick={onClickPlay} />
        )}
      </StyledButton>
      <StyledButton onClick={playerContext.playNextSongInQueue}>
        <SkipNext />
      </StyledButton>
      <ProgressBar />
      <SongInfoContainer>
        <SongTitle onClick={onClickSong}>{songTitle}</SongTitle>
        <SongArtist onClick={onClickArtist}>{songArtist}</SongArtist>
      </SongInfoContainer>
    </RowContainer>
  );
};
