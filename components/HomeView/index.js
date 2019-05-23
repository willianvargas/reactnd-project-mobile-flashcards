import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { AppLoading } from 'expo'
import { FloatingAction } from 'react-native-floating-action'
// eslint-disable-next-line
import { MaterialCommunityIcons } from '@expo/vector-icons'


import { handleInitialData } from '../../actions'
import styles from './styles'
import { red } from '../../utils/colors'


class HomeView extends Component {

  componentDidMount() {
    const { handleInitialData } = this.props
    handleInitialData()
  }

  render() {
    const { requested, decks, handleAddDeck } = this.props
    console.log(requested, decks)
    return requested ? (
      <View style={styles.root}>
        <Text>
          Home view
        </Text>
        {Object
          .keys(decks)
          .map(key => decks[key])
          .map(deck => {
            <Text>
              {deck.id}
            </Text>
          })
        }
        <FloatingAction
          actions={[{
            text: 'Add deck',
            name: 'add',
            position: 1,
            icon: (
              <MaterialCommunityIcons
                name="plus"
                color="white"
                size={32}
              />
            )
          }]}
          color={red}
          onPressItem={handleAddDeck}
          overrideWithAction
        />
      </View>
    ) : <AppLoading />
  }

}

HomeView.propTypes = {
  requested: PropTypes.bool.isRequired,
  decks: PropTypes.object.isRequired,
  handleInitialData: PropTypes.func.isRequired,
  handleAddDeck: PropTypes.func.isRequired
}

const mapStateToProps = ({ requested, decks }, { navigation }) => {
  return {
    handleAddDeck: () => navigation.navigate('AddDeckView'),
    requested,
    decks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInitialData: () => dispatch(handleInitialData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
