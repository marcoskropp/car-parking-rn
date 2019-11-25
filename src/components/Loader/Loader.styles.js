import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  },
  loaderIcon: {
    display: 'flex',
    backgroundColor: 'transparent',
    justifyContent: 'space-around'
  }
})
