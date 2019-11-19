import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createSwitchNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator } from 'react-navigation-stack';

import { SignIn } from './scenes/SignIn/SignIn'
import { ReservePlace } from './scenes/ResevePlace/ReservePlace'
import { Home } from './scenes/Home/Home'
import { Vehicle } from './scenes/Vehicle/Vehicle'
import { People } from './scenes/People/People'
  console.log(Home)
Icon.loadFont()

export const LoggedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  }
})

export const LoggedIn = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        )
      }
    },
    ReservePlace: {
      screen: ReservePlace,
      navigationOptions: {
        tabBarLabel: 'Reserve Place',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-film'} />
          </View>)
      }
    },
    Person: {
      screen: People,
      navigationOptions: {
        tabBarLabel: 'Person',
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#f69b31' },
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
          </View>
        )
      }
    },
    Vehicle: {
      screen: Vehicle,
      navigationOptions: {
        tabBarLabel: 'Vehicle',
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: { backgroundColor: '#67baf6' },
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-car'} />
          </View>
        )
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
      }
    },
    {
      initialRouteName: loggedIn ? 'LoggedIn' : 'LoggedOut'
    }
  );
};