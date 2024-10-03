import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const HomeNavigator = ({}: any) => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: '#4157FF'},
          headerShadowVisible: false,
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
