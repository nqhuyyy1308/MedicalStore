import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotifyScreen from '../screens/NotifyScreen';

const NotifyNavigator = () => {
  const NotifyStack = createNativeStackNavigator();
  return (
    <NotifyStack.Navigator>
      <NotifyStack.Screen name="Notify" component={NotifyScreen} options={{headerShown: false}}/>
    </NotifyStack.Navigator>
  );
};
export default NotifyNavigator;
