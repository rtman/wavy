import * as consts from 'consts';
import * as helpers from 'helpers';
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons';
import { PlayerContext } from 'context';
import { ProgressBar } from 'components';
import { RowContainer, StyledButton } from 'components';
import { SongArtist, SongInfoContainer, SongTitle } from './styles';
import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';

export const Player = () => {
  const playerContext = useContext(PlayerContext);
  const [filteredMediaState, setFilteredMediaState] = useState<string>('');

  const currentSong = playerContext?.currentSong;
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
    history.push(`${consts.routes.ARTIST}/${currentSong?.artist.id}`);
  };

  const onClickSong = () => {
    return null;
  };

  const onClickPlay = () => {
    if (filteredMediaState !== 'pause') {
      playerContext?.playQueue();
    } else {
      playerContext?.unPause();
    }
  };

  useEffect(() => {
    if (filteredMediaState === 'ended') {
      playerContext?.playNextSongInQueue();
    }
    // TODO: Re enable and fix deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredMediaState]);
  // }, [filteredMediaState, playerContext]);

  return (
    <RowContainer width={'100%'}>
      <StyledButton onClick={playerContext?.playPreviousSongInQueue}>
        <SkipPrevious />
      </StyledButton>
      <StyledButton>
        {filteredMediaState === 'playing' ? (
          <Pause onClick={playerContext?.pause} />
        ) : (
          <PlayArrow onClick={onClickPlay} />
        )}
      </StyledButton>
      <StyledButton onClick={playerContext?.playNextSongInQueue}>
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
