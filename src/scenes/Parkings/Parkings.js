import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import ActionButton from 'react-native-action-button'

import styles from '../../styles/global'

import { show } from '../../services/Sections.services'

export const Parkings = ({ navigation }) => {
  const { state: { params: { id } } } = navigation

  const [section, setSection] = useState({})

  useEffect(() => {
    getSection()
  }, [])

  const getSection = async () => {
    setSection(await show(id))
  }

  return (
    <View style={styles.container}>
      <Text>Parkings Screen - {section.name} - Vacancies: {section.vacancies}</Text>
      <FlatList
        data={section.parkings}
        renderItem={
          ({ item: { car_id } }) =>
            <View>
              <Text>ID: {car_id}</Text>
              <Button
                onPress={() => navigation.navigate('ShowVehicle', { car_id, routeBack: 'Parkings' })}
                title='Show Vehicle'
              />
              <Button
                onPress={() => console.log('top')}
                title='Remove Vehicle'
              />
            </View>
        }
      />
      <Button title='Back' onPress={() => navigation.navigate('Sections')} />
      <ActionButton
        buttonColor='rgb(83, 126, 197)'
        onPress={() => { navigation.navigate('CreateParking') }}
      />
    </View>
  )
}
