import React, {Component} from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity, View, Picker,
} from 'react-native';
import {
  Button,
  Card,
  TextInput,
} from 'react-native-paper';
let styles = require('../styles/GeneralStyles');

export default class GeneralDetails extends Component {

  state = {
    phone: '',
    name: '',
    id: '',
    Age: '', Gender: 'Female'
  };

  handleChange = key => val => {
    this.setState({
      [key]: val
    })
  };

  checkContent() {
    console.log("check content called")
    if (this.state.name === '') {
      Alert.alert('Please enter the Name of patient')

    } else if (this.state.phone === '') {
      Alert.alert('Please enter the Phone Number of patient')

    } else if (this.state.id === '') {
      Alert.alert('Please enter the Patient ID of patient')

    } else if (this.state.age === '') {
      Alert.alert('Please enter the age of patient')

    } else if (this.state.phone.length > 10 || this.state.phone.length < 10) {
      Alert.alert("Wrong Phone Number")

    } else if (this.state.age > 150) {
      Alert.alert('Please check the age of patient')

    } else {
      this.props.navigation.navigate("spDetails", {
        Name: this.state.name,
        Age: this.state.Age,
        Patientid: this.state.id,
        Gender: this.state.Gender,
        phone: this.state.phone
      })
    }
  }



  render() {
    return (
        <View style={{flex: 1}}>
          <View style={styles.container2}>
            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTextStyle}>General Details,</Text>
              <Text style={styles.overlayTextStyle2}>Enter the general Details Of your Patient.</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <Card.Content>
                <TextInput

                    value={this.state.name}
                    onChangeText={this.handleChange('name')}
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
                    style={{padding: 10}}
                    theme={{
                      colors: {
                        background: '#fff'
                      }
                    }}
                    focused
                    clear
                    label="Phone Number"
                    value={this.state.phone}
                    onChangeText={this.handleChange('phone')}
                    keyboardType='number-pad'
                />
                <TextInput

                    value={this.state.id}
                    onChangeText={this.handleChange('id')}
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
                <TextInput
                    value={this.state.Age}
                    onChangeText={this.handleChange('Age')}
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
                <View style={{padding: 8}}>
                  <View
                      style={{padding: 0, borderRadius: 8, borderWidth: 0, borderColor: '#bdc3c7', overflow: 'hidden'}}>
                    <Picker
                        style={{backgroundColor: 'blue', color: 'white'}}
                        itemStyle={{
                          padding: 10,
                          borderRadius: 4,
                          borderWidth: 0,
                          borderColor: 'none',
                          backgroundColor: 'white'
                        }}

                        label="Sex"
                        mode="dropdown"
                        selectedValue={this.state.Gender}
                        onValueChange={(itemValue, itemIndex) => this.setState({Gender: itemValue})}>
                      <Picker.Item label="Male" value="Male"/>
                      <Picker.Item label="Female" value="Female"/>
                      <Picker.Item label="Others" value="Others"/>
                    </Picker>
                  </View>
                </View>
              </Card.Content>
              <Card.Actions style={{justifyContent: 'space-around'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("home")}>
                  <Button
                      mode="contained"
                      style={styles.BtnTypeGray}>Go Back</Button>
                </TouchableOpacity><TouchableOpacity>
                <Button
                    mode="contained"
                    style={styles.BtnType}
                    onPress={() => this.checkContent()
                    }
                >Proceed</Button>
              </TouchableOpacity>
              </Card.Actions>
            </Card>
          </View>
        </View>
    );
  }
}
