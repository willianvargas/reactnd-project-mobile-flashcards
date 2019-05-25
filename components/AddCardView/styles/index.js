import { StyleSheet } from 'react-native'

import { blue, white, grey } from '../../../utils/colors'


export default StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  label: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 12
  },
  input: {
    height: 48,
    fontSize: 22,
    padding: 8,
    width: '100%',
    borderColor: grey,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16
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
  buttonDisabled: {
    backgroundColor: grey,
  },
  buttonLabel: {
    color: white,
    fontSize: 18
  }
})
