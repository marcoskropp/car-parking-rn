import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import ActionButton from 'react-native-action-button'

import styles from '../../styles/global'

import { index } from '../../services/Sections.services'

export const Sections = ({ navigation }) => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    getSections()
  }, [])

  const getSections = async () => {
    setSections(await index())
  }

  return (
    <View style={styles.container}>
      <Text>Sections Screen</Text>
      <FlatList
        data={sections}
        renderItem={
          ({ item: { id, name, vacancies } }) =>
            <View>
              <Text>{name} - {vacancies}</Text>
              <Button
                onPress={() => navigation.navigate('UpdateSection', { id, name, vacancies })}
                title='Edit'
              />
            </View>
        }
      />
      <ActionButton
        buttonColor='rgb(83, 126, 197)'
        onPress={() => { navigation.navigate('CreateSection') }}
      />
    </View>
  )
}
