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
      style={{flex: 1, marginTop: 16}}
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
  },
});

export default Sliders;
