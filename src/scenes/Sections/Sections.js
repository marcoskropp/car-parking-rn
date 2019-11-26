import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButton from '../../components/IconButton';
import Title from '../../components/Title';
import Loader from '../../components/Loader';
import styles from '../../styles/global';

import {index} from '../../services/Sections.services';

export const Sections = ({navigation}) => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSections();
  }, []);

  const getSections = async () => {
    setSections(await index());
    setLoading(false);
  };

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <Title text="Sections" />
      <FlatList
        data={sections}
        keyExtractor={item => item.id + name}
        renderItem={({item: {id, name, vacancies}}) => (
          <View style={styles.listRow}>
            <Text style={styles.rowItem}>Section {name}</Text>
            <Text style={styles.rowItem}> - </Text>
            <Text style={styles.rowItem}>{vacancies} vacancies</Text>
            <IconButton
              style={styles.btnWarningRound}
              onPress={() => {
                navigation.navigate('UpdateSection', {id, name, vacancies});
              }}>
              <Icon size={15} name="create" />
            </IconButton>
            <IconButton
              onPress={() => navigation.navigate('Parkings', {id})}
              style={styles.btnPrimaryRound}>
              <Icon size={15} name="visibility" />
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
