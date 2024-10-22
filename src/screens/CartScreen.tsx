/* eslint-disable react-native/no-inline-styles */
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { images } from '../assets/images/images';
import { ScrollView } from 'react-native';

const CartScreen = ({navigation}:any) => {
  // const {itemProduct} = route.params;
  // const {sizeSelected} = route.params;

  const [amountNumber, setAmountNumber] = useState(1);
  const [amountNumber1, setAmountNumber1] = useState(1);

  const onClickIncrease = () => {
    setAmountNumber(amountNumber + 1);
  };

  const onClickDecrease = () => {
    if(amountNumber > 0){
      setAmountNumber(amountNumber - 1);
    }
  };
  const onClickIncrease1 = () => {
    setAmountNumber1(amountNumber1 + 1);
  };

  const onClickDecrease1 = () => {
    if(amountNumber1 > 0){
      setAmountNumber1(amountNumber1 - 1);
    }
  };

  const onClickNext = () => {
     navigation.navigate('Checkout');
  };

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.bodyCart} showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.headerNav} activeOpacity={1}>
        <AntdesignIcon name="arrowleft" style={styles.iconNav} onPress={() => {navigation.goBack();}}/>
        <Text style={styles.nameScreen}>Your cart</Text>
      </TouchableOpacity>

      <View>
        <View style={styles.headerCart}>
          <Text style={styles.amountProduct}>
            2 items in your cart
          </Text>
          <TouchableOpacity style={styles.clickAdd} onPress={() => {navigation.navigate('Product');}}>
              <IoniconsIcon name="add" style={styles.iconAdd}/>
            <Text style={styles.textAdd}>
              Add more
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemCart}>
          <View style={styles.contentCart}>
            <Image source={images.listProduct1} style={styles.imgCart}/>
            <View style={styles.formCart}>
              <View>
                <Text style={styles.nameCart}>Sugar free gold</Text>
                <Text style={styles.amountCart}>Bottle of 500 pellets</Text>
              </View>
              <Text style={styles.priceCart}>Rs.56</Text>
            </View>
          </View>
          <View style={styles.animationContain}>
          <View style={styles.animationCart}>
          <TouchableOpacity style={styles.removeBtn} onPress={onClickDecrease}><IoniconsIcon name="remove" style={styles.removeIcon} /></TouchableOpacity>
            <Text style={styles.amountItem}>{amountNumber}</Text>
            <TouchableOpacity style={styles.addBtn} onPress={onClickIncrease}><IoniconsIcon name="add" style={styles.addIcon} /></TouchableOpacity>
          </View>
          </View>
          <TouchableOpacity style={styles.deleteBtn}><IoniconsIcon name="close" style={styles.deleteIcon}/></TouchableOpacity>
        </View>

        <View style={styles.itemCart}>
          <View style={styles.contentCart}>
            <Image source={images.listProduct1} style={styles.imgCart}/>
            <View style={styles.formCart}>
              <View>
                <Text style={styles.nameCart}>Sugar free gold</Text>
                <Text style={styles.amountCart}>Bottle of 500 pellets</Text>
              </View>
              <Text style={styles.priceCart}>Rs.56</Text>
            </View>
          </View>
          <View style={styles.animationContain}>
          <View style={styles.animationCart}>
            <TouchableOpacity style={styles.removeBtn} onPress={onClickDecrease1}><IoniconsIcon name="remove" style={styles.removeIcon} /></TouchableOpacity>
            <Text style={styles.amountItem}>{amountNumber1}</Text>
            <TouchableOpacity style={styles.addBtn} onPress={onClickIncrease1}><IoniconsIcon name="add" style={styles.addIcon} /></TouchableOpacity>
          </View>
          </View>
          <TouchableOpacity style={styles.deleteBtn}><IoniconsIcon name="close" style={styles.deleteIcon}/></TouchableOpacity>
        </View>


        <View style={styles.footerCart}>
          <View style={styles.wrapPayment}>
            <Text style={styles.titlePayment}>Payment Summary</Text>
            <View style={styles.rowPayment}>
              <Text style={styles.namePayment}>Order Total</Text>
              <Text style={styles.pricePayment}>228.80</Text>
            </View>
            <View style={styles.rowPayment}>
              <Text style={styles.namePayment}>Item Discount</Text>
              <Text style={styles.pricePayment}>20.00</Text>
            </View>
            <View style={styles.rowPayment}>
              <Text style={styles.namePayment}>Coupon Discount</Text>
              <Text style={styles.pricePayment}>8.80</Text>
            </View>
            <View style={styles.rowPayment}>
              <Text style={styles.namePayment}>Shipping</Text>
              <Text style={styles.pricePayment}>Free</Text>
            </View>
          </View>
          <View style={styles.rowTotal}>
            <Text style={styles.totalPayment}>Total</Text>
            <Text style={styles.totalPrice}>Rs. 200.00</Text>
          </View>
          <TouchableOpacity style={styles.checkoutBtn} onPress={onClickNext}>
            <Text style={styles.checkoutText}>Check out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: 30}}/>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  headerNav:{
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
  },

  iconNav: {
    fontSize: 30,
    color: '#090F47',
    marginHorizontal: 16,
  },

  nameScreen:{
    fontSize: 20,
    color: '#090F47',
    fontWeight: '700',
  },

  headerCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 32,
  },

  amountProduct: {
    fontSize: 16,
    color: '#090F4773',
    fontWeight: '400',
  },

  clickAdd: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconAdd: {
    color: '#4157FF',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 4,
  },

  textAdd: {
    color: '#4157FF',
    fontSize: 16,
    fontWeight: '500',
  },

  bodyCart: {
    height: 400,
  },

  itemCart: {
    margin: 16,
    height: 115,
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: '#0000000D',
  },

  contentCart: {
    flexDirection: 'row',
  },
  imgCart: {
    width: 90,
    height: 100,
    borderRadius: 8,
  },
  formCart: {
    marginHorizontal: 16,
    justifyContent: 'space-around',
  },

  nameCart: {
    fontSize: 18,
    color: '#090F47',
    fontWeight: '400',
  },
  amountCart: {
    fontSize: 16,
    color: '#090F4773',
    fontWeight: '400',
    marginBottom: 20,
    marginVertical: 4,
  },
  priceCart: {
    fontSize: 24,
    color: '#090F47',
    fontWeight: '700',
    marginBottom: 20,
  },

  animationContain: {
    width: 100,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  animationCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F2F4FF',
    alignItems: 'center',
    borderRadius: 16,
  },

  removeBtn: {
    width: 32,
    height: 32,
    backgroundColor: '#DFE3FF',
    borderRadius: 32,
    justifyContent:'center',
    alignItems: 'center',
  },

  removeIcon: {
    fontSize: 32,
    color:'#4157FF',
  },

  amountItem: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },

  addBtn: {
    width: 32,
    height: 32,
    backgroundColor: '#A0ABFF',
    borderRadius: 32,
    justifyContent:'center',
    alignItems: 'center',
  },

  addIcon: {
    fontSize: 32,
    color:'#FFF',
  },


  deleteBtn: {
    borderWidth: 1.2,
    borderColor: '#00000040',
    borderRadius: 24,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteIcon: {
    fontSize: 20,
    fontWeight: '400',
    color: '#00000040',
  },

  footerCart:{
    justifyContent: 'flex-end',
  },

  wrapPayment: {
    margin: 20,
    borderBottomWidth: 1.5,
    borderColor: '#0000000D',
  },

  titlePayment: {
    color: '#090F47',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },

  rowPayment: {
    flexDirection: 'row',
    marginBottom: 18,
    justifyContent: 'space-between',
    marginHorizontal: 4,
  },

  namePayment: {
    color: '#090F4773',
    fontSize: 16,
  },

  pricePayment: {
    color: '#090F47',
    fontSize: 16,
  },

  rowTotal: {
    flexDirection: 'row',
    marginBottom: 18,
    justifyContent: 'space-between',
    marginHorizontal: 24,
    alignItems: 'center',
  },

  totalPayment: {
    color: '#090F47',
    fontSize: 20,
  },

  totalPrice: {
    color: '#090F47',
    fontSize: 20,
    fontWeight: '700',
  },

  checkoutBtn: {
    backgroundColor: '#4157FF',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 28,
    borderRadius: 32,
  },

  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

});
export default CartScreen;
