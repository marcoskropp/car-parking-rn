import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Button({onPress, title, style}) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={style} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});
