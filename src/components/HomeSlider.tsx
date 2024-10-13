import {images} from '../assets/images/images.ts';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';

const Sliders = () => {
  const sliderItem = [
    {
      id: '01',
      imagesSlider: images.homeSlider,
    },
    {
      id: '02',
      imagesSlider: images.homeSlider,
    },
    {
      id: '03',
      imagesSlider: images.homeSlider,
    },
    {
      id: '04',
      imagesSlider: images.homeSlider,
    },
  ];
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{flex: 1, marginTop: 12}}
      data={sliderItem}
      renderItem={({item}) => {
        return (
          <View style={styles.sliderCarousel}>
            <Image
              source={item.imagesSlider}
              style={{width: 330, height: 150, borderRadius: 12}}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  sliderCarousel: {
    marginHorizontal: 16,
    marginLeft: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Sliders;
