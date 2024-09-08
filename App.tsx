/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import SplashScreen from 'react-native-splash-screen'

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  const carouselItems = [
    {
        title:"Item 1",
        text: "Text 1",
    },
    {
        title:"Item 2",
        text: "Text 2",
    },
    {
        title:"Item 3",
        text: "Text 3",
    },
    {
        title:"Item 4",
        text: "Text 4",
    },
    {
        title:"Item 5",
        text: "Text 5",
    },
    ]

    const renderItem = () => {
      return <Text>
        Hello
      </Text>
    }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageOnboard}
        source={require('./src/assets/images/onboard_image.png')}></Image>

      <Text style={styles.textH1}> View and buy Medicine online </Text>
      <Text style={styles.textDesc}>
        {' '}
        Etiam mollis metus non purus faucibus sollicitudin. Pellentesque
        sagittis mi. Integer.{' '}
      </Text>

      <View style={styles.footerSection}>
        <Text style={styles.animationText}>Skip</Text>
        <Carousel
              data={carouselItems}
              renderItem={renderItem}
              sliderWidth={300}
              itemWidth={300}
            />
        <Text style={styles.animationText}>Next</Text>
      </View>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  textH1: {
    width: 238,
    color: '#090F47',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 32,
    letterSpacing: 1,
  },

  textDesc: {
    width: 255,
    color: '#090F4773',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 0.5,
    marginTop: 16,
  },

  imageOnboard: {
    height: 284,
    width: 256.3,
    marginBottom: 48,
  },

  footerSection: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 0,
  },

  animationText: {},
});

export default App;
