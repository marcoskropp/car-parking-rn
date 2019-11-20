import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createSwitchNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator } from 'react-navigation-stack';

import { SignIn } from './scenes/SignIn/SignIn'
import { ReservePlace } from './scenes/ResevePlace/ReservePlace'
import { Home } from './scenes/Home/Home'
import { Vehicles } from './scenes/Vehicles/Vehicles'
import { People } from './scenes/People/People'
import { CreateVehicle } from './scenes/Vehicles/CreateVehicle'
import { UpdateVehicle } from './scenes/Vehicles/UpdateVehicle'
import { CreatePerson } from './scenes/People/CreatePerson'
import { UpdatePerson } from './scenes/People/UpdatePerson'

Icon.loadFont()

export const LoggedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  }
})

const tabBar = (tintColor, iconName) => (
  <View>
    <Icon style={[{ color: tintColor }]} size={25} name={iconName} />
  </View>
)

export const LoggedIn = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => tabBar(tintColor, 'ios-home')
      }
    },
    ReservePlace: {
      screen: ReservePlace,
      navigationOptions: {
        tabBarLabel: 'Reserve Place',
        tabBarIcon: ({ tintColor }) => tabBar(tintColor, 'ios-film')
      }
    },
    People: {
      screen: People,
      navigationOptions: {
        tabBarLabel: 'Person',
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#f69b31' },
        tabBarIcon: ({ tintColor }) => tabBar(tintColor, 'ios-person')
      }
    },
    Vehicles: {
      screen: Vehicles,
      navigationOptions: {
        tabBarLabel: 'Vehicles',
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: { backgroundColor: '#67baf6' },
        tabBarIcon: ({ tintColor }) => tabBar(tintColor, 'ios-car')
      }
    }
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    swipeEnabled: true,
    barStyle: { backgroundColor: '#3BAD87' }
  }
)

export const createRootNavigator = (loggedIn = true) => {
  return createSwitchNavigator(
    {
      LoggedIn: {
        screen: LoggedIn
      },
      LoggedOut: {
        screen: LoggedOut
      },
      CreateVehicle: {
        screen: CreateVehicle
      },
      UpdateVehicle: {
        screen: UpdateVehicle
      },
      CreatePerson: {
        screen: CreatePerson
      },
      UpdatePerson: {
        screen: UpdatePerson
      }
    },
    {
      initialRouteName: loggedIn ? 'LoggedIn' : 'LoggedOut'
    }
  );
};