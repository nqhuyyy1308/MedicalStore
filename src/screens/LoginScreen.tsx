import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const LoginScreen = () => {
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
          {' '}
          Please Enter your Mobile Number to Login/Sign Up{' '}
        </Text>
        <TextInput placeholder="Your Phone" />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  formText: {
    fontSize: 20,
    fontWeight: '300',
    color: '#090F4773',
    lineHeight: 24,
    textAlign: 'left',
  },

  formInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    padding: 10,
    margin: 12,
  },
});

export default LoginScreen;
