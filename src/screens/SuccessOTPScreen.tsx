import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SuccessOTPScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.noticeSection}>
        <Image
          style={styles.noticeImage}
          source={require('../assets/images/success_otp.png')}
        />
        <View style={styles.formNoticeSection}>
          <Text style={styles.h1Content}>Phone Number Verified</Text>
          <Text style={styles.discContent}>
            Congradulations, your phone number has been verified. You can start
            using the app
          </Text>
        </View>
      </View>
      <View style={styles.btnSuccess}>
        <TouchableOpacity
          style={styles.borderSuccess}
          onPress={() => navigation.navigate('HomeTab')}>
          <Text style={styles.textSuccess}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },

  noticeSection: {
    alignItems: 'center',
  },

  noticeImage: {
    width: 270,
    height: 215,
  },

  formNoticeSection: {
    alignItems: 'center',
    width: 280,
    height: 130,
    justifyContent: 'space-between',
    marginTop: 48,
  },

  h1Content: {
    color: '#090F47',
    fontSize: 24,
    fontWeight: '700',
  },

  discContent: {
    color: '#090F4773',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 24,
    textAlign: 'center',
  },

  btnSuccess: {
    alignItems: 'center',
    marginTop: 48,
  },

  borderSuccess: {
    backgroundColor: '#4157FF',
    borderRadius: 16,
    width: 330,
    height: 45,
    justifyContent: 'center',
  },

  textSuccess: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default SuccessOTPScreen;
