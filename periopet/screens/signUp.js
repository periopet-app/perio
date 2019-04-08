import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Alert, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Thumbnail, Button } from 'native-base';
import firebase from 'firebase';
import { Constants, ImagePicker, Permissions } from "expo";
import uuid from 'uuid';

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
            user: {
                username: "a",
                email: "",
                password: "",
                nameSurname: "s",
                petType: "",
                city: "",
                district: ""
            }
        };
    }
    _onChooseImagePress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
            this._uploadImage(result.uri, 'test-image')
                .then(() => {
                    Alert.alert('Success');
                })
                .catch((err) => {
                    console.log('onchooseimage catch err : ' + err);
                });
        }
    }
    _urlToBlob(url) { 
        return new Promise((resolve, reject) => { 
            var xhr = new XMLHttpRequest(); 
            xhr.onerror = reject; 
            xhr.onreadystatechange = () => { if (xhr.readyState === 4) { resolve(xhr.response); } };
            xhr.open('GET', url); xhr.responseType = 'blob'; 
            // convert type 
            xhr.send(); 
            }) 
        };
    _uploadImage = async (uri, imageName = 'test-img') => {
        console.log('blob önce');

        //const response = await fetch(uri);
        //console.log('fetchden sonra');
        const blob = this._urlToBlob(uri);
        console.log('blob sonra', blob);

        var ref = firebase.storage().ref().child('images/' + imageName);

        return ref.put(blob);
    }
    async componentDidMount() {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        await Permissions.askAsync(Permissions.CAMERA);
    }
   /* componentWillMount() {
        firebase.initializeApp(config);
        console.log('cwm başladı');
        console.log(firebase.database().ref('users').on('value', data => { console.log(data.toJSON()) }));
        console.log('cwm bitti');

    };*/
    _pickImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
        this._handleImagePicked(pickerResult);
    };
    _userSignUp = () => {
        let { username, email, password, nameSurname, petType, city, district } = this.state.user;
        firebase.database().ref('users/').push().set({
            username,
            email,
            password,
            nameSurname,
            petType,
            city,
            district
        })
            .then(() => {
                console.log('user was added');
            })
            .catch(err => {
                console.log(err);
            });
    };
    _handleImagePicked = async pickerResult => {
        try {
          //this.setState({ uploading: true });
            
          if (!pickerResult.cancelled) {
            console.log(pickerResult.uri);
            uploadUrl = await uploadImageAsync(pickerResult.uri);
            console.log('handle await sonra')
            
           // this.setState({ image: uploadUrl });
          }
        } catch (e) {
          console.log('handle image pickes error : ' + e);
          alert('Upload failed, sorry :(');
        } finally {
          //this.setState({ uploading: false });
        }
    };
    _takePhoto = async () => {
        let pickerResult = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        this._handleImagePicked(pickerResult);
      };
    render() {
        return (
            <ImageBackground
                source={require('./../assets/cat.jpg')}
                style={{ width: '100%', height: '100%', flex: 1 }}
                resizeMode='cover'
            >

                <Container style={{ marginTop: '0%', backgroundColor: 'transparent' }}>

                    <Content style={{
                        padding: 20,
                        marginTop: '10%'
                    }}>
                        <TouchableHighlight onPress={this._onChooseImagePress}>
                            <Thumbnail
                                style={{
                                    marginLeft: '40%',
                                    marginTop: '5%'
                                }}
                                large source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                        </TouchableHighlight>
                        <Item rounded style={styles.myItem}>
                            <Icon active name='mail' />
                            <Input
                                placeholder='E-Posta'
                                onChangeText={
                                    (text) =>
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                email: text
                                            }
                                        }))} />
                        </Item>
                        <Item rounded style={styles.myItem}>
                            <Icon active name='person' />
                            <Input
                                placeholder='Kullanıcı Adı'
                                onChangeText={
                                    (text) =>
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                username: text
                                            }
                                        }))} />
                        </Item>
                        <Item rounded style={styles.myItem}>
                            <Icon active name='key' />
                            <Input
                                placeholder='password'
                                onChangeText={
                                    (text) =>
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                password: text
                                            }
                                        }))} />
                        </Item>
                        <Item rounded style={styles.myItem}>
                            <Icon active name='key' />
                            <Input
                                placeholder='Şifre tekrarı' />
                        </Item>
                        <Item rounded style={styles.myItem}>
                            <Icon active name='key' />
                            <Input placeholder='Ad Soyad'
                                onChangeText={
                                    (text) =>

                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                nameSurname: text
                                            }
                                        }))
                                } />
                        </Item>
                        <Item rounded style={styles.myItem}>
                            <Icon active name='key' />
                            <Input placeholder='Hayvan Türü'
                                onChangeText={
                                    (text) =>
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                petType: text
                                            }
                                        }))} />
                        </Item>
                        <Item rounded style={styles.myItem}>
                            <Icon active name='key' />
                            <Input placeholder='İl'
                                onChangeText={
                                    (text) =>
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                city: text
                                            }
                                        }))} />
                        </Item>
                        <Item rounded style={styles.myItem}>
                            <Icon active name='key' />
                            <Input placeholder='İlçe'
                                onChangeText={
                                    (text) =>
                                        this.setState(prevState => ({
                                            user: {
                                                ...prevState.user,
                                                district: text
                                            }
                                        }))} />
                        </Item>
                        <Button primary rounded style={{
                            marginTop: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '73%',
                            width: 100,
                            height: 60,
                            opacity: 0.85
                        }} onPress={this._userSignUp}>
                            <Text style={{ color: 'white', margin: '10%', fontSize: 15 }}>{this.state.user.nameSurname}</Text>
                        </Button>
                    </Content>
                </Container>
            </ImageBackground>
        );
    }
}

async function uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      console.log('260.satır xhr.response :' + xhr.responseType);

      xhr.open('GET', uri, true);
      console.log('260.satır xhr.response :' + xhr.responseType);

      xhr.send(null);
      console.log('260.satır xhr.response :' + xhr.responseType);

    });
  
    const ref = firebase
      .storage()
      .ref()
      .child(uuid.v4());
    const snapshot = await ref.put(blob);
  
    // We're done with the blob, close and release it
    blob.close();
  
    return await snapshot.ref.getDownloadURL();
  }

  _getAllUsers = () => {
    firebase.database().ref('users').once('value', (data) => { console.log(data) });
}


const styles = StyleSheet.create({
    myItem: {
        marginTop: 15,
        backgroundColor: 'white',
        opacity: 0.8
    },
});