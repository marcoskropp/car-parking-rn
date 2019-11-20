import React from 'react'
import { Text, Button, View, TextInput } from 'react-native'
import { Formik } from 'formik'

import { login } from '../../services/Auth.services'

export const SignIn = ({ navigation }) => {
  const handleLogin = async ({ email, password }) => {
    const { error, message } = await login(email, password)

    if (error) {
      return (<Text>{message}</Text>) // not working yet
    }

    navigation.navigate('Home')
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => handleLogin(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <Text>Email</Text>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Text>Password</Text>
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <Button
            onPress={handleSubmit}
            title='Login'
          />
        </View >
      )}
    </Formik>
  )
}

