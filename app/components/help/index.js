import React, { Component } from "react";
import { Container, Title, Content, Icon, Body, Header, Left, Right, Button, Text } from "native-base";
import styles from "./styles";
import HeaderWidget from '../widgets/headerwidget';

class Help extends Component {
  render() {
    return (
      <Container>
          <HeaderWidget/>
          <Content padder>
            <Text>Help Content goes here</Text>
          </Content>
      </Container>
    );
  }
}

export default Help;
