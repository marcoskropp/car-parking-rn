import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from '../../styles/global'

Icon.loadFont()

export const Home = () => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Icon name="ios-person" size={20} />
  </View>
)