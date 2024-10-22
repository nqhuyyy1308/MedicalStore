import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotifyScreen from '../screens/NotifyScreen';

const NotifyNavigator = () => {
  const NotifyStack = createNativeStackNavigator();
  return (
    <NotifyStack.Navigator>
      <NotifyStack.Screen name="Notify" component={NotifyScreen} />
    </NotifyStack.Navigator>
  );
};
export default NotifyNavigator;
