import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'


const DeckView = ({ data, handleAddCard, handleStartQuiz }) => (
  <View style={styles.root}>
    <Text style={styles.title}>
      {data.name}
    </Text>
    <Text style={styles.subTitle}>
      {!data.cards || data.cards.length === 0
        ? 'This deck is empty'
        : data.cards.length > 1
          ? `${data.cards.length} cards`
          : '1 card'
      }
    </Text>
    <TouchableOpacity
      onPress={handleAddCard}
      style={styles.buttonAdd}
    >
      <Text style={styles.buttonAddLabel}>
        Add card
      </Text>
    </TouchableOpacity>
    {data.cards && data.cards.length > 0 && (
      <TouchableOpacity
        onPress={handleStartQuiz}
        style={styles.buttonStart}
      >
        <Text style={styles.buttonStartLabel}>
          Start quiz
        </Text>
      </TouchableOpacity>
    )}
  </View>
)

DeckView.propTypes = {
  data: PropTypes.object.isRequired,
  handleAddCard: PropTypes.func.isRequired,
  handleStartQuiz: PropTypes.func.isRequired
}

const mapStateToProps = ({ decks }, { navigation }) => {
  const { id } = navigation.state.params
  return {
    data: decks[id],
    handleAddCard: () => navigation.navigate('AddCardView', { id }),
    handleStartQuiz: () => navigation.navigate('QuizView', { id })
  }
}

export default connect(mapStateToProps)(DeckView)
