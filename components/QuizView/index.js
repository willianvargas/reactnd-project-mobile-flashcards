import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { StackActions } from 'react-navigation'
import { shuffle } from 'lodash'

import { handleUpdateLastQuizDate } from '../../actions'
import styles from './styles'


class QuizView extends Component {

  state = {
    current: 0,
    showAnswer: false,
    shuffledCards: [],
    answers: {
      correct: 0,
      incorrect: 0
    }
  }

  componentDidMount() {
    this.shuffleCards()
  }

  shuffleCards = () => {
    const { cards } = this.props
    const shuffledCards = shuffle(cards)
    this.setState({ shuffledCards })
  }

  handleAnswerQuestion = (status) => {
    this.setState(({ current, answers }) => ({
      current: current + 1,
      showAnswer: false,
      answers: this.getNewStateAnswerQuestion(answers, status)
    }))
  }
  
  getNewStateAnswerQuestion = (answers, status) => {
    if (status) {
      return {
        ...answers,
        correct: answers.correct + 1
      }
    } else {
      return {
        ...answers,
        incorrect: answers.incorrect + 1
      }
    }
  }

  handleStartAgain = () => {
    this.setState({
      current: 0,
      showAnswer: false,
      answers: {
        correct: 0,
        incorrect: 0
      }
    }),
    this.shuffleCards()
  }

  toggleShowAnswer = () => {
    this.setState(({ showAnswer }) => ({ showAnswer: !showAnswer }))
  }

  render() {
    const { cards, handleReturnToDeck } = this.props
    const { shuffledCards, current, answers, showAnswer } = this.state
    const length = cards.length
    if (length === current) {
      const { correct } = answers
      const result = Math.trunc(correct / length * 100)
      return (
        <View style={styles.root}>
          <Text style={styles.resultTitle}>
            Results
          </Text>
          <Text
            style={[
              styles.result,
              result < 70 ? styles.resultRed : styles.resultGreen,
            ]}
          >
            {`${result}%`}
          </Text>
          <Text style={styles.resultDescription}>
            {`${correct} out of ${length} correct`}
          </Text>
          <TouchableOpacity
            onPress={this.handleStartAgain}
            style={styles.buttonBlue}
          >
            <Text style={styles.buttonBlueLabel}>
              Restart quiz
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleReturnToDeck}
            style={styles.buttonBlueOutline}
          >
            <Text style={styles.buttonBlueOutlineLabel}>
              Back to Deck
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
    const card = shuffledCards[current]
    return card ? (
      <View style={styles.root}>
        {showAnswer ? (
          <Text style={styles.title}>
            {card.answer}
          </Text>
        ) : (
          <Text style={styles.title}>
            {card.question}
          </Text>
        )}
        {showAnswer ? (
          <Fragment>
            <TouchableOpacity
              onPress={this.toggleShowAnswer}
              style={styles.buttonQuestion}
            >
              <Text>
                Question
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.handleAnswerQuestion(true)}
              style={styles.buttonCorrect}
            >
              <Text style={styles.buttonLabel}>
                Correct
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.handleAnswerQuestion(false)}
              style={styles.buttonIncorrect}
            >
              <Text style={styles.buttonLabel}>
              Incorrect
              </Text>
            </TouchableOpacity>
          </Fragment>
        ) : (
          <TouchableOpacity
            onPress={this.toggleShowAnswer}
            style={styles.buttonBlue}
          >
            <Text style={styles.buttonBlueLabel}>
              See answer
            </Text>
          </TouchableOpacity>
        )}
      </View>
    ) : null
  }

}

QuizView.propTypes = {
  cards: PropTypes.array.isRequired,
  handleReturnToDeck: PropTypes.func.isRequired,
  handleUpdateLastQuizDate: PropTypes.func.isRequired,
}

const mapStateToProps = ({ decks }, { navigation }) => {
  const { id } = navigation.state.params
  const { cards } = decks[id]
  return {
    cards, 
    handleReturnToDeck: () => {
      const navigate = StackActions.pop()
      navigation.dispatch(navigate)
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateLastQuizDate: () => dispatch(handleUpdateLastQuizDate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizView)
