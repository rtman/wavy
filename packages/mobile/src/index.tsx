import React, { ReactNode, useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, View } from 'react-native';
// import StyledComponets from 'styled-components';
import TrackPlayer from 'react-native-track-player';

export const App = (): ReactNode => {
  const trackQueue = [];
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    // this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {

    //   const track = await TrackPlayer.getTrack(data.nextTrack);

    // });
    const queueTracks = async () => {
      //  TrackPlayer.setupPlayer().then(() => {
      //   // The player is ready to be used
      // });

      await TrackPlayer.setupPlayer();

      const tracks = [
        {
          id: 'andra-gold-coast-house-mix', // Must be a string, required

          // url: 'gs://groov-development-ddc9d.appspot.com/András - B1. Gold Coast (House Mix).mp3', // Load media from the network
          url:
            'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).mp3?alt=media&token=fb720a49-a656-47fc-9ab0-340924f48424',
          // url: require('./avaritia.ogg'), // Load media from the app bundle
          // url: 'file:///storage/sdcard0/Music/avaritia.wav' // Load media from the file system

          title: 'Gold Coast (House Mix)',
          artist: 'András',
          album: 'Untitled',
          genre: 'House',
          date: '2014-05-20T07:00:00+00:00', // RFC 3339

          // artwork: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg' // Load artwork from the network
          artwork:
            'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/andras-untitled.jpg?alt=media&token=41452af7-dfec-4c7c-abf5-edfe8f56bbd9'
          // artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
          // artwork: 'file:///storage/sdcard0/Downloads/artwork.png' // Load artwork from the file system
        },
        {
          id: 'raf-reza-exit-point', // Must be a string, required

          // url: 'gs://groov-development-ddc9d.appspot.com/András - B1. Gold Coast (House Mix).mp3', // Load media from the network
          url:
            'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/B2_Exit%20Point.mp3?alt=media&token=b7dab356-8989-4251-a4a3-2b7302354595',
          // url: require('./avaritia.ogg'), // Load media from the app bundle
          // url: 'file:///storage/sdcard0/Music/avaritia.wav' // Load media from the file system

          title: 'Exit Point',
          artist: 'Raf Reza',
          album: 'Mood from the Multiverse',
          genre: 'Space',
          date: '2014-05-20T07:00:00+00:00', // RFC 3339

          // artwork: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg' // Load artwork from the network
          artwork:
            'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH013%20art.png?alt=media&token=3be2fff8-e75f-4dba-a18f-0ac6e7a850e5'
          // artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
          // artwork: 'file:///storage/sdcard0/Downloads/artwork.png' // Load artwork from the file system
        }
      ];

      // TrackPlayer.add([track]).then(function() {
      //   // The tracks were added
      //   TrackPlayer.play();
      // });

      await TrackPlayer.add(tracks);
      // const trackQueue = await TrackPlayer.getQueue();
    };
    queueTracks();
  }, []);

  React.useEffect(() => {
    const getTrack = async () => {
      try {
        setLoading(true);
        const id = await TrackPlayer.getCurrentTrack();
        const track = await TrackPlayer.getTrack(id);
        // const response = await fetch(
        //   `https://www.googleapis.com/books/v1/volumes?q=${searchBook}`
        // );

        // const json = await response.json();
        // console.log(json);
        console.log('getTrack.track', track);
        setTrackTitle(track.title);
        setTrackArtwork(track.artwork);
        setTrackArtist(track.artist);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    // if (searchBook !== "") {
    //   fetchBookList();
    // }
    getTrack();
  }, []);

  const getCurrentTrack = async () => {
    const id = await TrackPlayer.getCurrentTrack();
    const track = await TrackPlayer.getTrack(id);
    return track;
  };

  const getArtwork = async () => {
    const track = await TrackPlayer.getCurrentTrack();
    return track.artwork;
  };

  const getTrackQueue = async () => {
    const queue = await TrackPlayer.getQueue();
    console.warn('queue', queue);
    return queue;
  };

  console.log('trackArtist', trackArtist);
  console.log('trackTitle', trackTitle);
  console.log('trackArtwork', trackArtwork);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Image
        style={{ height: 300, width: 300 }}
        source={{
          uri: loading ? 'loading' : trackArtwork
        }}
      />
      <Text>{loading ? 'loading' : trackTitle}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
        <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => TrackPlayer.play()}>
          <Text>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => TrackPlayer.pause()}>
          <Text>Pause</Text>
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
