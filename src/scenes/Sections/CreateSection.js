import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Formik } from 'formik'

import styles from '../../styles/global'

import { store } from '../../services/Sections.services'

export const CreateSection = ({ navigation }) => {
  const submit = async section => {
    await store(section)

    navigation.navigate('Sections')
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: '', vacancies: '' }}
        onSubmit={values => submit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text>Name</Text>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <Text>Vacancies</Text>
            <TextInput
              onChangeText={handleChange('vacancies')}
              onBlur={handleBlur('vacancies')}
              keyboardType='number-pad'
              value={values.vacancies}
            />
            <Button
              onPress={handleSubmit}
              title='Create'
            />
            <Button
              onPress={() => navigation.navigate('Sections')}
              title='Back'
            />
          </View >
        )}
      </Formik>
    </View>
  )
}
