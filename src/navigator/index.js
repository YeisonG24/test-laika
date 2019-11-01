import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/home';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
);

const ReorderStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
);

const PromotionsStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
);

const ContactStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
);

const AccountStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
);

const AppNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Reorder: { screen: ReorderStack },
    Promotions: { screen: PromotionsStack },
    Contact: { screen: ContactStack },
    Account: { screen: AccountStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `md-paw${focused ? '' : ''}`;
        } else if (routeName === 'Reorder') {
          iconName = `ios-clock${focused ? '' : ''}`;
        } else if (routeName === 'Promotions') {
          iconName = `ios-ribbon${focused ? '' : ''}`;
        } else if (routeName === 'Contact') {
          iconName = `ios-mail${focused ? '' : ''}`;
        } else if (routeName === 'Account') {
          iconName = `md-contact${focused ? '' : ''}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#6951AE',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(AppNavigator);
