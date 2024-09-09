import React, {useRef, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

type OnboardingCarousel = {
    id: string;
    title: string;
    descriptions: string;
  };
  
const carouselItems: OnboardingCarousel[] = [
    {
      id: '01',
      title: 'View and buy Medicine online',
      descriptions:
        'Etiam mollis metus non purus faucibus sollicitudin. Pellentesque sagittis mi. Integer.',
    },
    {
      id: '02',
      title: 'View 02',
      descriptions: 'Etiam mollis metus non purus faucibus sollicitudin',
    },
    {
      id: '03',
      title: 'View 03',
      descriptions: 'Etiam mollis metus non purus faucibus sollicitudin',
    },
    {
      id: '04',
      title: 'View 04',
      descriptions: 'Etiam mollis metus non purus faucibus sollicitudin',
    },
  ];

  const OnboardScreen = ({ navigation }:any) => {
  const carouselRef = useRef();

  const [indexSelected, setIndexSelected] = useState(0);
  const renderItem = (item: OnboardingCarousel) => {
    return(
    <View>
        <Text style={styles.textH1}>{item.title}</Text>
        <Text style={styles.textDesc}>{item.descriptions}</Text>
    </View>
    )
  }

  const onScrollIndexChanged = (index:number) => {
    console.log('index', index)
    setIndexSelected(index)
  }

  const onClickSkip = () => {
    if(indexSelected > 0){
      setIndexSelected(indexSelected - 1)
      carouselRef.current.snapToItem(indexSelected - 1)
    }
  }

  const onClickNext = () => {
    if(indexSelected < carouselItems.length - 1){
      setIndexSelected(indexSelected + 1)
      carouselRef.current.snapToItem(indexSelected + 1)
    }

    if(indexSelected === carouselItems.length - 1){
        navigation.navigate('Login')
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/images/onboard_image.png')}
          style={styles.imageOnboard}
        />
      </View>
      <Carousel
              ref={carouselRef}
              data={carouselItems}
              renderItem={({item}) => renderItem(item)}
              sliderWidth={300}
              itemWidth={300}
              slideStyle = {styles.carouselViewContainer}
              onScrollIndexChanged = {onScrollIndexChanged}
            />
      <View style={styles.footerSection}>
        <TouchableOpacity onPress={onClickSkip} style={styles.preAnimationClick}><Text style={[styles.preAnimationText, indexSelected > 0 && styles.isPreAnimation]}>Skip</Text></TouchableOpacity>
        <View style={styles.wrapIndexSelect}>
          <Text style={[styles.indexSelect, indexSelected === 0 && styles.indexSelected]}></Text>
          <Text style={[styles.indexSelect, indexSelected === 1 && styles.indexSelected]}></Text>
          <Text style={[styles.indexSelect, indexSelected === 2 && styles.indexSelected]}></Text>
          <Text style={[styles.indexSelect, indexSelected === 3 && styles.indexSelected]}></Text>
        </View>
        <TouchableOpacity onPress={onClickNext} style={styles.conAnimationClick}>
            <Text style={styles.conAnimationText}>
                {indexSelected === carouselItems.length - 1 ? "Login" : "Next"}
            </Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    carouselViewContainer: {
      height: 200,
      alignItems: 'center',
      justifyContent: 'space-around',
      flex: 0,
    },
    imageWrapper: {
      flex: 2,
      justifyContent: 'flex-end',
    },
    textH1: {
      width: 238,
      color: '#090F47',
      fontSize: 24,
      fontWeight: '700',
      textAlign: 'center',
      lineHeight: 32,
      letterSpacing: 1,
    },
  
    textDesc: {
      width: 255,
      color: '#090F4773',
      fontSize: 16,
      fontWeight: '300',
      textAlign: 'center',
      lineHeight: 24,
      letterSpacing: 0.5,
      marginTop: 16,
    },
  
    imageOnboard: {
      height: 284,
      width: 256.3,
    },
  
    wrapIndexSelect: {
      flexDirection: 'row',
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
      marginBottom: 16
    },
  
    indexSelect:{
      height: 5,
      width: 5,
      borderRadius: 5,
      backgroundColor: '#C4C4C4',
      marginLeft: 4,
      marginRight: 4
    },
  
    indexSelected: {
      height: 5,
      width: 5,
      borderRadius: 5,
      backgroundColor: '#4157FF',
      marginLeft: 4,
      marginRight: 4
    },
  
    footerSection: {
      flexDirection: 'row',
    },
  
    preAnimationClick: {
      flex: 1,
      marginBottom: 16
    },
  
    preAnimationText: {
      color: '#090F4773',
      fontSize: 14,
      textAlign: 'center',
      fontWeight: '400'
    },
  
    isPreAnimation: {
      color: '#4157FF',
      fontSize: 14,
      textAlign: 'center',
      fontWeight: '700'
    },
  
    conAnimationClick: {
      flex: 1,
      marginBottom: 16
    },
  
    conAnimationText: {
      color: '#4157FF',
      fontSize: 14,
      textAlign: 'center',
      fontWeight: '700'
    },
  });
  
  export default OnboardScreen;