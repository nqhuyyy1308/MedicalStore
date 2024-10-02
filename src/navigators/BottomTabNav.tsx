import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import NotifyNavigator from './NotifyNavigator';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import UserNavigator from './UserNavigator';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          if (route.name === 'HomeNavigator') {
            return (
              <FeatherIcons
                name="home"
                size={24}
                color={focused ? '#4157FF' : '#999'}
              />
            );
          } else if (route.name === 'NotifyNavigator') {
            return (
              <Ionicons
                name="notifications-outline"
                size={24}
                color={focused ? '#4157FF' : '#999'}
              />
            );
          } else if (route.name === 'CartNavigator') {
            return (
              <FeatherIcons
                name="shopping-bag"
                size={24}
                color={focused ? '#4157FF' : '#999'}
              />
            );
          } else {
            return (
              <FeatherIcons
                name="user"
                size={24}
                color={focused ? '#4157FF' : '#999'}
              />
            );
          }
        },
      })}>
      <Tabs.Screen name="HomeNavigator" component={HomeNavigator} />
      <Tabs.Screen name="NotifyNavigator" component={NotifyNavigator} />
      <Tabs.Screen name="CartNavigator" component={CartNavigator} />
      <Tabs.Screen name="UserNavigator" component={UserNavigator} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
