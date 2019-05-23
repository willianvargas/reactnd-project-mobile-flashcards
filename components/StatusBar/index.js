import React from 'react'
import { View, StatusBar as StatusBarBase } from 'react-native'
import { Constants } from 'expo'

import { blue } from '../../utils/colors'

const StatusBar = () => (
  <View
    style={{
      height: Constants.statusBarHeight,
      backgroundColor: blue
    }}
  >
    <StatusBarBase
      backgroundColor={blue}
      barStyle="light-content"
      translucent
    />
  </View>
)

export default StatusBar
