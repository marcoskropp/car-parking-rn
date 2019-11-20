import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Formik } from 'formik'

import styles from '../../styles/global'

import { update } from '../../services/People.services'

export const UpdatePerson = ({ navigation }) => {
  const { state: { params: { id, name, cpf, phone } } } = navigation

  const submit = async person => {
    await update({ id, ...person })

    navigation.navigate('People')
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name, cpf, phone }}
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
              title='Edit'
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
