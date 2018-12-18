import React, { Component } from "react";
import { Container, Title, Content, View, Icon, Body, Header, Left, Right, Button, Text, Form, Item, Label, Input } from "native-base";
import styles from "./styles";
import HeaderWidget from '../widgets/headerwidget';

class Signup extends Component {
  render() {
    const name = 'Sign Up';
    return (
      <Container>
          <HeaderWidget/>
          <Content padder>
            <Form>
              <Item floatingLabel>
                <Label>First Name</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Last Name</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Mobile</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input secureTextEntry />
              </Item>
              <Item floatingLabel last>
                <Label>Confirm Password</Label>
                <Input secureTextEntry />
              </Item>
            </Form>
            <Button block style={{ margin: 15, marginTop: 50 }}>
              <Text>Sign Up</Text>
            </Button>
            <Left>
              <Text>Already have account?</Text>
            </Left>
            <Right>
              <Text onPress={() => this.props.navigation.navigate('Login')} style={{color: 'blue'}}>Login</Text>
            </Right>
          </Content>
      </Container>
    );
  }
}

export default Signup;
