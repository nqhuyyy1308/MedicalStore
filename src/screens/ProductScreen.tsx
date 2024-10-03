/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import {images} from '../assets/images/images';
import ListProducts from '../components/ListProducts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ProductScreen = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[{backgroundColor: '#fff', flex: 1}, {paddingTop: insets.top}]}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 165,
        }}
        onPress={() => navigation.goBack()}>
        <AntdesignIcon name="arrowleft" style={styles.backArrow} />
        <Text style={styles.backTitle}>Diabetes Care</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.cateTitle}>Categories</Text>
        <View style={styles.cateWrapper}>
          <TouchableOpacity style={styles.cateOnClick}>
            <Image style={styles.cateImg} source={images.cateProduct1} />
            <Text style={styles.cateContent}>Sugar Substitute</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cateOnClick}>
            <Image style={styles.cateImg} source={images.cateProduct2} />
            <Text style={styles.cateContent}>Juices & Vinegars</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cateOnClick}>
            <Image style={styles.cateImg} source={images.cateProduct3} />
            <Text style={styles.cateContent}>Vitamins Medicines</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.productTitle}>All Products</Text>
      <ListProducts />
    </View>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    fontSize: 32,
    marginLeft: 16,
    color: '#090F47',
  },
  backTitle: {
    fontSize: 16,
    color: '#090F47',
    fontWeight: '500',
    marginLeft: 8,
  },

  cateTitle: {
    color: '#090F47',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 12,
    marginLeft: 12,
  },
  cateWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  cateOnClick: {
    backgroundColor: '#F5F7FA',
    height: 160,
    width: 120,
    borderRadius: 12,
    alignItems: 'center',
  },
  cateImg: {
    width: 100,
  },
  cateContent: {
    color: '#090F47',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    width: 80,
    marginTop: 8,
  },
  productTitle: {
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 12,
  },
});
export default ProductScreen;
