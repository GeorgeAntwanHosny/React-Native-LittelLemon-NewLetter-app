import * as React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  const onPressSubscribe = () => {
    navigation.navigate('Subscribe');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/little-lemon-logo.png')}
          accessibilityLabel={'Little Lemon Logo'}
          accessible={true}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <Pressable style={styles.button} onPress={onPressSubscribe}>
        <Text style={styles.textButton}>NewsLetter</Text>
      </Pressable>
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
    alignSelf: 'center',
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
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  regularText: {
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 2,
  },
  button: {
    paddingTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#227e1a',
    marginVertical: 30,
    width: 200,
    textAlign: 'center',
    padding: 20,
  },
  textButton: {
    paddingTop: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
});
export default WelcomeScreen;
