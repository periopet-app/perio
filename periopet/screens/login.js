import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Right, Title, Body, Left, Form, Container, Header, Content, Item, Input, Icon, Thumbnail, Button } from 'native-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDZvG2Iss1OMYcvemuVKzLCAeXmLUu7LlI",
    authDomain: "periopet.firebaseapp.com",
    databaseURL: "https://periopet.firebaseio.com",
    projectId: "periopet",
    storageBucket: "periopet.appspot.com",
    messagingSenderId: "200177448749"
};
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'burak',
            password: '',
        };
    }

    

    componentWillMount() {
        firebase.initializeApp(config);
        console.log('cwm başladı');
        console.log(firebase.database().ref('users').on('value', data => { data.toJSON() }));

        console.log('cwm bitti');

    };

    onPressButton(u, p) {
        u = this.state.username

    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: 'blue' }}>
                    <Left />
                    <Body>
                        <Title>PERIOPET</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{ padding: 8, marginTop: '6%' }}>
                    <Form>
                        <Item>
                            <Input placeholder="E-Mail" onChangeText={(text) => this.setState({ username: text })} />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                        <Button block style={{ marginTop: 20 }} onPress={this.onPressButton()}>
                            <Text style={{ color: 'white' }}>Giriş</Text>
                        </Button>
                        <Button block style={{ marginTop: 20 }}>
                            <Text style={{ color: 'white' }}>Google İle Giriş</Text>
                        </Button>
                        <Button block style={{ marginTop: 20 }} >
                            <Text style={{ color: 'white' }} onPress = {()=>this.props.navigation.navigate('SignUp')}>Kaydol</Text>
                        </Button>

                    </Form>
                </Content>
            </Container>
        );
    }
}
