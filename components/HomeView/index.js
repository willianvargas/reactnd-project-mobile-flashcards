import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
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

  handleOpenDeck = (id) => {
    const { handleOpenDeck, decks } = this.props
    const { name } = decks[id]
    handleOpenDeck({ id, name })
  }

  renderDeck = ({ item: { id, name, cards } }) => {
    return (
      <Fragment>
        <TouchableOpacity
          style={styles.deck}
          onPress={() => this.handleOpenDeck(id)}
        >
          <Text style={styles.deckName}>
            {name}
          </Text>
          <Text style={styles.deckCards}>
            {!cards || cards.length === 0
              ? 'Empty deck'
              : cards.length > 1
                ? `${cards.length} cards`
                : '1 card'
            }
          </Text>
        </TouchableOpacity>
        <View style={styles.separator} />
      </Fragment>
    )
  }

  render() {
    const { requested, decks, handleAddDeck } = this.props
    const data = Object
      .keys(decks)
      .map(key => decks[key])
    return requested ? (
      <View style={styles.root}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={this.renderDeck}
        />
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
  handleOpenDeck: PropTypes.func.isRequired,
  handleAddDeck: PropTypes.func.isRequired
}

const mapStateToProps = ({ requested, decks }, { navigation }) => {
  return {
    handleOpenDeck: (payload) => navigation.navigate('DeckView', payload),
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
