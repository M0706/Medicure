import React, {Component} from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity, View, AsyncStorage, Image, Picker
} from 'react-native';

import {Button, Card, Title, Paragraph, TextInput, Colors, IconButton,Provider,Menu,Divider,RadioButton} from 'react-native-paper';

let data = ''

export default class SpecialDetails extends Component {

  state = {
    gene: '',
    locus: '',
    VAF: '',
    classification:'',
    Bioclassify: '',value: '',
  }



  handlechange = key => val => {
    this.setState({
      [key]: val
    })
  }


passdata(data){
  data={...data, ...this.state}
  console.log(JSON.stringify({data})) 
  this.props.navigation.navigate("analysis")
}

  render() {
    data={ ...this.props.route.params}
    return (
        <View style={{flex: 1}}>

          <View style={styles.container2}>

            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTextStyle}>Special Details,</Text>
              <Text style={styles.overlayTextStyle2}>Enter the special Details Of your Patient.</Text>
          
              { console.log(JSON.stringify({data})) }
            </View>
          </View>
          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <Card.Content>
                <TextInput

                    value={this.state.locus}
                    onChangeText={this.handlechange('locus')}
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
                <View style={{padding:8}}>
                  <View style={{padding:0,borderRadius:8,borderWidth: 0, borderColor: '#bdc3c7', overflow: 'hidden'}}>
                    <Picker
                        style={{backgroundColor:'blue',color:'white'}}
                        itemStyle={{padding:10,borderRadius:4,borderWidth:0,borderColor:'none',backgroundColor:'white'}}

                        label="Gene"
                        mode="dropdown"
                        selectedValue={this.state.gene}
                        onValueChange={(itemValue, itemIndex) => this.setState({Gender: itemValue})} >

                      <Picker.Item label="Gene 1" value="1" />
                      <Picker.Item label="Gene 2" value="2" />
                      <Picker.Item label="Gene 3" value="3" />


                    </Picker>
                  </View>

                </View>
                <TextInput

                    value={this.state.VAF}
                    onChangeText={this.handlechange('VAF')}
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
                <View style={{padding:8}}>
                  <View style={{padding:0,borderRadius:8,borderWidth: 0, borderColor: '#bdc3c7', overflow: 'hidden'}}>
                    <Picker
                        style={{backgroundColor:'blue',color:'white'}}
                        itemStyle={{padding:10,borderRadius:4,borderWidth:0,borderColor:'none',backgroundColor:'white'}}

                        label="classifiaction"
                        mode="dropdown"
                        selectedValue={this.state.classification}
                        onValueChange={(itemValue, itemIndex) => this.setState({classification: itemValue})} >

                      <Picker.Item label="Classification 1" value="1" />
                      <Picker.Item label="Classification 2" value="2" />
                      <Picker.Item label="Classification 3" value="3" />


                    </Picker>
                  </View>

                </View>
                <TextInput

                    value={this.state.Bioclassify}
                    onChangeText={this.handlechange('Bioclassify')}
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
                
            
              </Card.Content>
              <Card.Actions style={{justifyContent: 'space-around'}}>
                <TouchableOpacity  onPress={() => this.props.navigation.goBack()}  >
                  <Button

                      mode="contained"
                      style={styles.BtnTypeGray}>Go Back</Button>
                </TouchableOpacity><TouchableOpacity  >
                  <Button
                      mode="contained"
                      style={styles.BtnType}
                      onPress={() => { this.passdata(data) }}
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