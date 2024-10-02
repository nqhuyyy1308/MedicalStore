/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

const ProductScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
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
      <View></View>
    </SafeAreaView>
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
});
export default ProductScreen;
