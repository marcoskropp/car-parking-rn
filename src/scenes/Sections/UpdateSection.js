import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import Button from '../../components/Button';
import Title from '../../components/Title';

import styles from '../../styles/global';

import {update, destroy} from '../../services/Sections.services';

export const UpdateSection = ({navigation}) => {
  const {
    state: {
      params: {id, name, vacancies},
    },
  } = navigation;

  const submit = async section => {
    await update({id, ...section});

    navigation.navigate('Sections');
  };

  const handleRemove = async () => {
    await destroy(id);

    navigation.navigate('Sections');
  };

  return (
    <Formik
      initialValues={{name, vacancies}}
      onSubmit={values => submit(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Title text="Edit Section" />
          <View style={styles.formGroup}>
            <Text>Name</Text>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              style={styles.textInput}
              value={values.name}
            />
          </View>
          <View style={styles.formGroup}>
            <Text>Vacancies</Text>
            <TextInput
              onChangeText={handleChange('vacancies')}
              onBlur={handleBlur('vacancies')}
              style={styles.textInput}
              value={`${values.vacancies}`}
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
              onPress={handleRemove}
              title="Remove"
              style={styles.btnError}
            />
          </View>
          <View style={styles.formGroup}>
            <Button
              onPress={() => navigation.navigate('Sections')}
              title="Back"
              style={styles.btnSecondary}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
