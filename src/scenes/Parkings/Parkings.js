import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import ActionButton from 'react-native-action-button';
import Loader from '../../components/Loader';
import IconButton from '../../components/IconButton';
import Title from '../../components/Title';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
import styles from '../../styles/global';

import {show} from '../../services/Sections.services';
import {destroy} from '../../services/Parkings.services';

export const Parkings = ({navigation}) => {
  const {
    state: {
      params: {id},
    },
  } = navigation;

  const [section, setSection] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSection();
  }, []);

  const getSection = async () => {
    const data = await show(id);
    setSection(data);
    setLoading(false);
  };

  const removeVehicle = async parkingId => {
    Alert.alert('Delete', 'Do you want to delete this parking?', [
      {
        text: 'Yes',
        onPress: async () => {
          await destroy(parkingId);
          getSection();
        },
      },
      {
        text: 'Cancel',
      },
    ]);
  };

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <Title
        text={`Parkings Screen - Section ${section.name} - Vacancies: ${section.vacancies}`}
      />
      <FlatList
        data={section.parkings}
        keyExtractor={item => `${item.id}`}
        renderItem={({
          item: {
            id: parkingId,
            car_id,
            car: {description},
          },
        }) => (
          <View style={styles.listRow}>
            <Text>{description}</Text>
            <IconButton
              style={styles.btnPrimaryRound}
              onPress={() =>
                navigation.navigate('ShowVehicle', {
                  car_id,
                  routeBack: 'Sections',
                })
              }>
              <Icon size={15} name="visibility" />
            </IconButton>
            <IconButton
              onPress={() => removeVehicle(parkingId)}
              style={styles.btnErrorRound}>
              <Icon size={15} name="delete" />
            </IconButton>
          </View>
        )}
      />
      <View style={styles.formGroup}>
        <Button
          onPress={() => navigation.navigate('Sections')}
          style={styles.btnSecondary}
          title="Back"
        />
      </View>
      <ActionButton
        buttonColor="rgb(83, 126, 197)"
        onPress={() => {
          navigation.navigate('CreateParking', {sectionId: id});
        }}
      />
    </View>
  );
};
