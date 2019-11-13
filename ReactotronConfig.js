import Reactotron from 'reactotron-react-native'
import { AsyncStorage } from 'react-native'

Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect({
    server: '192.168.56.101',  // for Genymotion
    port: 5555,
    enabled: true
  }) // let's connect!