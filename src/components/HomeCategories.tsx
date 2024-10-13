import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1Cate}>Top Categories</Text>
      <View style={styles.wrapCateContent}>
        <TouchableOpacity style={styles.borderCate}>
          <View style={styles.colorCate} />
          <Text style={styles.textCate}>Dental</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borderCate}>
          <View style={styles.colorCate2} />
          <Text style={styles.textCate}>Wellness</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borderCate}>
          <View style={styles.colorCate3} />
          <Text style={styles.textCate}>Homeo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borderCate}>
          <View style={styles.colorCate4} />
          <Text style={styles.textCate}>Eye care</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Categories;

const styles = StyleSheet.create({
  container: {},

  h1Cate: {
    marginVertical: 12,
    marginTop: 40,
    marginLeft: 24,
    fontSize: 16,
    color: '#090F47',
  },

  wrapCateContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  borderCate: {
    backgroundColor: 'white',
    width: 55,
    height: 90,
    borderRadius: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  colorCate: {
    borderRadius: 32,
    height: 45,
    width: 40,
    marginTop: 8,
    backgroundColor: '#FF70A7',
  },

  colorCate2: {
    borderRadius: 32,
    height: 45,
    width: 40,
    marginTop: 8,
    backgroundColor: '#15BD92',
  },

  colorCate3: {
    borderRadius: 32,
    height: 45,
    width: 40,
    marginTop: 8,
    backgroundColor: '#FF793A',
  },

  colorCate4: {
    borderRadius: 32,
    height: 45,
    width: 40,
    marginTop: 8,
    backgroundColor: '#3E7DFF',
  },

  textCate: {
    fontSize: 11,
    fontWeight: '300',
    marginTop: 8,
  },
});
