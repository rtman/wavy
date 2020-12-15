import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { FunctionComponent } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useContextSelector } from 'use-context-selector';
import { Flex } from './flex';
import 'react-h5-audio-player/lib/styles.css';
// import 'css/react-h5-audio-player.css';
import { Player } from './player';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${consts.drawer.width}px)`,
        marginLeft: 240,
      },
      top: 'auto',
      bottom: 0,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
    grow: {
      flexGrow: 1,
    },
  })
);

export const BottomBar: FunctionComponent = (props) => {
  const classes = useStyles();
  const currentSong = useContextSelector(
    PlayerContext,
    (values) => values?.currentSong
  );

  console.log('*debug* bottomBar currentSong?.urlHigh', currentSong?.urlHigh);

  return (
    <AppBar position="fixed" color="secondary" className={classes.appBar}>
      <Toolbar>
        <div className={classes.grow} />
        {props.children}
        <Flex flexDirection="column" fullWidth={true}>
          {/* <AudioPlayer
            src={currentSong?.urlHigh}
            onClickPrevious={playPreviousSongInQueue}
            onClickNext={playNextSongInQueue}
            showSkipControls={true}
            showJumpControls={false}
            showFilledVolume={true}
            layout="horizontal-reverse"
            customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
            customProgressBarSection={[
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.DURATION,
              // RHAP_UI.VOLUME,
            ]}
          /> */}
          <Player currentSong={currentSong} />
        </Flex>
      </Toolbar>
    </AppBar>
  );
};
