import { StyleSheet } from 'react-native'

import { white, blue, green, grey, redDark } from '../../../utils/colors'


export default StyleSheet.create({
  root: {
    flex: 1,
    padding: 16
  },
  pageStatus: {
    fontSize: 16
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 32
  },
  resultRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  resultTitle: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 24
  },
  result: {
    fontSize: 56,
    fontWeight: '500',
    marginBottom: 24
  },
  resultGreen: {
    color: green
  },
  resultRed: {
    color: redDark   
  },
  resultDescription: {
    fontSize: 24,
    marginBottom: 24
  },
  buttonBlue: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    minWidth: 140,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24
  },
  buttonBlueLabel: {
    color: white,
    fontSize: 18
  },
  buttonBlueOutline: {
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
  buttonBlueOutlineLabel: {
    color: blue,
    fontSize: 18
  },
  buttonQuestion: {
    marginBottom: 24
  },
  buttonCorrect: {
    backgroundColor: green,
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
  buttonIncorrect: {
    backgroundColor: redDark,
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
  buttonLabel: {
    color: white,
    fontSize: 18
  }
})
