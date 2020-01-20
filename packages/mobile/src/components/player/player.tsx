import React, { useState } from 'react';
import TrackPlayer, { Event, State, usePlaybackState, useTrackPlayerEvents, useTrackPlayerProgress } from 'react-native-track-player';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as components from 'components';

export const Player = (props: PlayerProps) => {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  const [trackDuration, setTrackDuration] = useState(0);

  useTrackPlayerEvents(['playback-track-changed'], async (event: any) => {
    if (event.type === Event.PlaybackTrackChanged) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setTrackTitle(track.title);
      setTrackArtist(track.artist);
      setTrackArtwork(track.artwork);
      setTrackDuration(track.duration);
    }
  });

  const { onNext, onPrevious, onTogglePlayback } = props;

  let middleButtonText = 'Play';

  if (playbackState === State.Playing || playbackState === State.Buffering) {
    middleButtonText = 'Pause';
  }

  return (
    <View style={styles.card}>
      <Image style={styles.cover} source={{ uri: trackArtwork }} />
      <components.ProgressBar duration={trackDuration} />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <components.ControlButton title={'<<'} onPress={onPrevious} />
        <components.ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <components.ControlButton title={'>>'} onPress={onNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 1 }
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: 'grey'
  },
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row'
  },
  title: {
    marginTop: 10
  },
  artist: {
    fontWeight: 'bold'
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row'
  },
  controlButtonContainer: {
    flex: 1
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center'
  }
});
