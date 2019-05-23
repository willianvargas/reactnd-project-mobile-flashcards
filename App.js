import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import reducer from './reducers'
import middleware from './middleware'
// import StatusBar from './components/StatusBar'
import HomeView from './components/HomeView'
import AddDeckView from './components/AddDeckView'
import { blue } from './utils/colors'


const store = createStore(reducer, middleware)


const StackNavigator = createStackNavigator({
  HomeView: {
    screen: HomeView,
    navigationOptions: () => ({
      title: 'My Flashcards',
      headerTintColor: blue
    })
  },
  AddDeckView: {
    screen: AddDeckView,
    navigationOptions: () => ({
      title: 'Add new Deck',
      headerTintColor: blue
    })
  }
})

const MainNavigator = createAppContainer(StackNavigator)

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <MainNavigator />
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default App
