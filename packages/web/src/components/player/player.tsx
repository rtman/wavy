import React, { useContext } from 'react';
import { RowContainer } from 'components';
import { PlayArrow, Pause, SkipPrevious, SkipNext } from '@material-ui/icons';
import { ProgressBar } from 'components';
import { ColumnContainer } from 'components/columnContainer';
import { useHistory } from 'react-router-dom';
import * as helpers from 'helpers';
import { SongArtist, SongTitle } from './styles';
import { PlayerContext } from 'context';

export const Player = () => {
  // const { audio, currentSong } = props;
  const playerContext = useContext(PlayerContext);

  const audio = playerContext.audio;
  const currentSong = playerContext.currentSong;

  const currentState = helpers.hooks.usePlayState(audio);
  const history = useHistory();

  const play = () => {
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  console.log('currentState', currentState);

  const duration = currentSong?.duration ?? 0;
  const songTitle = currentSong?.title ?? '';
  const songArtist = currentSong?.artist_name ?? '';

  const onClickArtist = () => {
    history.push(`/artist/${currentSong?.artist_id}`);
  };

  const onClickSong = () => {
    return null;
  };

  return (
    <RowContainer width={'100%'}>
      <SkipPrevious />
      {currentState === 'playing' ? <Pause onClick={pause} /> : <PlayArrow onClick={play} />}
      <SkipNext />
      <ProgressBar audio={audio} duration={duration} />
      <ColumnContainer>
        <SongTitle onClick={onClickSong}>{songTitle}</SongTitle>
        <SongArtist onClick={onClickArtist}>{songArtist}</SongArtist>
      </ColumnContainer>
    </RowContainer>
  );
};
