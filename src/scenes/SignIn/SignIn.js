import React from 'react';
import {Image, Text, View, TextInput, Alert} from 'react-native';
import {Formik} from 'formik';
import {login} from '../../services/Auth.services';
import Button from '../../components/Button';
import styles from '../../styles/global';

export const SignIn = ({navigation}) => {
  const handleLogin = async ({email, password}) => {
    const {error, message} = await login(email, password);

    if (error) {
      return Alert.alert('Error', message);
    }

    navigation.navigate('Home');
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => handleLogin(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.formGroup}>
            <Text>Email</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.textInput}
            />
          </View>
          <View style={styles.formGroup}>
            <Text>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={styles.textInput}
            />
            <View style={styles.formGroup}>
              <Button
                style={styles.btnPrimary}
                onPress={handleSubmit}
                title="Login"
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};
