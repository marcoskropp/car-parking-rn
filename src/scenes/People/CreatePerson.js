import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import Button from '../../components/Button';
import Title from '../../components/Title';

import styles from '../../styles/global';

import {store} from '../../services/People.services';

export const CreatePerson = ({navigation}) => {
  const submit = async person => {
    await store(person);

    navigation.navigate('People');
  };

  return (
    <Formik
      initialValues={{name: '', cpf: '', phone: ''}}
      onSubmit={values => submit(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Title text="Create person" />
          <View style={styles.formGroup}>
            <Text>Name</Text>
            <TextInput
              onChangeText={handleChange('name')}
              style={styles.textInput}
              onBlur={handleBlur('name')}
              value={values.name}
            />
          </View>
          <View style={styles.formGroup}>
            <Text>CPF</Text>
            <TextInput
              onChangeText={handleChange('cpf')}
              style={styles.textInput}
              onBlur={handleBlur('cpf')}
              value={values.cpf}
            />
          </View>
          <View style={styles.formGroup}>
            <Text>Phone</Text>
            <TextInput
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              style={styles.textInput}
              value={values.phone}
            />
          </View>
          <View style={styles.formGroup}>
            <Button
              onPress={handleSubmit}
              style={styles.btnPrimary}
              title="Create"
            />
          </View>
          <View style={styles.formGroup}>
            <Button
              onPress={() => navigation.navigate('People')}
              style={styles.btnSecondary}
              title="Back"
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
