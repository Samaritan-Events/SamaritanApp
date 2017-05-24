import React, { Component } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import EventList from '../shared/events/event_list'

import layoutStyles from '../../styles/layout'
import iconStyles from '../../styles/icons'

class Explore extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="location-arrow" style={[ iconStyles.navIcon, { color: tintColor } ]} />
    ),
  }

  render() {
    return (
      <View style={layoutStyles.appContainer}>
        <View style={layoutStyles.main}>
          <EventList />
        </View>
      </View>
    );
  }
}

export default Explore
