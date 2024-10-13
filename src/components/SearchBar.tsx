import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <AntDesignIcon
        name="search1"
        size={24}
        color={'#888'}
        style={{marginRight: 8, marginLeft: 8}}
      />
      <TextInput placeholder="Search Medicine products" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: 300,
    height: 50,
    borderRadius: 32,
    fontSize: 24,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginHorizontal: 60,
    marginTop: -20,
    transform: [
      {
        translateY: 25,
      },
    ],
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

export default SearchBar;
