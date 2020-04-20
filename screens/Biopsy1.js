import React, {Component} from 'react';
import {
  StyleSheet,
  Text,StackActions,
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

let receivedParams = '';


export default class Biopsy extends Component {

  constructor(props) {
    super(props);

    this.state = {
      iconBtnSize: 35,
      pressedStatusER: false,   
      pressedStatusPR: false,
      pressedStatusHer2: false,
    };
  }

  onPress() {


  }

  changeStateER = () => {
    this.setState({pressedStatusER: !this.state.pressedStatusER});

  };changeStatePR = () => {
    this.setState({pressedStatusPR: !this.state.pressedStatusPR});
 
  };changeStateHer2 = () => {
    this.setState({pressedStatusHer2: !this.state.pressedStatusHer2});

  };

  passdata(data){
    data={...data,...this.state}
    this.props.navigation.navigate("analysis",data)
  }
  

  render() {
    receivedParams=this.props.route.params;
    return (
      <View style={{flex: 1}}>
          <View style={styles.container2}>
            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTextStyle}>Biopsy Report 1</Text>
              <Text style={styles.overlayTextStyle2}>Select the results of the tests if positive or negative.</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <Card.Content>
                <View
                    style={{
                      flexDirection: "row",
                      marginTop: 20,
                      padding: 5,
                      justifyContent: "space-around",
                      alignContent: "center"
                    }}>
                  <Text style={{textAlignVertical: "center", fontSize: 24, fontWeight: "bold"}}>ER</Text>
                  <TouchableOpacity onPress={this.changeStateER}>
                    <IconButton icon='plus' size={this.state.iconBtnSize}
                                style={this.state.pressedStatusER ? styles.button : styles.buttonPress
                                }/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.changeStateER}>
                    <IconButton icon='minus' size={this.state.iconBtnSize}
                                style={!this.state.pressedStatusER ? styles.button : styles.buttonPressMinus
                                }/>
                  </TouchableOpacity>
                </View>
                <View
                    style={{
                      flexDirection: "row",
                      marginTop: 20,
                      padding: 5,
                      justifyContent: "space-around",
                      alignContent: "center"
                    }}>
                  <Text style={{textAlignVertical: "center", fontSize: 24, fontWeight: "bold"}}>PR</Text>
                  <TouchableOpacity onPress={this.changeStatePR}>
                    <IconButton icon='plus' size={this.state.iconBtnSize}
                                style={this.state.pressedStatusPR ? styles.button : styles.buttonPress
                                }/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.changeStatePR}>
                    <IconButton icon='minus' size={this.state.iconBtnSize}
                                style={!this.state.pressedStatusPR ? styles.button : styles.buttonPressMinus
                                }/>
                  </TouchableOpacity>
                </View>
                <View
                    style={{
                      flexDirection: "row",
                      marginTop: 20,
                      padding: 5,
                      justifyContent: "space-around",
                      alignContent: "center"
                    }}>
                  <Text style={{textAlignVertical: "center", fontSize: 24, fontWeight: "bold"}}>Her2</Text>
                  <TouchableOpacity onPress={this.changeStateHer2}>
                    <IconButton icon='plus' size={this.state.iconBtnSize}
                                style={this.state.pressedStatusHer2 ? styles.button : styles.buttonPress
                                }/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.changeStateHer2}>
                    <IconButton icon='minus' size={this.state.iconBtnSize}
                                style={!this.state.pressedStatusHer2 ? styles.button : styles.buttonPressMinus
                                }/>
                  </TouchableOpacity>
                </View>
              </Card.Content>
              <Card.Actions style={{justifyContent: 'space-around', marginTop: 70}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Button

                      mode="contained"
                      style={styles.BtnTypeGray}>Go Back</Button>
                </TouchableOpacity><TouchableOpacity>
                <Button
                    mode="contained"
                    style={styles.BtnType}
                    onPress={() => this.passdata(receivedParams)}
                >Proceed</Button>
              </TouchableOpacity>
              </Card.Actions>

            </Card>


          </View>
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
  button: {backgroundColor: '#c1c1c1'},   //#26bf17
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