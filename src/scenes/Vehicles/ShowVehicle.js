import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import styles from '../../styles/global'

import { show as showVehicle } from '../../services/Vehicle.services'
import { show as showPerson } from '../../services/People.services'

export const ShowVehicle = ({ navigation }) => {
  const { state: { params: { car_id, routeBack } } } = navigation

  const [vehicle, setVehicle] = useState({})
  const [person, setPerson] = useState({})

  useEffect(() => {
    getVehicle()
  }, [])

  useEffect(() => {
    getPerson()
  }, [vehicle])


  const getVehicle = async () => {
    setVehicle(await showVehicle(car_id))
  }

  const getPerson = async () => {
    setPerson(await showPerson(vehicle.person_id))
  }

  return (
    <View style={styles.container}>
      <Text>Owner</Text>
      <TextInput
        value={person.name}
        editable={false}
      />
      <Text>CPF</Text>
      <TextInput
        value={person.cpf}
        editable={false}
      />
      <Text>Plate</Text>
      <TextInput
        value={vehicle.plate}
        editable={false}
      />
      <Text>Description</Text>
      <TextInput
        value={vehicle.description}
        editable={false}
      />
      <Button
        onPress={() => navigation.navigate(routeBack)}
        title='Back'
      />
    </View>
  )
}
