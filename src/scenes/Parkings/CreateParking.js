import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Loader from '../../components/Loader';

import styles from '../../styles/global';

import {index} from '../../services/Vehicle.services';
import {store} from '../../services/Parkings.services';

export const CreateParking = ({navigation}) => {
  const {
    state: {
      params: {sectionId},
    },
  } = navigation;
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = React.useState(true);

  const getVehicles = async () => {
    setVehicles(await index());
    setLoading(false);
  };

  useEffect(() => {
    getVehicles();
  }, []);

  const submit = async parking => {
    await store({carId: parking.vehicleId, sectionId});

    navigation.navigate('Parkings', {id: sectionId});
  };

  const renderVehicles = () => {
    return vehicles.map(vehicle => (
      <Text>
        {vehicle.id} - {vehicle.description}
      </Text>
    ));
  };

  if (loading) return <Loader />;

  return (
    <Formik initialValues={{vehicleId: ''}} onSubmit={values => submit(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Title text="Create Parking" />
          {renderVehicles()}
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
              onPress={() => navigation.navigate('Parkings', {id: sectionId})}
              style={styles.btnSecondary}
              title="Back"
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
