import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Formik } from 'formik'

import styles from '../../styles/global'

import { update, destroy } from '../../services/Sections.services'

export const UpdateSection = ({ navigation }) => {
  const { state: { params: { id, name, vacancies } } } = navigation

  const submit = async section => {
    await update({ id, ...section })

    navigation.navigate('Sections')
  }

  const handleRemove = async () => {
    await destroy(id)

    navigation.navigate('Sections')
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name, vacancies }}
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
              value={`${values.vacancies}`}
            />
            <Button
              onPress={handleSubmit}
              title='Edit'
            />
            <Button
              onPress={handleRemove}
              title='Remove'
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
