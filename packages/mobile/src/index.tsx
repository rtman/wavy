import React, { ReactNode, useState, useEffect } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, View } from 'react-native';
// import StyledComponets from 'styled-components';
import TrackPlayer, { usePlaybackState, useTrackPlayerEvents, State } from 'react-native-track-player';
import storage from '@react-native-firebase/storage';

export const App = (): ReactNode => {
  const [trackQueue, setQueue] = useState([]);
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  const [loading, setLoading] = useState(false);
  const playbackState = usePlaybackState();
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

  const initTracks = [
    {
      id: 'andras-gold-coast-house-mix', // Must be a string, required
      url: 'gs://groov-development-ddc9d.appspot.com/András - B1. Gold Coast (House Mix).mp3', // Load media from the network
      // url: 'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).mp3?alt=media&token=fb720a49-a656-47fc-9ab0-340924f48424',
      // url: require('./avaritia.ogg'), // Load media from the app bundle
      // url: 'file:///storage/sdcard0/Music/avaritia.wav' // Load media from the file system
      title: 'Gold Coast (House Mix)',
      artist: 'András',
      album: 'Untitled',
      genre: 'House',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg'
      // artwork: 'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/andras-untitled.jpg?alt=media&token=41452af7-dfec-4c7c-abf5-edfe8f56bbd9'
    },
    {
      id: 'raf-reza-exit-point', // Must be a string, required
      url: 'gs://groov-development-ddc9d.appspot.com/B2_Exit Point.mp3', // Load media from the network
      // url: 'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/B2_Exit%20Point.mp3?alt=media&token=b7dab356-8989-4251-a4a3-2b7302354595',
      title: 'Exit Point',
      artist: 'Raf Reza',
      album: 'Moods from the Multiverse',
      genre: 'Space',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png' // Load artwork from the network
      // artwork: 'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH013%20art.png?alt=media&token=3be2fff8-e75f-4dba-a18f-0ac6e7a850e5'
    }
  ];

  useEffect(() => {
    const loadTrackQueue = async () => {
      console.log('loadTrackQueue hook');
      await TrackPlayer.setupPlayer();

      const getHttpUrl = async (googleStorageUri: string) => {
        const fileRef = storage().refFromURL(googleStorageUri);
        const url = await fileRef.getDownloadURL();
        return url;
      };

      const trackUrlPromises = initTracks.map((track) => getHttpUrl(track.url));
      const artworkUrlPromises = initTracks.map((track) => getHttpUrl(track.artwork));
      const trackUrls = await Promise.all(trackUrlPromises);
      const artworkUrls = await Promise.all(artworkUrlPromises);

      for (let i = 0; i < initTracks.length; i++) {
        initTracks[i].url = trackUrls[i];
        initTracks[i].artwork = artworkUrls[i];
      }

      await TrackPlayer.add(initTracks);
      const queue = await TrackPlayer.getQueue();
      setQueue(queue);
    };

    loadTrackQueue();

    return () => {
      // seems necessary to stop from loading duplicate info in the queue on remount (save + fast refresh)
      TrackPlayer.reset();
      setQueue([]);
    };
  }, []);

  useEffect(() => {
    const onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {
      console.log('onTrackChange hook');

      const track = await TrackPlayer.getTrack(data.nextTrack);
      setTrackArtist(track.artist);
      setTrackTitle(track.title);
      setTrackArtwork(track.artwork);
    });
    return () => {
      onTrackChange.remove();
    };
  }, []);

  const renderQueue = () => {
    return trackQueue.map((track) => {
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

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <View>{loading ? <Text>'loading'</Text> : renderQueue()}</View>
      <Image
        style={{ height: 300, width: 300 }}
        source={{
          uri: loading ? 'loading' : trackArtwork
        }}
      />
      <Text>{loading ? 'loading' : `${trackArtist} - ${trackTitle}`}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
        <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            playbackState === State.Playing ? TrackPlayer.pause() : TrackPlayer.play();
          }}
        >
          <Text>{playbackState === State.Playing ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            TrackPlayer.skipToNext();
          }}
        >
          <Text>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => TrackPlayer.reset()}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
