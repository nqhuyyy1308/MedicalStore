import React from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {images} from '../assets/images/images';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ListProducts = () => {
  const productsItem = [
    {
      imageProducts: images.listProduct1,
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
      numberRated: '4.2',
    },
    {
      imageProducts: images.listProduct1,
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
      numberRated: '4.2',
    },
    {
      imageProducts: images.listProduct1,
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
      numberRated: '4.2',
    },
    {
      imageProducts: images.listProduct2,
      id: '04',
      nameProducts: 'Omron HEM-8712 BP Monitor',
      prices: 'Rs.150',
      iconRated: (
        <IoniconsIcon
          name="star"
          color={'#fff'}
          size={16}
          style={{marginLeft: 6}}
        />
      ),
      numberRated: '4.2',
    },
    {
      imageProducts: images.listProduct2,
      id: '05',
      nameProducts: 'Omron HEM-8712 BP Monitor',
      prices: 'Rs.150',
      iconRated: (
        <IoniconsIcon
          name="star"
          color={'#fff'}
          size={16}
          style={{marginLeft: 6}}
        />
      ),
      numberRated: '4.2',
    },
    {
      imageProducts: images.listProduct2,
      id: '06',
      nameProducts: 'Omron HEM-8712 BP Monitor',
      prices: 'Rs.150',
      iconRated: (
        <IoniconsIcon
          name="star"
          color={'#fff'}
          size={16}
          style={{marginLeft: 6}}
        />
      ),
      numberRated: '4.2',
    },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={productsItem}
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={styles.productContainer}>
            <View style={styles.productImg}>
              <Image source={item.imageProducts} />
            </View>
            <View style={styles.productItem}>
              <Text style={styles.productTitle}>{item.nameProducts}</Text>
              <Text style={styles.productPrice}>{item.prices}</Text>
              <View style={styles.productRated}>
                {item.iconRated}
                <Text style={styles.productRatedNum}>{item.numberRated}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    margin: 20,
    width: 175,
    height: 265,
    borderColor: '#EBEBEB',
    borderRadius: 12,
  },
  productImg: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FA',
    height: 160,
  },
  productItem: {},
  productTitle: {
    color: '#090F47',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    width: 110,
    marginTop: 8,
  },
  productPrice: {
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    marginTop: 4,
  },
  productRated: {
    backgroundColor: '#FFC000',
    width: 50,
    marginLeft: 125,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productRatedNum: {
    marginHorizontal: 4,
    color: 'white',
    fontSize: 16,
  },
});
export default ListProducts;
