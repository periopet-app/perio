import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDZvG2Iss1OMYcvemuVKzLCAeXmLUu7LlI",
  authDomain: "periopet.firebaseapp.com",
  databaseURL: "https://periopet.firebaseio.com",
  projectId: "periopet",
  storageBucket: "periopet.appspot.com",
  messagingSenderId: "200177448749"
};

export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp(config);
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up Aappppp.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
