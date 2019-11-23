import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import Button from '../../components/Button';
import Title from '../../components/Title';

import styles from '../../styles/global';

import {store} from '../../services/Sections.services';

export const CreateSection = ({navigation}) => {
  const submit = async section => {
    await store(section);

    navigation.navigate('Sections');
  };

  return (
    <Formik
      initialValues={{name: '', vacancies: ''}}
      onSubmit={values => submit(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Title text="Create section" />
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
            <Text>Vacancies</Text>
            <TextInput
              onChangeText={handleChange('vacancies')}
              onBlur={handleBlur('vacancies')}
              keyboardType="number-pad"
              value={values.vacancies}
              style={styles.textInput}
            />
          </View>
          <View style={styles.formGroup}>
            <Button
              onPress={handleSubmit}
              title="Create"
              style={styles.btnPrimary}
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
