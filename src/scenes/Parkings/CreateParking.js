import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import Button from '../../components/Button';
import Title from '../../components/Title';

import styles from '../../styles/global';

import {store} from '../../services/Parkings.services';

export const CreateParking = ({navigation}) => {
  const { state: { params: { sectionId } } } = navigation

  const submit = async parking => {
    await store({ carId: parking.vehicleId, sectionId });

    navigation.navigate('Sections');
  };

  return (
    <Formik
      initialValues={{vehicleId: ''}}
      onSubmit={values => submit(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Title text="Create Parking" />
          <View style={styles.formGroup}>
            <Text>Vehicle Id</Text>
            <TextInput
              onChangeText={handleChange('vehicleId')}
              style={styles.textInput}
              onBlur={handleBlur('vehicleId')}
              value={values.vehicleId}
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
              onPress={() => navigation.navigate('Sections')}
              style={styles.btnSecondary}
              title="Back"
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
