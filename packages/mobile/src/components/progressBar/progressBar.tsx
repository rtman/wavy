import React from 'react';
import { useTrackPlayerProgress } from 'react-native-track-player';
import { StyleSheet, View } from 'react-native';

export const ProgressBar = () => {
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.progress}>
      <View style={{ flex: progress.position, backgroundColor: 'red' }} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'grey'
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
    flexDirection: 'row'
  }
});
