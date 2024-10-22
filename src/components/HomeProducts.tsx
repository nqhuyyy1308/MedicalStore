/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../assets/images/images';
import React from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const ProductsDetail = () => {
  const productsItem = [
    {
      imageProducts: images.homeProducts,
      id: '01',
      nameProducts: 'Accu-check Active Test Strip',
      prices: 'Rs.112',
      iconRated: (
        <IoniconsIcon
          name="star"
          color={'#fff'}
          size={16}
          style={{marginLeft: 6}}
        />
      ),
      numberRated: '2',
    },
    {
      imageProducts: images.homeProducts,
      id: '02',
      nameProducts: 'Accu-check Active Test Strip',
      prices: 'Rs.112',
      iconRated: (
        <IoniconsIcon
          name="star"
          color={'#fff'}
          size={16}
          style={{marginLeft: 6}}
        />
      ),
      numberRated: '2',
    },
    {
      imageProducts: images.homeProducts,
      id: '03',
      nameProducts: 'Accu-check Active Test Strip',
      prices: 'Rs.112',
      iconRated: (
        <IoniconsIcon
          name="star"
          color={'#fff'}
          size={16}
          style={{marginLeft: 6}}
        />
      ),
      numberRated: '2',
    },
    {
      imageProducts: images.homeProducts,
      id: '04',
      nameProducts: 'Accu-check Active Test Strip',
      prices: 'Rs.112',
      iconRated: (
        <IoniconsIcon
          name="star"
          color={'#fff'}
          size={16}
          style={{marginLeft: 6}}
        />
      ),
      numberRated: '2',
    },
    {
      imageProducts: images.homeProducts,
      id: '05',
      nameProducts: 'Accu-check Active Test Strip',
      prices: 'Rs.112',
      iconRated: (
        <IoniconsIcon
          name="star"
          color={'#fff'}
          size={16}
          style={{marginLeft: 6}}
        />
      ),
      numberRated: '2',
    },
    {
      imageProducts: images.homeProducts,
      id: '06',
      nameProducts: 'Accu-check Active Test Strip',
      prices: 'Rs.112',
      iconRated: (
        <IoniconsIcon
          name="star"
          color={'#fff'}
          size={16}
          style={{marginLeft: 6}}
        />
      ),
      numberRated: '2',
    },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      style={{flex: 1}}
      data={productsItem}
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={styles.productsWrapper}>
            <View style={styles.productsImg}>
              <Image source={item.imageProducts} />
            </View>
            <View style={styles.productsFormContain}>
              <Text style={styles.productsName}>{item.nameProducts}</Text>
              <Text style={styles.productsPrice}>{item.prices}</Text>
              <View style={styles.productsRated}>
                {item.iconRated}
                <Text
                  style={{marginHorizontal: 4, color: 'white', fontSize: 16}}>
                  {item.numberRated}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  productsWrapper: {
    marginLeft: 35,
    marginTop: 12,
    width: 160,
    height: 240,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 8,
  },

  productsImg: {
    height: 150,
    backgroundColor: '#f6f6f8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  productsFormContain: {},

  productsName: {
    color: '#090F47',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 20,
    width: 100,
    marginLeft: 8,
  },

  productsPrice: {
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    marginLeft: 8,
  },

  productsRated: {
    backgroundColor: '#FFC000',
    width: 50,
    marginLeft: 110,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProductsDetail;
