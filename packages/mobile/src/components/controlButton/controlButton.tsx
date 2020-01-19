import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const ControlButton = ({ title, onPress }: ControlButton) => {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  controlButtonContainer: {
    flex: 1
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center'
  }
});
