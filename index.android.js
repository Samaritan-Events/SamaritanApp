/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation'

import Explore from './components/explore/explore'
import MyEvents from './components/my_events/my_events'
import CreateEvent from './components/create/create'
import Preferences from './components/preferences/preferences'

const SamaritanApp = TabNavigator({
  Explore: { screen: Explore },
  MyEvents: { screen: MyEvents },
  CreateEvent: { screen: CreateEvent },
  Preferences: { screen: Preferences },
}, {
  tabBarOptions: {
    activeTintColor: '#0A0',
    inactiveTintColor: '#222',
    showLabel: false,
  },
})

AppRegistry.registerComponent('SamaritanApp', () => SamaritanApp)
