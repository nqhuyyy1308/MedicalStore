import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../assets/images/images';
import MyStatusBar from '../components/CustomStatusBar';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {marginBottom: insets.bottom}]}>
      <MyStatusBar statusBgColor="#4157FF">
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
        </View>
        <View style={styles.searchBar}>
          <AntDesignIcon
            name="search1"
            size={24}
            color={'#888'}
            style={{marginRight: 8, marginLeft: 8}}
          />
          <TextInput placeholder="Search Medicine products" />
        </View>
      </MyStatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  userAbout: {
    backgroundColor: '#4157FF',
    height: 200,
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

  searchBar: {
    width: 300,
    height: 50,
    borderRadius: 32,
    fontSize: 24,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginHorizontal: 60,
  },
});

export default HomeScreen;
