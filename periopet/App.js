import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import SignUp from './screens/signUp';
import Login from './screens/login';


export default class App extends React.Component {
  
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
