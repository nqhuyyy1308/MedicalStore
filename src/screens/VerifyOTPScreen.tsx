import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, {useEffect, useState} from 'react';

const VerifyOTPScreen = ({route, navigation}: any) => {
  const {indexNumber} = route.params;
  const [second, setSecond] = useState(59);

  const resendOTP = () => {
    if (second === 0) {
      setSecond(59);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      }

      if (second === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [second]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.contentH1}>Enter the verify code</Text>
        <Text style={styles.contentNotice}>
          We just send you a verification code via phone {indexNumber}
        </Text>
      </View>
      <View style={styles.otpWrapper}>
        <OTPInputView
          style={styles.otpInput}
          pinCount={6}
          autoFocusOnLoad
          keyboardType="numeric"
          codeInputFieldStyle={[
            styles.underlineStyleBase,
            styles.borderStyleBase,
          ]}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <TouchableOpacity style={styles.otpBtn}>
          <Text style={styles.otpBtnText}>SUBMIT CODE</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resendNotice}>
        The verify code will expire in 00:{second < 10 ? `0${second}` : second}
      </Text>
      <TouchableOpacity onPress={resendOTP}>
        <Text style={[styles.resendBtn, second > 0 && styles.resendBtnDisable]}>
          Resend Code
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentWrapper: {
    marginLeft: 32,
    marginTop: 16,
    width: 300,
  },

  contentH1: {
    fontSize: 24,
    color: '#090F47',
    fontWeight: '700',
    marginBottom: 12,
  },
  contentNotice: {
    fontSize: 14,
    color: '#090F4773',
    fontWeight: '400',
    lineHeight: 21,
  },

  otpWrapper: {
    alignItems: 'center',
  },

  otpInput: {
    height: 120,
  },

  borderStyleBase: {
    width: 40,
    height: 45,
    color: '#090F47',
    margin: 4,
    fontSize: 20,
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#090F47',
  },

  underlineStyleHighLighted: {
    borderColor: '#4157FF',
  },

  otpBtn: {
    backgroundColor: '#4157FF',
    borderRadius: 24,
    height: 45,
    width: 330,
    justifyContent: 'center',
  },

  otpBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  resendNotice: {
    color: '#090F4773',
    fontSize: 14,
    textAlign: 'center',
    height: 40,
    marginTop: 30,
  },

  resendBtn: {
    color: '#4157FF',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },

  resendBtnDisable: {
    color: '#090F4773',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
});
export default VerifyOTPScreen;
