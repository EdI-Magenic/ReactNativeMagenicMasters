
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Login from './app/screens/Login';
import HomePage from './app/screens/HomePage';

const RootStack = StackNavigator(
  {
    Login: { screen: Login },
    HomePage: { screen: HomePage }
  },
  {
    initialRouteName: 'Login'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}
