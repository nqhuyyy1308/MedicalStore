import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen from '../screens/UserScreen';

const UserNavigator = () => {
  const UserStack = createNativeStackNavigator();
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={UserScreen} />
    </UserStack.Navigator>
  );
};
export default UserNavigator;
