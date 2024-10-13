/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../assets/images/images';
import SearchBar from '../components/SearchBar';
import Categories from '../components/HomeCategories';
import Sliders from '../components/HomeSlider';
import ProductsDetail from '../components/HomeProducts';

const HomeScreen = ({navigation}: any) => {
  // const insets = useSafeAreaInsets();
  const onClickNext = () => {
    navigation.navigate('Product');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#4157FF'}}>
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, backgroundColor: '#F7FBFF'}}>
          <View style={styles.userAbout}>
            <View style={styles.userWrapper}>
              <Image source={images.userImage} style={styles.userAvatar} />
              <View style={styles.userAction}>
                <TouchableOpacity>
                  <IoniconsIcon
                    name="notifications-outline"
                    size={24}
                    color={'#fff'}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FeatherIcon name="shopping-bag" size={24} color={'#fff'} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.userContent}>
              <Text style={styles.userH1}>Hi, User</Text>
              <Text style={styles.userDesc}>
                Welcome to Nilkanth Medical Store
              </Text>
            </View>
            <SearchBar />
          </View>
          <Categories />
          <Sliders />
          <View style={styles.productsContent}>
            <Text style={styles.productsTitle}>Deals of the Day</Text>
            <TouchableOpacity style={{width: 45}} onPress={onClickNext}>
              <Text style={styles.productsOnclick}>More</Text>
            </TouchableOpacity>
          </View>
          <ProductsDetail />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  userAbout: {
    backgroundColor: '#4157FF',
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
  },

  userWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    alignItems: 'center',
  },

  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },

  userAction: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-around',
  },

  userContent: {
    margin: 24,
  },

  userH1: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },

  userDesc: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 4,
  },

  productsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  productsTitle: {
    color: '#090F47',
    fontSize: 20,
    fontWeight: '600',
  },
  productsOnclick: {
    color: '#006AFF',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default HomeScreen;
