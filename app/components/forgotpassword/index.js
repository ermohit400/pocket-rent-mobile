import React, { Component } from "react";
import { Container, Title, Content, Icon, Body, Header, Left, Right, Button, Text, Form, Item, Label, Input } from "native-base";
import styles from "./styles";
import HeaderWidget from '../widgets/headerwidget';

class ForgotPassword extends Component {
  render() {
    const name = 'Login';
    return (
      <Container>
          <HeaderWidget/>
          <Content padder>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input />
              </Item>
            </Form>
            <Button block style={{ margin: 15, marginTop: 50 }}>
              <Text>Submit</Text>
            </Button>
            <Left/>
            <Right>
              <Text onPress={() => this.props.navigation.navigate('Login')} style={{color: 'blue'}}>Login</Text>
            </Right>
          </Content>
      </Container>
    );
  }
}

export default ForgotPassword;
