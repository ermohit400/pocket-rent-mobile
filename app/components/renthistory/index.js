'use strict';
import React, { Component } from "react";
import { Container, Title, Content, Icon, Body, Header, Left, Right, Button, Text } from "native-base";
import styles from "./styles";
import * as Actions from '../../actions'; //Import your actions
import HeaderWidget from '../widgets/headerwidget';

class RentHistory extends Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
    	return (
			<Container>
				<HeaderWidget/>
				<Content padder>
	            	<Text>Rent History Content goes here</Text>
	          	</Content>
			</Container>
		);
    }
}

export default RentHistory;