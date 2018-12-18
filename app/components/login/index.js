import React, { Component } from "react";
import { Container, Title, Content, Icon, Body, Header, Left, Right, Form, Item, Label, Input } from "native-base";
import styles from "./styles";
import HeaderWidget from '../widgets/headerwidget';

import {
    ScrollView,
    Text,
    TextInput,
    View,
    Alert,
    Button,
    ActivityIndicator
} from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggingIn: false,
            message: ''
        };
    }

    _userLogin = () => {

        this.setState({ isLoggingIn: true, message: '' });

        var params = {
            username: this.state.username,
            password: this.state.password,
            grant_type: 'password'
        };

        var formBody = [];
        for (var property in params) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(params[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        var proceed = false;
        fetch("https://my-app-name.apps.stormpath.io/oauth/token", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            })
            .then((response) => response.json())
            .then((response) => {
                if (response.status==200) proceed = true;
                else this.setState({ message: response.message });
            })
            .then(() => {
                this.setState({ isLoggingIn: false })
                if (proceed) this.props.onLoginPress();
            })
            .catch(err => {
        this.setState({ message: err.message });
        this.setState({ isLoggingIn: false })
      });
    }

    clearUsername = () => {
        this._username.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword = () => {
        this._password.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

  render() {
    const name = 'Login';
    return (
      <Container>
          <HeaderWidget name={name}/>
          <Content padder>
            <ScrollView style={{padding: 20}}>
                  <TextInput
                    ref={component => this._username = component}
                    placeholder='Username' 
                    onChangeText={(username) => this.setState({username})}
                    onFocus={this.clearUsername}
                  />
                  <TextInput 
                    ref={component => this._password = component}
                    placeholder='Password' 
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                    onFocus={this.clearPassword}
                    onSubmitEditing={this._userLogin}
                  />
              {!!this.state.message && (
                <Text
                  style={{fontSize: 14, color: 'red', padding: 5}}>
                  {this.state.message}
                </Text>
              )}
            {this.state.isLoggingIn && <ActivityIndicator />}
            <View style={{margin:7}} />
            <Button 
              disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
                  onPress={this._userLogin}
                  title="Submit"
                />
            </ScrollView>

            <Left>
              <Text onPress={() => this.props.navigation.navigate('ForgotPassword')} style={{color: 'blue'}}>Forgot Password</Text>
            </Left>
            <Right>
              <Text onPress={() => this.props.navigation.navigate('Signup')} style={{color: 'blue'}}>Sign Up</Text>
            </Right>
          </Content>
      </Container>
    );
  }
}

export default Login;
