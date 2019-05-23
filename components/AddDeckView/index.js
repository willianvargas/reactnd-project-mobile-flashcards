import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native'

import styles from './styles'


class AddDeckView extends Component {

  state = {
    name: ''
  }

  onChange = (name) => {
    this.setState({ name })
  }

  render() {
    const { name } = this.state
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
          style={styles.button}
          onPress={() => console.log('1')}
        >
          <Text style={styles.buttonLabel}>
            Create
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }

}

export default AddDeckView
