import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Loader from '../../components/Loader';
import styles from '../../styles/global';

import {show} from '../../services/Vehicle.services';

export const ShowVehicle = ({navigation}) => {
  const {
    state: {
      params: {car_id, routeBack},
    },
  } = navigation;

  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVehicle();
  }, []);

  const getVehicle = async () => {
    const data = await show(car_id);
    setVehicle(data);
    setLoading(false);
  };

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <Title text="Car" />
      <View style={styles.formGroup}>
        <Text>
          Owner: {'  '}
          {vehicle.person.name}
        </Text>
      </View>
      <View style={styles.formGroup}>
        <Text>
          CPF: {'  '}
          {vehicle.person.cpf}
        </Text>
      </View>
      <View style={styles.formGroup}>
        <Text>
          Plate: {'  '}
          {vehicle.plate}
        </Text>
      </View>
      <View style={styles.formGroup}>
        <Text>
          Description: {'  '}
          {vehicle.description}
        </Text>
      </View>
      <View style={styles.formGroup}>
        <Button
          onPress={() => navigation.navigate(routeBack)}
          title="Back"
          style={styles.btnPrimary}
        />
      </View>
    </View>
  );
};
