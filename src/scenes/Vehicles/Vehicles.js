import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import ActionButton from 'react-native-action-button';
import IconButton from '../../components/IconButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Title from '../../components/Title';
import Loader from '../../components/Loader';

import styles from '../../styles/global';

import {index, destroy} from '../../services/Vehicle.services';

export const Vehicles = ({navigation}) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getVehicles();
  }, []);

  const getVehicles = async () => {
    setLoading(true)
    setVehicles(await index());
    setLoading(false)
  };

  const removeVehicle = id => () => {
    Alert.alert('Delete', 'Do you want to delete this vehicle?', [
      {
        text: 'Yes',
        onPress: async () => {
          await destroy(id);
          setVehicles(await index());
        },
      },
      {
        text: 'Cancel',
      },
    ]);
  };

  if (loading) return <Loader />

  return (
    <View style={styles.container}>
      <Title text="Vehicles" />
      <FlatList
        data={vehicles}
        renderItem={({item: {id, plate, description}}) => (
          <View style={styles.listRow}>
            <Text style={styles.rowItem}>{plate}</Text>
            <Text style={styles.rowItem}>{description}</Text>
            <IconButton
              onPress={() =>
                navigation.navigate('UpdateVehicle', {id, plate, description})
              }
              style={styles.btnWarningRound}>
              <Icon size={15} color="#fff" name="create" />
            </IconButton>
            <IconButton
              onPress={removeVehicle(id)}
              style={styles.btnErrorRound}>
              <Icon size={15} color="#fff" name="delete" />
            </IconButton>
          </View>
        )}
      />
      <ActionButton
        buttonColor="rgb(83, 126, 197)"
        onPress={() => {
          navigation.navigate('CreateVehicle');
        }}
      />
    </View>
  );
};
