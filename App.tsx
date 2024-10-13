import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import BeforeLogin from './src/navigators/MainStack';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
    }
    SplashScreen.hide();
  }, []);
  return <BeforeLogin />;
};

export default App;
