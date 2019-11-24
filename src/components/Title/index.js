import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Title({text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 15,
    marginBottom: 20,
    fontSize: 18,
  },
});
