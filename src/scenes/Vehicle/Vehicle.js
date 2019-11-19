import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import ActionButton from 'react-native-action-button'

import styles from '../../styles/global'

export const Vehicle = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Vehicle Screen</Text>
      <FlatList
        data={[
          { plate: 'OYK-6651', description: 'Description OYK' },
          { plate: 'KRP-2266', description: 'Description KRP' },
          { plate: 'TOP-1238', description: 'Description TOP' }
        ]}
        renderItem={
          ({ item: { plate, description } }) =>
            <View>
              <Text>{plate} - {description}</Text>
              <Button
                onPress={() => navigation.navigate('UpdateVehicle')}
                title='Edit'
              />
              <Button
                onPress={() => console.log('remove')}
                title='Remove'
              />
            </View>
        }
      />
      <ActionButton
        buttonColor='rgb(83, 126, 197)'
        onPress={() => { navigation.navigate('CreateVehicle') }}
      />
    </View>
  )
}
