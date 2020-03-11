import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity, View
} from 'react-native';
import {
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
  Colors,
  IconButton,
  Provider,
  Menu,
  Divider,
  RadioButton, TouchableRipple
} from 'react-native-paper';


export default class FlowChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      iconBtnSize: 35,
      pressedStatusER: true,
      pressedStatusPR: true,
      pressedStatusHer2: true,
    };
  }

  changeStateER = () => {
    this.setState({pressedStatusER: !this.state.pressedStatusER});

  };changeStatePR = () => {
    this.setState({pressedStatusPR: !this.state.pressedStatusPR});

  };changeStateHer2 = () => {
    this.setState({pressedStatusHer2: !this.state.pressedStatusHer2});

  };
  // const text1 = this.props.navigation.state.params.text1;
  // const receivedValue = this.props.navigation.state.params.receivedValue;
  render() {

    return (


        <View style={{flex: 1}}>
          <Text>{(3213213)}</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  BtnType: {
    backgroundColor: 'blue', padding: 8, borderRadius: 10
  }, BtnTypeGray: {
    padding: 8,
    backgroundColor: '#b1b1b1', borderRadius: 10
  },
  button: {backgroundColor: '#c1c1c1'},
  buttonPress: {backgroundColor: '#26bf17'},
  buttonPressMinus: {backgroundColor: '#dc0000'},

  cardStyle: {
    elevation: 16,
    marginTop: -80,
    borderRadius: 12,
    padding: 8,
    paddingTop: 16
  },

  cardTitleStyle: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 24,
    color: "#207cd0"
  },


  container: {
    flex: 7,
    backgroundColor: '#fff',
    padding: 16,
    marginTop: -30
  },

  container2: {
    flex: 4,
  },

  IconButton: {
    backgroundColor: "#fa1800",
    borderRadius: 35,
    elevation: 4,
    height: 70,
    width: 70,
    marginBottom: -45,
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    padding: 10,
    borderWidth: 1,
    width: '90%',
    marginBottom: 10
  },


  overlayStyle: {
    padding: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgb(6,55,159)'
  },

  overlayTextStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "yellow",
    fontStyle: "italic"
  },

  overlayTextStyle2: {
    marginBottom: 40,
    fontSize: 18,
    fontWeight: "100",
    color: "white"
  },

  signUpText: {
    justifyContent: 'flex-end',
    color: '#207cd0',
    paddingLeft: 20,
    paddingBottom: 4
  },

  signUpTextView: {
    justifyContent: 'flex-end',
    color: 'red'
  },


});