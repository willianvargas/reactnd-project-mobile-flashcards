import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native'
import { StackActions } from 'react-navigation'
import UUID from 'uuid'

import { handleAddDeck } from '../../actions'
import styles from './styles'


class AddDeckView extends Component {

  state = {
    name: ''
  }

  onChange = (name) => {
    this.setState({ name })
  }

  handleCreate = () => {
    const { name } = this.state
    const { handleAddDeck } = this.props
    const id = UUID.v4()
    handleAddDeck({ id, name: name.trim() })
  }

  render() {
    const { name } = this.state
    const disabled = name.trim().length === 0
    return (
      <KeyboardAvoidingView style={styles.root} behavior="padding" enabled>
        <Text style={styles.title}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChange}
          value={name}
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

AddDeckView.propTypes = {
  handleAddDeck: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, { navigation }) => {
  return {
    handleAddDeck: (payload) => {
      dispatch(handleAddDeck(payload))
        .then(() => {
          const navigate = StackActions.replace({
            routeName: 'DeckView',
            params: { ...payload }
          })
          navigation.dispatch(navigate)
        })
    }
  }
}

export default connect(null, mapDispatchToProps)(AddDeckView)
