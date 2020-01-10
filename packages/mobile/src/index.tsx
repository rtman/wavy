import React, { ReactNode } from 'react';
import { SafeAreaView, Text } from 'react-native';
// import StyledComponets from 'styled-components';
// import TrackPlayer from 'react-native-track-player';
// import TrackPlayer from '../../../node_modules/react-native-track-player';

export const App = (): ReactNode => {
  React.useEffect(() => {
    const playTrack = async () => {
      //  TrackPlayer.setupPlayer().then(() => {
      //   // The player is ready to be used
      // });

      await TrackPlayer.setupPlayer();

      const track = {
        id: 'andra-gold-coast-house-mix', // Must be a string, required

        url: 'gs://groov-development-ddc9d.appspot.com/András - B1. Gold Coast (House Mix).mp3', // Load media from the network
        // url: require('./avaritia.ogg'), // Load media from the app bundle
        // url: 'file:///storage/sdcard0/Music/avaritia.wav' // Load media from the file system

        title: 'Gold Coast (House Mix)',
        artist: 'András',
        album: 'Untitled',
        genre: 'House',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339

        artwork: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg' // Load artwork from the network
        // artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
        // artwork: 'file:///storage/sdcard0/Downloads/artwork.png' // Load artwork from the file system
      };

      // TrackPlayer.add([track]).then(function() {
      //   // The tracks were added
      //   TrackPlayer.play();
      // });

      await TrackPlayer.add([track]);
      TrackPlayer.play();
    };
    playTrack();
  }, []);

  return (
    <SafeAreaView>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};
