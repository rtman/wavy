import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
// import StyledComponets from 'styled-components';
import TrackPlayer, { usePlaybackState, State } from 'react-native-track-player';
import storage from '@react-native-firebase/storage';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import * as components from 'components';

const SONGS = gql`
  {
    songs {
      title
      artist
      album
      genre
      url
      artwork
      date
    }
  }
`;

export const Home = () => {
  const [trackQueue, setQueue] = useState([]);
  // const [loading, setLoading] = useState(false);
  const playbackState = usePlaybackState();
  const { loading, error, data } = useQuery(SONGS);
  // useTrackPlayerEvents(['playback-track-changed'], async (event) => {
  //   console.log('useTrackPlayerEvents - event', event);
  //   if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
  //     console.log('track changed hook');
  //     const track = await TrackPlayer.getTrack(event.nextTrack);
  //     setTrackTitle(track.title);
  //     setTrackArtist(track.artist);
  //     setTrackArtwork(track.artwork);
  //   }
  // });

  useEffect(() => {
    const loadTrackQueue = async () => {
      console.log('loadTrackQueue hook');
      await TrackPlayer.setupPlayer();

      const getHttpUrl = async (googleStorageUri: string) => {
        const fileRef = storage().refFromURL(googleStorageUri);
        const url = await fileRef.getDownloadURL();
        return url;
      };

      if (!data) {
        return;
      }
      const { songs } = data;

      const trackUrlPromises = songs.map((track: Track) => getHttpUrl(track.url));
      const artworkUrlPromises = songs.map((track: Track) => getHttpUrl(track.artwork));
      const trackUrls = await Promise.all(trackUrlPromises);
      const artworkUrls = await Promise.all(artworkUrlPromises);

      const resolvedSongs = [];
      for (let i = 0; i < songs.length; i++) {
        let { __typename, ...song } = songs[i];
        song.id = `${song.artist}-${song.title}`;
        song.url = trackUrls[i];
        song.artwork = artworkUrls[i];
        resolvedSongs.push(song);
      }

      console.log('resolvedSongs', resolvedSongs);

      await TrackPlayer.add(resolvedSongs);
      const queue = await TrackPlayer.getQueue();
      setQueue(queue);
    };

    // if (!loading) {
    loadTrackQueue();
    // }

    return () => {
      // seems necessary to stop from loading duplicate info in the queue on remount (save + fast refresh)
      TrackPlayer.reset();
      setQueue([]);
    };
  }, [data]);

  const renderQueue = () => {
    return trackQueue.map((track: Track) => {
      const handleOnPress = async () => {
        await TrackPlayer.pause();
        await TrackPlayer.skip(track.id);
        TrackPlayer.play();
      };
      return (
        <TouchableOpacity onPress={handleOnPress}>
          <Text>
            {track.artist} - {track.title}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  console.log('playbackState', playbackState);
  console.log('graphql error', error);

  const skipToNext = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (_) {}
  };

  const skipToPrevious = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (_) {}
  };

  const togglePlayBack = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      //   await TrackPlayer.add(playlistData);
      //   await TrackPlayer.add({
      //     id: 'local-track',
      //     url: localTrack,
      //     title: 'Pure (Demo)',
      //     artist: 'David Chavez',
      //     artwork: 'https://picsum.photos/200'
      //   });
      //   await TrackPlayer.play();
      console.log('togglePlayback currentTrack is null');
    } else {
      console.log('togglePlayback.playbackState', playbackState);
      if (playbackState === State.Paused || playbackState === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <View>{loading ? <Text>'loading'</Text> : renderQueue()}</View>
      <components.Player onNext={skipToNext} onPrevious={skipToPrevious} onTogglePlayback={togglePlayBack} />
      <Text>{error ? error.message : null}</Text>
    </SafeAreaView>
  );
};
