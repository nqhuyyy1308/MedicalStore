/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import Carousel from 'react-native-snap-carousel';
import * as Progress from 'react-native-progress';
const ProductDetailScreen = ({route, navigation}: any) => {
  const {itemProduct} = route.params;
  console.log(itemProduct);

  const carouselRef = useRef();
  const [indexSelected, setIndexSelected] = useState(0);
  const onScrollChangeIndex = (index: number) => {
    setIndexSelected(index);
  };

  const sizeSelected = [
    {
      id: 1,
      sizeTitle: 'Rs.106',
      sizeAmount: '500 pellets',
    },
    {
      id: 2,
      sizeTitle: 'Rs.106',
      sizeAmount: '500 pellets',
    },
    {
      id: 3,
      sizeTitle: 'Rs.106',
      sizeAmount: '500 pellets',
    },
  ];

  const [changeColor, setChangeColor] = useState();

  const onChangeColor = (id: any) => {
    setChangeColor(id);
  };

  const onClickNext = ({itemProduct, sizeSelected}: any) => {
    navigation.navigate('Cart', {itemProduct, sizeSelected});
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.NavigationContain}>
        <TouchableOpacity>
          <AntdesignIcon name="arrowleft" style={styles.iconNav} onPress={() => {navigation.goBack();}}/>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <IoniconsIcon name="notifications-outline" style={styles.iconNav} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FeatherIcon name="shopping-bag" style={styles.iconNav} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.productTitle}>{itemProduct.nameProducts}</Text>
        <Text style={styles.productDesc}>Etiam mollis metus non purus</Text>
        <Carousel
        data={[itemProduct, itemProduct, itemProduct]}
        ref={carouselRef}
        slideStyle={{backgroundColor: '#fff', marginVertical: 20}}
        sliderWidth={430}
        itemWidth={300}
        sliderHeight={150}
        onScrollIndexChanged = {onScrollChangeIndex}
        renderItem={({item}: any) => {
          return(
            <View style={{width: 300, height: 150}}>
            <Image source={item.imageProducts} style={{width: 300, height: 150}} resizeMode="contain"/>
            </View>
          );
        }}
        />
        <View style={styles.wrapIndexSelect}>
          <View style={[styles.indexSelect, indexSelected === 0 && styles.indexSelected]} />
          <View style={[styles.indexSelect, indexSelected === 1 && styles.indexSelected]} />
          <View style={[styles.indexSelect, indexSelected === 2 && styles.indexSelected]} />
        </View>
        <View style={{flexDirection: 'row', marginVertical: 8}}>
          <Text style={styles.oldPrice}>
            Rs.166
          </Text>
          <Text style={styles.newPrice}>{itemProduct.prices}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.decsPrice}>Etiam mollis</Text>
        <TouchableOpacity style={styles.addCart}>
          <OcticonsIcon style={{color: '#006AFF', fontSize: 16, marginHorizontal: 12}} name="diff-added" />
          <Text style={{color: '#006AFF', fontSize: 16}}>Add to cart</Text>
        </TouchableOpacity>
        </View>
      </View>
        <View style={styles.divideContain}/>
      <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
      <View style={{marginLeft: 16}}>
        <View>
          <Text style={styles.formTitle}>Package size</Text>
          <View style={{flexDirection: 'row'}}>
            {sizeSelected.map((item) => {
              return(
                <TouchableOpacity style={[styles.optionPackage, changeColor === item.id && styles.optionPackageSelected]} onPress={() => onChangeColor(item.id)}>
                  <Text style={[styles.optionPrice, changeColor === item.id && styles.optionPriceSelected ]}>{item.sizeTitle}</Text>
                  <Text style={[styles.optionDesc, changeColor === item.id && styles.optionDescSelected]}>{item.sizeAmount}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={styles.formTitle}>Product Details</Text>
          <Text style={styles.formDecs}>Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut nisi odio. Nulla facilisi.
          Nunc risus massa, gravida id egestas a, pretium vel tellus. Praesent feugiat diam sit amet pulvinar finibus. Etiam et nisi aliquet, accumsan nisi sit.</Text>
        </View>
        <View>
          <Text style={styles.formTitle}>Ingredients</Text>
          <Text style={styles.formDecs}>Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut nisi odio. Nulla facilisi.
          Nunc risus massa, gravida id egestas a, pretium vel tellus. Praesent feugiat diam sit amet pulvinar finibus. Etiam et nisi aliquet, accumsan nisi sit.</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
          <Text style={styles.formTitle}>Expiry Date</Text>
          <Text style={[styles.formDecs, {marginHorizontal: 20}]}>25/12/2023</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.formTitle}>Brand Name</Text>
          <Text style={[styles.formDecs, {marginHorizontal: 20}]}>Something</Text>
        </View>
      </View>
      <View style={styles.ratedContain}>
        <View style={{width: 140, justifyContent: 'space-around'}}>
          <Text style={styles.rated}>{itemProduct.numberRated}
            <View style={{alignItems:'center', width: 50, height:32}}>
            <IoniconsIcon
              name="star"
              color={'#FFD040'}
              size={28}
              /></View>
          </Text>
          <Text style={styles.ratedDesc}>923 Ratings and 257 Reviews</Text>
        </View>
        <View style={styles.ratedChart}>
        <View style={styles.ratedChartWrapper}>
        <Text style={styles.numRated}>5</Text>
        <View><IoniconsIcon name="star" color={'#FFD040'} size={14}/></View>
        <View><Progress.Bar progress={0.67} width={150} height={4} borderWidth={0} style={{backgroundColor: '#0000001A', marginHorizontal: 12}} color="#4157FF"/></View>
        <Text style={styles.amountRated}>67%</Text>
        </View>

        <View style={styles.ratedChartWrapper}>
        <Text style={styles.numRated}>4</Text>
        <View><IoniconsIcon name="star" color={'#FFD040'} size={14}/></View>
        <View><Progress.Bar progress={0.2} width={150} height={4} borderWidth={0} style={{backgroundColor: '#0000001A', marginHorizontal: 12}} color="#4157FF"/></View>
        <Text style={styles.amountRated}>20%</Text>
        </View>

        <View style={styles.ratedChartWrapper}>
        <Text style={styles.numRated}>3</Text>
        <View><IoniconsIcon name="star" color={'#FFD040'} size={14}/></View>
        <View><Progress.Bar progress={0.07} width={150} height={4} borderWidth={0} style={{backgroundColor: '#0000001A', marginHorizontal: 12}} color="#4157FF"/></View>
        <Text style={styles.amountRated}>7%</Text>
        </View>

        <View style={styles.ratedChartWrapper}>
        <Text style={styles.numRated}>2</Text>
        <View><IoniconsIcon name="star" color={'#FFD040'} size={14}/></View>
        <View><Progress.Bar progress={0} width={150} height={4} borderWidth={0} style={{backgroundColor: '#0000001A', marginHorizontal: 12}} color="#4157FF"/></View>
        <Text style={styles.amountRated}>0%</Text>
        </View>

        <View style={styles.ratedChartWrapper}>
        <Text style={styles.numRated}>1</Text>
        <View><IoniconsIcon name="star" color={'#FFD040'} size={14}/></View>
        <View><Progress.Bar progress={0.02} width={150} height={4} borderWidth={0} style={{backgroundColor: '#0000001A', marginHorizontal: 12}} color="#4157FF"/></View>
        <Text style={styles.amountRated}>2%</Text>
        </View>
        </View>
      </View>

      <View style={styles.commentContain}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.commentRate}><IoniconsIcon name="star" color={'#FFD040'} size={14}/> 4.2</Text>
          <Text style={styles.commentRate}>05 - oct 2024</Text>
        </View>
        <Text style={styles.commentUser}>Erric Hoffman</Text>
        <Text style={styles.commentContent}>Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut nisi odio. Nulla facilisi. Nunc risus massa, gravida id egestas</Text>
      </View>
      <View style={styles.submitContain}>
      <TouchableOpacity style={styles.submitBtn} onPress={() => onClickNext({itemProduct, sizeSelected})}><Text style={styles.submitText}> GO TO CART </Text></TouchableOpacity>
      </View>
      <View style={{height:25}}/>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  NavigationContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconNav: {
    fontSize: 30,
    color: '#090F47',
    marginHorizontal: 16,
  },

  productTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#090F47',
    marginLeft: 16,
  },

  productDesc: {
    fontSize: 16,
    fontWeight: '400',
    color: '#090F4773',
    marginLeft: 16,
  },

  wrapIndexSelect: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  indexSelected: {
    backgroundColor: '#4157FF',
    width: 5,
    height: 5,
    borderRadius: 10,
    marginHorizontal: 4,
  },

  indexSelect: {
    backgroundColor: '#090F4726',
    width: 5,
    height: 5,
    borderRadius: 10,
    marginHorizontal: 4,
  },

  oldPrice: {
    color: '#090F4780',
    textDecorationLine: 'line-through',
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 16,
  },
  newPrice: {
    color: '#090F47',
    fontWeight: '700',
    fontSize: 20,
  },
  decsPrice:{
    color: '#090F47B2',
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 16,
  },

  addCart:{
    flexDirection: 'row',
    width: 100,
    marginRight: 32,
    alignItems: 'center',
  },

  divideContain:{
    borderBottomWidth: 1,
    borderColor: '#0000001A',
    width: 330,
    marginLeft: 45,
    marginTop: 20,
    marginBottom: 4,
  },

  formTitle:{
    color: '#090F47',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 8,
  },

  optionPackage:{
    backgroundColor: '#ddd',
    width: 80,
    height: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 16,
    marginHorizontal: 8,
  },

  optionPrice: {
    fontWeight: '700', fontSize: 16,
  },

  optionDesc: {
    fontWeight: '400', fontSize: 12,
  },

  optionPackageSelected:{
    backgroundColor: '#FFA41B0D',
    borderColor: '#FFA41B',
    borderWidth: 1,
  },

  optionPriceSelected: {
    color: '#FFA41B',
  },

  optionDescSelected: {
    color: '#FFA41B',
  },

  formDecs: {
    fontWeight: '300',
    color: '#090F4773',
    fontSize: 14,
    lineHeight: 20,
    width: 320,
  },

  ratedContain:{
    height: 100,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 30,
  },

  rated: {
    fontSize: 36  ,
    fontWeight: '600',
  },

  ratedDesc:{
    fontSize: 14,
    fontWeight: '400',
    color: '#090F4773',
    width: 125,
  },

  ratedChart:{
    borderLeftWidth: 1,
    borderLeftColor: '#0000001A',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  ratedChartWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  numRated: {
    color: '#090F4773',
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 4,
    marginLeft: 12,
  },

  amountRated: {
    fontSize: 16,
    fontWeight: '400',
    color: '#090F4773',
  },

  commentContain:{
    marginVertical: 8,
    marginHorizontal: 16,
    height: 120,
    justifyContent: 'space-evenly',
  },

  commentRate: {
    color: '#090F4773',
    fontSize: 16,
    fontWeight: '300',
  },

  commentUser: {
    fontSize: 16,
    fontWeight: '300',
    color: '#090F47',
  },

  submitContain:{
    alignItems: 'center',
  },

  commentContent: {
    color: '#090F4773',
    fontSize: 16,
    fontWeight: '300',
    alignItems:'flex-start',
  },

  submitBtn: {
    backgroundColor: '#4157FF',
    height: 50,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },

  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
export default ProductDetailScreen;
