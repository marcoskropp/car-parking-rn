import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createSwitchNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import {SignIn} from './scenes/SignIn/SignIn';
import {Sections} from './scenes/Sections/Sections';
import {CreateSection} from './scenes/Sections/CreateSection';
import {UpdateSection} from './scenes/Sections/UpdateSection';
import {Home} from './scenes/Home/Home';
import {Vehicles} from './scenes/Vehicles/Vehicles';
import {People} from './scenes/People/People';
import {CreateVehicle} from './scenes/Vehicles/CreateVehicle';
import {UpdateVehicle} from './scenes/Vehicles/UpdateVehicle';
import {ShowVehicle} from './scenes/Vehicles/ShowVehicle';
import {CreatePerson} from './scenes/People/CreatePerson';
import {UpdatePerson} from './scenes/People/UpdatePerson';
import {Parkings} from './scenes/Parkings/Parkings';
import {CreateParking} from './scenes/Parkings/CreateParking';

Icon.loadFont();

export const LoggedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
    },
  },
});

const tabBar = (tintColor, iconName) => (
  <View>
    <Icon style={[{color: tintColor}]} size={25} name={iconName} />
  </View>
);

export const LoggedIn = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => tabBar(tintColor, 'ios-home'),
      },
    },
    Sections: {
      screen: Sections,
      navigationOptions: {
        tabBarLabel: 'Section',
        tabBarIcon: ({tintColor}) => tabBar(tintColor, 'ios-film'),
      },
    },
    People: {
      screen: People,
      navigationOptions: {
        tabBarLabel: 'Person',
        tabBarIcon: ({tintColor}) => tabBar(tintColor, 'ios-person'),
      },
    },
    Vehicles: {
      screen: Vehicles,
      navigationOptions: {
        tabBarLabel: 'Vehicles',
        tabBarIcon: ({tintColor}) => tabBar(tintColor, 'ios-car'),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    swipeEnabled: true,
    barStyle: {backgroundColor: '#3BAD87'},
  },
);

export const createRootNavigator = (loggedIn = true) => {
  return createSwitchNavigator(
    {
      LoggedIn: {
        screen: LoggedIn,
      },
      LoggedOut: {
        screen: LoggedOut,
      },
      CreateVehicle: {
        screen: CreateVehicle,
      },
      UpdateVehicle: {
        screen: UpdateVehicle,
      },
      ShowVehicle: {
        screen: ShowVehicle,
      },
      CreatePerson: {
        screen: CreatePerson,
      },
      UpdatePerson: {
        screen: UpdatePerson,
      },
      CreateSection: {
        screen: CreateSection,
      },
      UpdateSection: {
        screen: UpdateSection,
      },
      Parkings: {
        screen: Parkings,
      },
      CreateParking: {
        screen: CreateParking,
      },
    },
    {
      initialRouteName: loggedIn ? 'LoggedIn' : 'LoggedOut',
    },
  );
};
