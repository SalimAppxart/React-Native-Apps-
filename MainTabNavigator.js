import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/login.js';
import Ingate from '../screens/Ingate';
import Outgate from '../screens/Outgate';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Login: Login,
  Ingate: Ingate,
  Outgate: Outgate,
});

/*HomeStack.navigationOptions = {
  //tabBarLabel: 'Home',

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};*/

  const LoginStack = createStackNavigator({
    Login: Login,
  });

  const IngateStack = createStackNavigator({
    Ingate: Ingate,
  }); 

  const OutgateStack = createStackNavigator({
    Outgate: Outgate,
  });

/*const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};*/

export default createStackNavigator({
  HomeStack,
  LoginStack,
  IngateStack,
  OutgateStack,
}, { headerMode: 'none' });
