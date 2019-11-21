import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Formik } from 'formik'

import styles from '../../styles/global'

import { store } from '../../services/People.services'

export const CreatePerson = ({ navigation }) => {
  const submit = async person => {
    await store(person)

    navigation.navigate('People')
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: '', cpf: '', phone: '' }}
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
            <Text>CPF</Text>
            <TextInput
              onChangeText={handleChange('cpf')}
              onBlur={handleBlur('cpf')}
              value={values.cpf}
            />
            <Text>Phone</Text>
            <TextInput
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            <Button
              onPress={handleSubmit}
              title='Create'
            />
            <Button
              onPress={() => navigation.navigate('People')}
              title='Back'
            />
          </View >
        )}
      </Formik>
    </View>
  )
}