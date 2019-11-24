import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import Button from '../../components/Button';
import Title from '../../components/Title';

import styles from '../../styles/global';

import {update} from '../../services/People.services';

export const UpdatePerson = ({navigation}) => {
  const {
    state: {
      params: {id, name, cpf, phone},
    },
  } = navigation;

  const submit = async person => {
    await update({id, ...person});

    navigation.navigate('People');
  };

  return (
    <Formik
      initialValues={{name, cpf, phone}}
      onSubmit={values => submit(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Title text="Update person" />
          <View style={styles.formGroup}>
            <Text>Name</Text>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              style={styles.textInput}
            />
          </View>
          <View style={styles.formGroup}>
            <Text>CPF</Text>
            <TextInput
              onChangeText={handleChange('cpf')}
              onBlur={handleBlur('cpf')}
              value={values.cpf}
              style={styles.textInput}
            />
          </View>
          <View style={styles.formGroup}>
            <Text>Phone</Text>
            <TextInput
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              style={styles.textInput}
            />
          </View>
          <View style={styles.formGroup}>
            <Button
              onPress={handleSubmit}
              title="Edit"
              style={styles.btnPrimary}
            />
          </View>
          <View style={styles.formGroup}>
            <Button
              onPress={() => navigation.navigate('People')}
              title="Back"
              style={styles.btnSecondary}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
