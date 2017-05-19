import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './header_styles'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
    )
  }
}

