import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import VerifyOTPScreen from '../screens/VerifyOTPScreen';
import SuccessOTPScreen from '../screens/SuccessOTPScreen';
import OnboardScreen from '../screens/OnboardScreen';
import TabNavigator from './BottomTabNav';
import ProductScreen from '../screens/ProductScreen';

const Stack = createNativeStackNavigator();

const BeforeLogin = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Onboarding" component={OnboardScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} />
        <Stack.Screen name="SuccessOTP" component={SuccessOTPScreen} />
        <Stack.Screen name="HomeTab" component={TabNavigator} />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{gestureEnabled: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BeforeLogin;
