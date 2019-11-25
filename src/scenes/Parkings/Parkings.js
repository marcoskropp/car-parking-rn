import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import ActionButton from 'react-native-action-button'
import Loader from '../../components/Loader';
import Button from '../../components/Button';

import styles from '../../styles/global'

import { show } from '../../services/Sections.services'
import { destroy } from '../../services/Parkings.services'

export const Parkings = ({ navigation }) => {
  const { state: { params: { id } } } = navigation

  const [section, setSection] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getSection()
  }, [])

  const getSection = async () => {
    setLoading(true)
    setSection(await show(id))
    setLoading(false)
  }

  const removeVehicle = async parkingId => {
    await destroy(parkingId)

    getSection()
  }

  if (loading) return <Loader />

  return (
    <View style={styles.container}>
      <Text>Parkings Screen - {section.name} - Vacancies: {section.vacancies}</Text>
      <FlatList
        data={section.parkings}
        renderItem={
          ({ item: { id: parkingId, car_id } }) =>
            <View>
              <Text>ID: {car_id}</Text>
              <Button
                onPress={() => navigation.navigate('ShowVehicle', { car_id, routeBack: 'Sections' })}
                title='Show Vehicle'
              />
              <Button
                onPress={() => removeVehicle(parkingId)}
                title='Remove Vehicle'
              />
            </View>
        }
      />
      <View style={styles.formGroup}>
        <Button
          onPress={() => navigation.navigate('Sections')}
          style={styles.btnSecondary}
          title="Back"
        />
      </View>
      <ActionButton
        buttonColor='rgb(83, 126, 197)'
        onPress={() => { navigation.navigate('CreateParking', { sectionId: id }) }}
      />
    </View>
  )
}
