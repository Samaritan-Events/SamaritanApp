import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

import styles from './event_styles'

const Event = ({
  event: {
    name,
    eventDate,
    organizer: {
      name: organizer,
      gravatar,
    },
    location: {
      address: {
        name: locationName,
      },
    },
  }
}) => (
  <View style={styles.eventContainer}>
    <View style={styles.leftCol}>
      <Text style={styles.title}>{name}</Text>
      <Text>{eventDate}</Text>
      <View style={[ styles.row, styles.spaceBetween ]}>
        <View style={styles.row}>
          <Icon name="location-arrow" />
          <Text>1 mi</Text>
        </View>
        <Text>{locationName}</Text>
      </View>
    </View>
    <View style={styles.rightCol}>
      <Image style={styles.gravatar} source={ { uri: gravatar } } />
      <Text>{organizer}</Text>
    </View>
  </View>
)

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    eventDate: PropTypes.string,
    organizer: PropTypes.shape({
      name: PropTypes.string,
    }),
    location: PropTypes.shape({
      address: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  }),
}

export default Event
