import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './header_styles'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Icon name="calendar" style={styles.headerIcon}/>
        <Icon name="plus" style={styles.headerIcon} />
        <Icon name="user" style={styles.headerIcon} />
      </View>
    )
  }
}

