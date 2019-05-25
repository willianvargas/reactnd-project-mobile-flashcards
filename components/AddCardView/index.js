import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native'
import { StackActions } from 'react-navigation'
import UUID from 'uuid'

import { handleAddDeckCard } from '../../actions'
import styles from './styles'


class AddCardView extends Component {

  state = {
    question: 'adpoaksp?',
    answer: 'aslkd laçsk'
  }

  onChange = (field, name) => {
    this.setState({ [field]: name })
  }

  handleCreate = () => {
    const { question, answer } = this.state
    const { handleAddCard } = this.props
    const id = UUID.v4()
    handleAddCard({
      id,
      question: question.trim(),
      answer: answer.trim()
    })
  }

  render() {
    const { question, answer } = this.state
    const disabled = question.trim().length === 0 || answer.trim().length === 0
    return (
      <KeyboardAvoidingView style={styles.root} behavior="padding" enabled>
        <Text style={styles.label}>
          What is the question?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.onChange('question', text)}
          value={question}
        />
        <Text style={styles.label}>
          What is the answer?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.onChange('answer', text)}
          value={answer}
        />
        <TouchableOpacity
          activeOpacity={0.1}
          disabled={disabled}
          onPress={disabled ? undefined : this.handleCreate}
          style={[
            styles.button,
            disabled ? styles.buttonDisabled : {}
          ]}
        >
          <Text style={styles.buttonLabel}>
            Create
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }

}

AddCardView.propTypes = {
  handleAddCard: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, { navigation }) => {
  const { id } = navigation.state.params
  return {
    handleAddCard: (payload) => {
      dispatch(handleAddDeckCard(id, payload))
        .then(() => {
          const navigate = StackActions.pop()
          navigation.dispatch(navigate)
        })
    }
  }
}

export default connect(null, mapDispatchToProps)(AddCardView)
