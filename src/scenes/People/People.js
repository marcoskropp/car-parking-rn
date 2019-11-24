import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButton from '../../components/IconButton';
import Title from '../../components/Title';
import styles from '../../styles/global';

import {index, destroy} from '../../services/People.services';

export const People = ({navigation}) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople();
  }, []);

  const getPeople = async () => {
    setPeople(await index());
  };

  const removePerson = id => () => {
    Alert.alert('Delete', 'Do you want to delete this person?', [
      {
        text: 'Yes',
        onPress: async () => {
          await destroy(id);
          setPeople(await index());
        },
      },
      {
        text: 'Cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Title text="People" />
      <FlatList
        data={people}
        keyExtractor={(item, idx) => `${item.id}-${idx}`}
        renderItem={({item: {id, name, cpf, phone}}) => (
          <View style={styles.listRow}>
            <Text style={styles.rowItem}>{name}</Text>
            <Text style={styles.rowItem}>{cpf}</Text>
            <Text style={styles.rowItem}>{phone}</Text>
            <IconButton
              onPress={() =>
                navigation.navigate('UpdatePerson', {id, name, cpf, phone})
              }
              style={styles.btnWarningRound}>
              <Icon size={15} name="create" color="#fff" />
            </IconButton>
            <IconButton onPress={removePerson(id)} style={styles.btnErrorRound}>
              <Icon size={15} name="delete" color="#fff" />
            </IconButton>
          </View>
        )}
      />
      <ActionButton
        buttonColor="rgb(83, 126, 197)"
        onPress={() => {
          navigation.navigate('CreatePerson');
        }}
      />
    </View>
  );
};
