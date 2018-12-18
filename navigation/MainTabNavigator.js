import React from 'react';
import { Root } from "native-base";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import SideBar from "../app/components/sidebar";
//import TestJson from "../app/components/testjson/";
import Home from "../app/components/home/";
import RentHistory from "../app/components/renthistory/";
import Help from "../app/components/help/";
import Login from "../app/components/login/";
import Signup from "../app/components/signup/";
import ForgotPassword from "../app/components/forgotpassword/";

const Drawer = createDrawerNavigator({
        Home: {
          screen: Home,
        },
      },
    {
      initialRouteName: "Home",
      contentOptions: {
        activeTintColor: "#e91e63"
      },
      contentComponent: props => <SideBar {...props} />
    }
);

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Drawer: { screen: Drawer },
    RentHistory: { screen: RentHistory },
    //TestJson: { screen: TestJson },
    Help: { screen: Help },
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgotPassword: { screen: ForgotPassword },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
