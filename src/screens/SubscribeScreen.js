import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import {validateEmail} from '../utils';
const SubscribeScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [valid, setValid] = React.useState(false);
  const onChangeEmail = e => {
    setEmail(e);
    if (validateEmail(e)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  const onPressSubmitSubscribe = () => {
    Alert.alert('', 'Thanks for Subscribing stay tuned!', [
      {text: 'OK', onPress: () => navigation.navigate('Welcome')},
    ]);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/little-lemon-logo-grey.png')}
          accessibilityLabel={'Little Lemon Logo'}
          accessible={true}
          resizeMode="contain"
        />
        <Text style={styles.regularText}>
          SubScribe to our NewsLetter for our latest delicious recipes!
        </Text>
      </View>
      <View style={styles.formSubScribe}>
        <TextInput
          placeholder="Type Your Email"
          keyboardType="email-address"
          style={styles.inputStyle}
          value={email}
          onChangeText={onChangeEmail}
        />
        <Pressable
          style={valid ? styles.buttonValid : styles.buttonNotValid}
          onPress={onPressSubmitSubscribe}
          disabled={!valid}>
          <Text style={styles.textButton}>SubScribe</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headerWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  headerText: {
    padding: 20,
    paddingRight: 30,
    textAlign: 'center',
    fontSize: 20,
    color: 'grey',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  regularText: {
    marginHorizontal: 30,
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 20,
  },
  buttonValid: {
    paddingTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#227e1a',
    marginVertical: 30,
    width: 250,
    textAlign: 'center',
    padding: 15,
  },
  buttonNotValid: {
    paddingTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'grey',
    marginVertical: 30,
    width: 250,
    textAlign: 'center',
    padding: 15,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 10,
  },
  formSubScribe: {
    padding: 20,
  },
});
export default SubscribeScreen;
