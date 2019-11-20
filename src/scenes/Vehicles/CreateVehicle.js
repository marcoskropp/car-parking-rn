import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Formik } from 'formik'

import styles from '../../styles/global'

import { store } from '../../services/Vehicle.services'

export const CreateVehicle = ({ navigation }) => {
  const submit = async vehicle => {
    await store(vehicle)

    navigation.navigate('Vehicles')
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ plate: '', description: '' }}
        onSubmit={values => submit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text>Plate</Text>
            <TextInput
              onChangeText={handleChange('plate')}
              onBlur={handleBlur('plate')}
              value={values.plate}
            />
            <Text>Description</Text>
            <TextInput
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
            />
            <Button
              onPress={handleSubmit}
              title='Create'
            />
            <Button
              onPress={() => navigation.navigate('Vehicles')}
              title='Back'
            />
          </View >
        )}
      </Formik>
    </View>
  )
}
