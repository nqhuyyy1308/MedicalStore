import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const NotifyScreen = ({navigation}: any) => {
  return(
    <SafeAreaView>
      <View style={styles.headerContain}>
        <TouchableOpacity style={styles.headerNav} activeOpacity={1}>
          <AntdesignIcon name="arrowleft" style={styles.iconNav} onPress={() => {navigation.goBack();}}/>
          <Text style={styles.nameScreen}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.clearBtn}>Clear all</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.notiBox}>
        <FontAwesome5Icon name="award" style={styles.notiIcon}/>
        <View style={styles.notiContent}>
          <Text style={styles.notiTitle}>We know that — for children AND adults — learning is most effective when it is</Text>
          <Text style={styles.notiDate}>Aug 12, 2020 at 12:08 PM</Text>
        </View>
        <View style={styles.notiUnread}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.notiBox}>
        <FontAwesome5Icon name="award" style={styles.notiIcon}/>
        <View style={styles.notiContent}>
          <Text style={styles.notiTitle}>We know that — for children AND adults — learning is most effective when it is</Text>
          <Text style={styles.notiDate}>Aug 12, 2020 at 12:08 PM</Text>
        </View>
        <View style={styles.notiUnread}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerNav:{
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
  },

  iconNav: {
    fontSize: 30,
    color: '#090F47',
    marginRight: 16,
  },

  nameScreen:{
    fontSize: 20,
    color: '#090F47',
    fontWeight: '700',
  },

  headerContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  clearBtn: {
    color: '#1987FB',
    fontWeight: '500',
    fontSize: 16,
  },

  notiBox: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 12,
    borderTopWidth: 1.5,
    borderColor: '#E7E9EC',
  },

  notiIcon: {
    color: '#091C3F73',
    fontSize: 24,
  },

  notiContent: {
    width: 300,
    height: 75,
    justifyContent: 'space-around',
  },

  notiTitle: {
    color: '#091C3F',
    fontSize: 16,
    fontWeight: '400',
  },

  notiDate: {
    color: '#091C3F73',
    fontSize: 14,
    fontWeight: '400',
  },

  notiUnread: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#EB5757',
  },

});
export default NotifyScreen;
