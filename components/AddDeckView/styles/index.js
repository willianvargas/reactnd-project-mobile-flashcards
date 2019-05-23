import { StyleSheet } from 'react-native'

import { blue, white } from '../../../utils/colors'


export default StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 16
  },
  input: {
    height: 64,
    fontSize: 26,
    padding: 8,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 24
  },
  button: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  },
  buttonLabel: {
    color: white,
    fontSize: 18
  }
})
