/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Header from './components/shared/header'
import EventList from './components/explore/event_list'

import styles from './styles/layout'

export default class SamaritanApp extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Header />
        <View style={styles.main}>
          <EventList />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('SamaritanApp', () => SamaritanApp);
