import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Footer
} from "native-base";
import styles from "./style"; 
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
const drawerCover = require("../../../assets/v1/drawer-sidebar-cover.png");
const appVersion = 'v1.1';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
      this.props.getNavigation();
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
          <Image source={drawerCover} style={styles.drawerCover} />
          <List
            dataArray={this.props.dataNavigation}
            renderRow={dataNav =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(dataNav.route)}
              >
                <Left>
                  <Icon
                    active
                    name={dataNav.icon}
                    style={{ color: dataNav.iconColor, fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {dataNav.name}
                  </Text>
                </Left>                
              </ListItem>}
          />
        </Content>
        <Footer>
          <Text>{appVersion}</Text>
        </Footer>
      </Container>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        dataNavigation: state.dataReducer.dataNavigation
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
