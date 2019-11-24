import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import Button from '../../components/Button';
import Title from '../../components/Title';

import styles from '../../styles/global';

import {update} from '../../services/Vehicle.services';

export const UpdateVehicle = ({navigation}) => {
  const {
    state: {
      params: {id, plate, description},
    },
  } = navigation;

  const submit = async vehicle => {
    await update({id, ...vehicle});

    navigation.navigate('Vehicles');
  };

  return (
    <Formik
      initialValues={{plate, description}}
      onSubmit={values => submit(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Title text="Edit vehicle" />
          <View style={styles.formGroup}>
            <Text>Plate</Text>
            <TextInput
              onChangeText={handleChange('plate')}
              onBlur={handleBlur('plate')}
              value={values.plate}
              style={styles.textInput}
            />
          </View>
          <View style={styles.formGroup}>
            <Text>Description</Text>
            <TextInput
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              style={styles.textInput}
            />
          </View>
          <View style={styles.formGroup}>
            <Button
              onPress={handleSubmit}
              title="Update"
              style={styles.btnPrimary}
            />
          </View>
          <View style={styles.formGroup}>
            <Button
              onPress={() => navigation.navigate('Vehicles')}
              title="Back"
              style={styles.btnSecondary}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
