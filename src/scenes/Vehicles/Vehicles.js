import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import ActionButton from 'react-native-action-button'

import styles from '../../styles/global'

import { index, destroy } from '../../services/Vehicle.services'

export const Vehicles = ({ navigation }) => {
  const [vehicles, setVehicles] = useState(null)

  useEffect(() => {
    getVehicles()
  })

  const getVehicles = async () => {
    setVehicles(await index())
  }

  const removeVehicle = async id => {
    await destroy(id)
    setVehicles(await index())
  }

  return (
    <View style={styles.container}>
      <Text>Vehicle Screen</Text>
      <FlatList
        data={vehicles}
        renderItem={
          ({ item: { id, plate, description } }) =>
            <View>
              <Text>{plate} - {description}</Text>
              <Button
                onPress={() => navigation.navigate('UpdateVehicle', { id, plate, description })}
                title='Edit'
              />
              <Button
                onPress={() => removeVehicle(id)}
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
