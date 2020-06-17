import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  controlButtonContainer: {
    flex: 1,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export const ControlButton: React.FunctionComponent<ControlButton> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
