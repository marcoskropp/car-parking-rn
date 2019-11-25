import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Title from '../../components/Title';
import Loader from '../../components/Loader';
import styles from '../../styles/global';

import { index } from '../../services/Sections.services';

export const Sections = ({ navigation }) => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getSections();
  }, []);

  const getSections = async () => {
    setLoading(true)
    setSections(await index());
    setLoading(false)
  };

  if (loading) return <Loader />

  return (
    <View style={styles.container}>
      <Title text="Sections" />
      <FlatList
        data={sections}
        renderItem={
          ({ item: { id, name, vacancies, parkings } }) =>
            <View>
              <Text>{name} - {vacancies}</Text>
              <Button
                onPress={() => navigation.navigate('UpdateSection', { id, name, vacancies })}
                title='Edit'
              />
              <Button
                onPress={() => navigation.navigate('Parkings', { id })}
                title='Show'
              />
            </View>
        }
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
