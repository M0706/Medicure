import React, {Component} from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity, View, Picker
} from 'react-native';

import {
  Button,
  Card,
  TextInput
} from 'react-native-paper';

let receivedParams = ''

export default class SpecialDetails extends Component {

  state = {
    gene: '1',
    locus: '',
    VAF: '',
    classification: '1',
    Bioclassify: '',
  };


  handleChange = key => val => {
    this.setState({
      [key]: val
    })
  };


  passData(data) {
    if (this.state.Bioclassify && this.state.locus && this.state.VAF) {
      data = {...data, ...this.state};
      this.props.navigation.navigate("analysis", data)
    } else {
      Alert.alert('Please fill in the fields')
    }

  }

  render() {
    receivedParams = this.props.route.params;
    return (
        <View style={{flex: 1}}>
          <View style={styles.container2}>
            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTextStyle}>Special Details,</Text>
              <Text style={styles.overlayTextStyle2}>Enter the special Details Of your Patient.</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <Card.Content>
                <TextInput
                    value={this.state.locus}
                    onChangeText={this.handleChange('locus')}
                    mode="outlined"
                    style={{padding: 10}}
                    theme={{
                      colors: {
                        background: '#fff'
                      }
                    }}
                    focused
                    clear
                    label="Locus"
                />
                <TextInput
                    value={this.state.Bioclassify}
                    onChangeText={this.handleChange('Bioclassify')}
                    mode="outlined"
                    style={{padding: 10}}
                    theme={{
                      colors: {
                        background: '#fff'
                      }
                    }}
                    focused
                    clear
                    label="Biological Classification"
                />
                <TextInput
                    value={this.state.VAF}
                    onChangeText={this.handleChange('VAF')}
                    mode="outlined"
                    style={{padding: 10}}
                    theme={{
                      colors: {
                        background: '#fff'
                      }
                    }}
                    focused
                    clear
                    label="Enter Mutation/VAF"
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
                        label="Gene"
                        mode="dropdown"
                        selectedValue={this.state.gene}
                        onValueChange={(itemValue, itemIndex) => this.setState({gene: itemValue})}>

                      <Picker.Item label="Gene 1" value="1"/>
                      <Picker.Item label="Gene 2" value="2"/>
                      <Picker.Item label="Gene 3" value="3"/>
                    </Picker>
                  </View>
                </View>
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

                        label="classifiaction"
                        mode="dropdown"
                        selectedValue={this.state.classification}
                        onValueChange={(itemValue, itemIndex) => this.setState({classification: itemValue})}>

                      <Picker.Item label="Classification 1" value="1"/>
                      <Picker.Item label="Classification 2" value="2"/>
                      <Picker.Item label="Classification 3" value="3"/>


                    </Picker>
                  </View>

                </View>
              </Card.Content>
              <Card.Actions style={{justifyContent: 'space-around'}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Button
                      mode="contained"
                      style={styles.BtnTypeGray}>Go Back</Button>
                </TouchableOpacity><TouchableOpacity>
                <Button
                    mode="contained"
                    style={styles.BtnType}
                    onPress={() => {
                      this.passData(receivedParams)
                    }}
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
    backgroundColor: 'gray', borderRadius: 10
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