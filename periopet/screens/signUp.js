import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Thumbnail, Button } from 'native-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDZvG2Iss1OMYcvemuVKzLCAeXmLUu7LlI",
    authDomain: "periopet.firebaseapp.com",
    databaseURL: "https://periopet.firebaseio.com",
    projectId: "periopet",
    storageBucket: "periopet.appspot.com",
    messagingSenderId: "200177448749"
  };
export default class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentWillMount(){
        firebase.initializeApp(config);
        firebase.database().ref('users/001').set({
          name:'ahmet',
          kullaniciAdi:'abk',
          sifre:'123'
        });
      };
    render() {
        return (
            <ImageBackground
                source={require('./../assets/cat.jpg')}
                style={{ width: '100%', height: '100%', flex:1 }}
                resizeMode='cover'
            >

                <Container style={{ marginTop: 20, backgroundColor:'transparent'}}>

                    <Content style={{ padding: 20, marginTop: '25%' }}>
                        <Thumbnail style={{ marginLeft: '40%', marginTop: '5%' }} large source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                        <Item rounded style={styles.myItem}>
                            <Icon active name='mail' />
                            <Input placeholder='E-Posta' />
                        </Item>
                        <Item rounded style={styles.myItem}>
                            <Icon active name='person' />
                            <Input placeholder='Kullanıcı Adı' />
                        </Item>
                        <Item rounded style={styles.myItem}>
                            <Icon active name='key' />
                            <Input placeholder='Şifre' />
                        </Item>
                        <Item rounded style={styles.myItem}>
                            <Icon active name='key' />
                            <Input placeholder='Şifre tekrarı' />
                        </Item>
                        <Button primary rounded style={{
                            marginTop: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '73%',
                            width:100,
                            height:60,
                            opacity:0.85
                        }}>
                            <Text style={{ color: 'white', margin: '10%', fontSize:15 }}>Gönder</Text>
                        </Button>
                    </Content>
                </Container>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    myItem: {
        marginTop: 15,
        backgroundColor:'white',
        opacity:0.8
    },
});