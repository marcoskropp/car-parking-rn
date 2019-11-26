import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import Title from '../../components/Title';
import Button from '../../components/Button';

import styles from '../../styles/global';

import {store} from '../../services/Vehicle.services';

export const CreateVehicle = ({navigation}) => {
  const submit = async vehicle => {
    await store(vehicle);

    navigation.navigate('Vehicles');
  };

  return (
    <Formik
      initialValues={{plate: '', description: '', personId: ''}}
      onSubmit={values => submit(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Title text="Create vehicle" />
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
            <Text>Person Id</Text>
            <TextInput
              onChangeText={handleChange('personId')}
              onBlur={handleBlur('personId')}
              value={values.personId}
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
