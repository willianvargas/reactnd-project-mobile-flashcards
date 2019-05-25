import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import reducer from './reducers'
import middleware from './middleware'
import { blue } from './utils/colors'
import HomeView from './components/HomeView'
import DeckView from './components/DeckView'
import AddDeckView from './components/AddDeckView'
import AddCardView from './components/AddCardView'
import QuizView from './components/QuizView'
import { setLocalNotification } from './utils/notification'


const store = createStore(reducer, middleware)


const StackNavigator = createStackNavigator({
  HomeView: {
    screen: HomeView,
    navigationOptions: () => ({
      title: 'My Flashcards',
      headerTintColor: blue
    })
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => {
      const { state: { params } } = navigation
      return {
        title: params.name,
        headerTintColor: blue
      }
    }
  },
  AddDeckView: {
    screen: AddDeckView,
    navigationOptions: () => ({
      title: 'Add new deck',
      headerTintColor: blue
    })
  },
  AddCardView: {
    screen: AddCardView,
    navigationOptions: () => ({
      title: 'Add new card',
      headerTintColor: blue
    })
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: () => ({
      title: 'Quiz',
      headerTintColor: blue
    })
  }
})

const MainNavigator = createAppContainer(StackNavigator)

class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default App
