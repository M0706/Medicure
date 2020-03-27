import React, {Component} from 'react';
import {
  Alert,
  Text,
  TouchableOpacity, View, Picker
} from 'react-native';
let styles = require('../styles/GeneralStyles');
import {
  Button,
  Card,
  TextInput
} from 'react-native-paper';

let receivedParams = '';

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
      this.props.navigation.navigate("biopsy", data)
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
