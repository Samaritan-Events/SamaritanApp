import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import eventsApi from '../../services/api/events'

export default class ExplorePage extends Component {
  getNumberOfEvents() {
    return 2
  }

  render() {
    return (
      <View>
        {this.renderEvents()}
      </View>
    )
  }

  renderEvents() {
    return eventsApi.getInterestingEvents(this.getNumberOfEvents()).map(e => {
      return (
        <Text key={e.id}>{e.name}</Text>
      )
    })
  }
}
