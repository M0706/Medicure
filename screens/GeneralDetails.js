import React, {Component} from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity, View, AsyncStorage, Image
} from 'react-native';
import {Button, Card, Title, Paragraph, TextInput, Colors, IconButton,Provider,Menu,Divider,RadioButton} from 'react-native-paper';



export default class GeneralDetails extends Component {

  state = {
    phone: '',
    name: '',
    id: '',value: 'F',
  }

  handlechange = key => val => {
    this.setState({
      [key]: val
    })
  }



  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });
  render() {
    return (
        <View style={{flex: 1}}>

          <View style={styles.container2}>

            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTextStyle}>General Details,</Text>
              <Text style={styles.overlayTextStyle2}>Enter the  general Details Of your Patient.</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <Card.Content>
                <TextInput

                    value={this.state.name}
                    onChangeText={this.handlechange('name')}
                    mode="outlined"
                    style={{padding: 10}}
                    theme={{
                      colors: {
                        background: '#fff'
                      }
                    }}
                    focused
                    clear
                    label="Name"
                />
                <TextInput
                    mode="outlined"
                    style={{padding: 10 }}
                    theme={{
                      colors: {
                        background: '#fff'
                      }
                    }}
                    focused
                    clear
                    label="Phone Number"
                    value={this.state.phone}
                    onChangeText={this.handlechange('phone')}
                    keyboardType='number-pad'

                />
                <TextInput

                    value={this.state.id}
                    onChangeText={this.handlechange('id')}
                    mode="outlined"
                    style={{padding: 10}}
                    theme={{
                      colors: {
                        background: '#fff'
                      }
                    }}
                    focused
                    clear
                    label="Patient ID"
                />
                <RadioButton.Group
                    onValueChange={value => this.setState({ value })}
                    value={this.state.value}
                    style={{flexDirection:'row'}}
                >
                  <RadioButton.Item label="Male" value="M" />
                  <RadioButton.Item label="Female" value="F" />
                </RadioButton.Group>
                <TextInput

                    value={this.state.id}
                    onChangeText={this.handlechange('id')}
                    mode="outlined"
                    style={{padding: 10}}
                    theme={{
                      colors: {
                        background: '#fff'
                      }
                    }}
                    focused
                    clear

                    keyboardType='number-pad'
                    label="Age"
                />
              </Card.Content>
              <Card.Actions style={{justifyContent: 'space-around'}}>
                <TouchableOpacity  onPress={() => this.props.navigation.goBack()}  >
                  <Button

                      mode="contained"
                      style={styles.BtnTypeGray}>Go Back</Button>
                </TouchableOpacity><TouchableOpacity  >
                  <Button
                      mode="contained"
                      style={styles.BtnType}>Proceed</Button>
                </TouchableOpacity>
              </Card.Actions>

            </Card>


          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  BtnType: {backgroundColor:'blue',padding:8,borderRadius:10
  },BtnTypeGray: {
    padding:8,
    backgroundColor:'gray',borderRadius:10
  },

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