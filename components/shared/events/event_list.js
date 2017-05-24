import React, { Component } from 'react'
import { Text, View } from 'react-native'

import layoutStyles from '../../../styles/layout'
import eventListStyles from './event_list_styles'
import eventsApi from '../../../services/api/events'
import Event from './event'

export default class ExplorePage extends Component {
  getNumberOfEvents() {
    return 2
  }

  render() {
    return (
      <View style={[ layoutStyles.itemContainer, eventListStyles.list ]}>
        {this.renderEvents()}
      </View>
    )
  }

  renderEvents() {
    return eventsApi.getInterestingEvents(this.getNumberOfEvents()).map(e => {
      return (
        <Event key={e.id} event={e} />
      )
    })
  }
}
