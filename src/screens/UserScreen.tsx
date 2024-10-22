import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { images } from '../assets/images/images';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const UserScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.nameScreen}>My profile</Text>
      <View style={styles.userBox}>
        <Image source={images.userImage} style={styles.userImg}/>
        <View style={styles.userContent}>
          <Text style={styles.userName}>Hi, Rahul kanjariya</Text>
          <Text style={styles.userDesc}>Welcome to  Nilkanth Medical Store</Text>
        </View>
      </View>

      <View style={styles.menuBox}>
        <MaterialCommunityIconsIcon name="text-box-outline" style={styles.menuIcon}/>
        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>Edit Profile</Text>
          <FontistoIcon name="angle-right" style={styles.menuExpand}/>
        </View>
      </View>
      <View style={styles.menuBox}>
        <AntDesignIcon name="filetext1" style={styles.menuIcon}/>
        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>My orders</Text>
          <FontistoIcon name="angle-right" style={styles.menuExpand}/>
        </View>
      </View>
      <View style={styles.menuBox}>
        <AntDesignIcon name="clockcircleo" style={styles.menuIcon}/>
        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>Billing</Text>
          <FontistoIcon name="angle-right" style={styles.menuExpand}/>
        </View>
      </View>
      <View style={styles.menuBox}>
        <AntDesignIcon name="questioncircleo" style={styles.menuIcon}/>
        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>Faq</Text>
          <FontistoIcon name="angle-right" style={styles.menuExpand}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nameScreen: {
    fontSize: 20,
    color: '#090F47',
    fontWeight: '700',
    marginLeft: 20,
  },

  userBox: {
    marginHorizontal: 32,
    flexDirection: 'row',
    height: 80,
    marginVertical: 40,
  },

  userImg: {
    borderWidth: 2,
    borderColor: '#0E51FFCC',
    borderRadius: 60,
    width: 70,
    height: 70,
  },

  userContent: {
    marginLeft: 8,
  },

  userName: {
    color: '#091C3F73',
    fontSize: 24,
    marginTop: 4,
  },

  userDesc: {
    color: '#091C3F73',
    fontSize: 16,
    marginTop: 4,
  },

  menuBox: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuIcon: {
    fontSize: 32,
    marginHorizontal: 24,
  },

  menuContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: 350,
    borderBottomWidth: 1,
    borderColor: '#091C3F14',
  },

  menuTitle: {
    color: '#091C3FBF',
    fontSize: 16,
    fontWeight: '500',
  },

  menuExpand: {
    color: '#091C3F',
    fontSize: 10,
    marginRight: 16,
  },


});
export default UserScreen;
