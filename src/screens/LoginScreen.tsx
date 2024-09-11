import {Button, Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native';

const LoginScreen = ({navigation}: any) => {

  const clickOnNext = () =>  {
    navigation.navigate('VerifyOTP')
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/login_logo.png')}></Image>
        <Text style={styles.logoText}> Nilkanth Medical </Text>
      </View>
      <View style={styles.formWrapper}>
        <Text style={styles.formText}>
          Please Enter your Mobile Number to Login/Sign Up
        </Text>
        <TextInput
          placeholder="+84 764951786"
          style={styles.formInput}
        
        />
        <TouchableOpacity onPress={clickOnNext} style={styles.formButton}><Text style={styles.buttonText}>CONTINUE</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  logoImage: {
    width: 100,
    height: 100,
    justifyContent: 'center',
  },

  logoText: {
    fontSize: 26,
    color: '#000000',
    fontStyle: 'italic',
    fontWeight: '500',
  },

  formWrapper: {
    flex: 1.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 350,
  },

  formText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#090F4773',
    lineHeight: 24,
    textAlign: 'left',
    width: 300,
    marginTop: 64
  },

  formInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 16,
    padding: 10,
    margin: 12,
    fontSize: 20,
    marginTop: 36
  },

  formButton: {
    borderRadius: 16,
    width: 330,
    height: 45,
    backgroundColor: '#4157FF',
    justifyContent: 'center',
    shadowColor: '#4157FF1A',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500'
  }
});

export default LoginScreen;
