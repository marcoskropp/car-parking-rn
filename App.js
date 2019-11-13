import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

Icon.loadFont()

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Icon name="ios-person" size={20} />
      </View>
    )
  }
}

class PersonScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Person Screen</Text>
      </View>
    )
  }
}

class VehicleScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Vehicle Screen</Text>
      </View>
    )
  }
}

class ReservePlaceScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Reserve Place Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
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
      screen: ReservePlaceScreen,
      navigationOptions: {
        tabBarLabel: 'Reserve Place',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-film'} />
          </View>)
      }
    },
    Person: {
      screen: PersonScreen,
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
      screen: VehicleScreen,
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

export default createAppContainer(TabNavigator)