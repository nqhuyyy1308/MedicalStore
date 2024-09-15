import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import OnboardScreen from './src/screens/OnboardScreen';
import LoginScreen from './src/screens/LoginScreen';
import VerifyOTPScreen from './src/screens/VerifyOTPScreen';
import SuccessOTPScreen from './src/screens/SuccessOTPScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
    }
    SplashScreen.hide();
  }, []);
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
