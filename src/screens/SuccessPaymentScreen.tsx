import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SuccessPaymentScreen = (params: any) => {

    const onClickNext = () => {
        // console.log('onClickNext -> navigation', navigation);
        params.navigation.navigate('Home');
    };
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.successContain}>
            <Image source={require('../assets/images/success_otp.png')} style={styles.successImg}/>
            <Text style={styles.successText}>Thank you</Text>
            <Text style={styles.successDesc}>Your Order will be delivered with invoice #9ds69hs. You can track the delivery in the order section.</Text>
            </View>
            <TouchableOpacity style={styles.clickBtn} onPress={onClickNext}><Text style={styles.textBtn}>Continue Order</Text></TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
    },

    successContain: {
        alignItems: 'center',
        height: 400,
        justifyContent: 'space-between',
    },

    successImg: {
        width: 300,
        height: 250,
    },

    successText: {
        color: '#090F47',
        fontSize: 28,
        fontWeight: '500',
        marginTop: 50,
    },

    successDesc: {
        color: '#090F4773',
        fontSize: 16,
        fontWeight: '300',
        width: 330,
        textAlign: 'center',
        marginTop: 20,
    },

    clickBtn: {
        height: 50,
        backgroundColor: '#4157FF',
        borderRadius: 32,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textBtn: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },

});
export default SuccessPaymentScreen;
