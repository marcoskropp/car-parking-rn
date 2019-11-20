import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import ActionButton from 'react-native-action-button'

import styles from '../../styles/global'

import { index, destroy } from '../../services/People.services'

export const People = ({ navigation }) => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    getPeople()
  }, [])

  const getPeople = async () => {
    setPeople(await index())
  }

  const removePerson = async id => {
    await destroy(id)
    setPeople(await index())
  }

  return (
    <View style={styles.container}>
      <Text>People Screen</Text>
      <FlatList
        data={people}
        renderItem={
          ({ item: { id, name, cpf, phone } }) =>
            <View>
              <Text>{name} - {cpf} - {phone}</Text>
              <Button
                onPress={() => navigation.navigate('UpdatePerson', { id, name, cpf, phone })}
                title='Edit'
              />
              <Button
                onPress={() => removePerson(id)}
                title='Remove'
              />
            </View>
        }
      />
      <ActionButton
        buttonColor='rgb(83, 126, 197)'
        onPress={() => { navigation.navigate('CreatePerson') }}
      />
    </View>
  )
}
