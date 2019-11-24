import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import ActionButton from 'react-native-action-button';
import IconButton from '../../components/IconButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Title from '../../components/Title';
import styles from '../../styles/global';

import {index} from '../../services/Sections.services';

export const Sections = ({navigation}) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    getSections();
  }, []);

  const getSections = async () => {
    setSections(await index());
  };

  return (
    <View style={styles.container}>
      <Title text="Sections" />
      <FlatList
        data={sections}
        renderItem={({item: {id, name, vacancies}}) => (
          <View style={styles.listRow}>
            <Text style={styles.rowItem}>Section {name}</Text>
            <Text style={styles.rowItem}>{vacancies} vacancies</Text>
            <IconButton
              onPress={() =>
                navigation.navigate('UpdateSection', {id, name, vacancies})
              }
              style={styles.btnWarningRound}>
              <Icon size={15} name="create" color="#fff" />
            </IconButton>
          </View>
        )}
      />
      <ActionButton
        buttonColor="rgb(83, 126, 197)"
        onPress={() => {
          navigation.navigate('CreateSection');
        }}
      />
    </View>
  );
};
