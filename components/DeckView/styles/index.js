import { StyleSheet } from 'react-native'

import { blue, white, grey, greyDark } from '../../../utils/colors'


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
    marginBottom: 24
  },
  subTitle: {
    fontSize: 24,
    color: greyDark,
    marginBottom: 24
  },
  buttonAdd: {
    backgroundColor: white,
    borderColor: grey,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    minWidth: 140,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  },
  buttonAddLabel: {
    color: blue,
    fontSize: 18
  },
  buttonStart: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    minWidth: 140,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  },
  buttonStartLabel: {
    color: white,
    fontSize: 18
  }
})
