import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { images } from '../assets/images/images';

const CheckOutScreen = ({navigation}: any) => {
    const userAddress = [
        {
            id: 1,
            nameAddress: 'Home',
            phoneNumber: '(205) 555-024',
            detailAddress: '1786 Wheeler Bridge',
        },
        {
            id: 2,
            nameAddress: 'Office',
            phoneNumber: '(205) 555-024',
            detailAddress: '1786 w Dallas St underfield',
        },
    ];

    const [selectAddress, setSelectAddress] = useState(0);

    const onClickSelect = (id: any) => {
        setSelectAddress(id);
    };

    const onClickNext = () => {
        if(selectAddress == 0){
            Alert.alert('Please select your address !');
        }else{
            navigation.navigate('SuccessPayment');
        }
    };

    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.headerNav} activeOpacity={1}>
                <AntdesignIcon name="arrowleft" style={styles.iconNav} onPress={() => {navigation.goBack();}}/>
                <Text style={styles.nameScreen}>Your cart</Text>
            </TouchableOpacity>

            <View style={styles.totalItem}>
                <View style={styles.headerCart}>
                <Text style={styles.amountProduct}>
                    2 items in your cart
                </Text>
                <View style={styles.textPay}>
                    <Text style={styles.textTotal}>TOTAL</Text>
                    <Text style={styles.textPrice}>Rs 200.00</Text>
                </View>
                </View>
            </View>

            <View style={styles.addressSection}>
            <Text style={styles.titleAddress}>Delivery Address</Text>
            {userAddress.map((item) => {
                return(
                    <TouchableOpacity style={[styles.containerAddress, selectAddress === item.id && styles.containerSelectedAddress]} onPress={() =>onClickSelect(item.id)}>
                        <View style={styles.formAddress}>
                            <View style={[styles.selectAddress, selectAddress === item.id && styles.selectedAddress]}><View style={selectAddress === item.id && styles.selectedItem}/></View>
                            <View style={styles.wrapInfoAddress}>
                                        <View style={styles.infoAddress}>
                                            <Text style={styles.nameAddress}>{item.nameAddress}</Text>
                                            <Text style={styles.phoneAddress}>{item.phoneNumber}</Text>
                                            <Text style={styles.detailAddress}>{item.detailAddress}</Text>
                                        </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.editBtn}><AntdesignIcon name="edit" style={styles.editIcon}/></TouchableOpacity>
                    </TouchableOpacity>
                );
            })}
            <TouchableOpacity style={styles.clickAdd}>
              <IoniconsIcon name="add" style={styles.iconAdd}/>
                <Text style={styles.textAdd}>
                    Add Address
                </Text>
            </TouchableOpacity>
            </View>

                <Text style={styles.methodPayment}>Payment method</Text>
            <TouchableOpacity>
                <View style={styles.boxPayment}>
                    <Image source={images.paymentMethod} style={styles.imgPayment}/>
                    <Text style={styles.textPayment}>Cash on Delivery</Text>
                    <View style={styles.selectPayment}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCheckout} onPress={onClickNext}>
                <Text style={styles.textCheckout}>Pay Now</Text>
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
        marginHorizontal: 20,
        marginVertical: 32,
    },

    totalItem:{
        height: 90,
    },

    amountProduct: {
        fontSize: 16,
        color: '#090F4773',
        fontWeight: '400',
    },

    textPay: {
        width: 100,
        height: 50,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },

    textTotal: {
        color: '#090F4773',
        fontSize: 16,
        fontWeight: '400',
    },

    textPrice: {
        color: '#090F47',
        fontSize: 18,
        fontWeight: '500',
    },

    addressSection:{
        height: 450,
        marginBottom: 16,
    },

    titleAddress: {
        color: '#090F47',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 24,
    },
    containerAddress:{
        height: 115,
        marginLeft: 36,
        marginRight: 20,
        flexDirection: 'row',
        marginVertical: 16,
        marginBottom: -4,
        borderWidth: 1,
        borderColor: '#090F4726',
        borderRadius: 20,
    },

    containerSelectedAddress:{
        height: 115,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        marginVertical: 16,
        marginBottom: -4,
        borderWidth: 1,
        borderColor: '#090F4726',
        borderRadius: 20,
    },

    formAddress:{
        flexDirection: 'row',
        width: 330,
        justifyContent: 'space-around',
    },

    selectAddress:{
        borderWidth: 1,
        borderColor: '#090F4726',
        width: 20,
        height: 20,
        borderRadius: 20,
        marginTop: 12,
    },

    selectedAddress:{
        borderWidth: 1,
        borderColor: '#4157FF',
        width: 20,
        height: 20,
        borderRadius: 20,
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    selectedItem: {
        backgroundColor: '#4157FF',
        width: 12,
        height:12,
        borderRadius:12,
    },

    wrapInfoAddress:{
        width: 250,
    },

    infoAddress:{
        height: 110,
        justifyContent: 'center',
    },

    nameAddress:{
        color: '#090F47',
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.5,
    },

    phoneAddress:{
        color: '#090F4773',
        fontSize: 14,
        fontWeight: '300',
        letterSpacing: 1.2,
        marginVertical: 8,
    },

    detailAddress:{
        color: '#090F4773',
        fontSize: 14,
        fontWeight: '300',
        letterSpacing: 1.2,
    },

    editBtn: {
        height: 30,
        width: 30,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    editIcon:{
        color: '#090F4740',
        fontSize: 24,
    },

    clickAdd: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        margin: 16,
        width: 140,
        marginLeft: 280,
    },

    iconAdd: {
        color: '#4157FF',
        fontSize: 16,
        fontWeight: '400',
        marginRight: 4,
    },

    textAdd: {
        color: '#4157FF',
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: 1.2,
    },

    sectionPayment: {
        backgroundColor: 'red',
        height: 350,
    },

    methodPayment: {
    color: '#090F47',
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 20,
    },

    boxPayment: {
        // backgroundColor: 'red',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#090F4740',
        borderRadius: 8,
        margin: 20,
    },

    imgPayment: {
        width: 50,
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#090F471A',
        objectFit: 'contain',
        marginHorizontal: 16,
    },

    textPayment: {
        color: '#090F47',
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 16,
    },

    selectPayment: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#090F4740',
        borderRadius: 20,
        marginLeft: 100,
    },

    btnCheckout: {
        height: 50,
        marginHorizontal: 24,
        marginVertical: 50,
        borderRadius: 32,
        backgroundColor: '#4157FF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textCheckout: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },

});
export default CheckOutScreen;
