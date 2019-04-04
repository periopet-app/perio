import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Right,Title,Body,Left,Form, Container, Header, Content, Item, Input, Icon, Thumbnail, Button } from 'native-base';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'burak',
            password:'',
        };
    }

onPressButton(u,p){
    u = this.state.username

}

    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'blue'}}>
                    <Left />
                    <Body>
                        <Title>PERIOPET</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{ padding: 8 ,marginTop:'6%'}}>
                    <Form>
                        <Item>
                            <Input placeholder="E-Mail" onChangeText={ (text) => this.setState({username : text})} />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                        <Button block style={{ marginTop: 20 }} onPress={this.onPressButton()}>
                            <Text style={{ color: 'white' }}>Giriş</Text>
                        </Button>
                       <Text style={{marginLeft:'46%',marginTop:20}}>{this.state.username}</Text> 
                        <Button block style={{ marginTop: 20 }}>
                        <Text style={{ color: 'white' }}>GOOGLE İLE GİRİŞ</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
