import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import layoutStyles from '../../styles/layout'
import iconStyles from '../../styles/icons'

class CreateEvent extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="plus" style={[ iconStyles.navIcon, { color: tintColor } ]} />
    ),
  }

  render() {
    return (
      <View style={layoutStyles.appContainer}>
        <View style={layoutStyles.main}>
          <Text>Create Event</Text>
        </View>
      </View>
    );
  }
}

export default CreateEvent
