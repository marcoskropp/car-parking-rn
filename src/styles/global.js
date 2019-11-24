import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  formGroup: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 0,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'stretch',
    marginBottom: 20,
  },
  btnPrimary: {
    backgroundColor: 'rgb(83, 126, 197)',
    borderRadius: 2,
    paddingTop: 8,
    paddingBottom: 8,
  },
  btnSecondary: {
    backgroundColor: 'rgb(180, 180, 180)',
    borderRadius: 2,
    paddingTop: 8,
    paddingBottom: 8,
  },
  btnError: {
    backgroundColor: 'rgb(250, 75, 75)',
    borderRadius: 2,
    paddingTop: 8,
    paddingBottom: 8,
  },
  listRow: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  rowItem: {
    marginLeft: 5,
    marginRight: 5,
  },
  btnWarningRound: {
    borderRadius: 50,
    padding: 5,
    backgroundColor: 'rgb(235, 219, 0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  btnErrorRound: {
    borderRadius: 50,
    padding: 5,
    backgroundColor: 'rgb(250, 75, 75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    marginLeft: 5,
    marginRight: 5,
  },
});
