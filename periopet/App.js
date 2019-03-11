import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';

import firebase from 'firebase';
import SignUp from './screens/signUp';
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
      <Container>
        <SignUp/>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
