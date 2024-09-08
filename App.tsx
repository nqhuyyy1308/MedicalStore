/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useRef} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import SplashScreen from 'react-native-splash-screen';

type OnboardingCarousel = {
  id: string;
  title: string;
  descriptions: string;
};

const carouselItems: OnboardingCarousel[] = [
  {
    id: '01',
    title: 'View and buy Medicine online',
    descriptions:
      'Etiam mollis metus non purus faucibus sollicitudin. Pellentesque sagittis mi. Integer.',
  },
  {
    id: '02',
    title: 'View 02',
    descriptions: 'Etiam mollis metus non purus faucibus sollicitudin',
  },
  {
    id: '03',
    title: 'View 03',
    descriptions: 'Etiam mollis metus non purus faucibus sollicitudin',
  },
  {
    id: '04',
    title: 'View 04',
    descriptions: 'Etiam mollis metus non purus faucibus sollicitudin',
  },
];

const App = () => {
  const carouselRef = useRef();

  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  const renderItem = (item: OnboardingCarousel) => {
    return (
      <View>
        <Text style={styles.textH1}>{item.title}</Text>
        <Text style={styles.textDesc}>{item.descriptions}</Text>
      </View>
    );
  };

  const onScrollIndexChanged = (index: number) => {
    console.log('current index', index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('./src/assets/images/onboard_image.png')}
          style={styles.imageOnboard}
        />
      </View>
      <Carousel
        ref={carouselRef}
        data={carouselItems}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={300}
        itemWidth={300}
        slideStyle={styles.carouselViewContainer}
        onScrollIndexChanged={onScrollIndexChanged}
      />

      <View style={styles.footerSection}>
        <Text style={styles.animationText}>Skip</Text>
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
  carouselViewContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 0,
  },
  imageWrapper: {
    flex: 2,
    justifyContent: 'flex-end',
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
  },

  footerSection: {
    flexDirection: 'row',
  },

  animationText: {},
});

export default App;
