import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import SignUp from './screens/signUp';
import Login from './screens/login';
import Home from './screens/home'

import { createStackNavigator, createAppContainer } from 'react-navigation';


const SignUpstack= createStackNavigator({
  SignUp: SignUp,
})

const HomeStack= createStackNavigator({
  Home: Home
})

const AppNavigator = createStackNavigator({

SignUp:SignUpstack,
Home: HomeStack,
Login:Login

},
  { 
    initialRouteName: 'Login' 
  }
);

const AppContainer = createAppContainer(AppNavigator,);


export default class App extends React.Component {

  render() {
    return <AppContainer></AppContainer>;
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
