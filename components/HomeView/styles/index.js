import { StyleSheet } from 'react-native'

import { grey, greyDark } from '../../../utils/colors'


export default StyleSheet.create({
  root: {
    flex: 1
  },
  deck: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: grey
  },
  deckName: {
    fontSize: 26
  },
  deckCards: {
    fontSize: 18,
    color: greyDark
  }
})
