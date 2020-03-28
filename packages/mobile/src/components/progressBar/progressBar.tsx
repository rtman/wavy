import React, { useEffect, useState } from 'react';
import TrackPlayer from 'react-native-track-player';
import { StyleSheet, View } from 'react-native';

export const ProgressBar = (props: any) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      let position_ = await TrackPlayer.getPosition();
      setPosition(position_);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log('progressBar.position', position);
  console.log('progressBar.props.duration', props.duration);

  return (
    <View style={styles.progress}>
      <View style={{ flex: position, backgroundColor: 'red' }} />
      <View
        style={{
          flex: props.duration - position,
          backgroundColor: 'grey',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
});
