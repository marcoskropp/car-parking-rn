import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Button({children, onPress, style}) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
