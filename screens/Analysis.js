import React, {Component} from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity, View,Picker, AsyncStorage, Image
} from 'react-native';
import {Button, Card,Title, Paragraph, TextInput, Colors, IconButton,Provider,Menu,Divider,RadioButton} from 'react-native-paper';


export default class Analysis extends Component {





  render() {

    return (


        <View style={{flex: 1}}>

          <View style={styles.container2}>

            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTextStyle}>Analysis</Text>
              <Text style={styles.overlayTextStyle2}>This is the analysis of the patient based on the details that you entered.</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <Card.Title title="Mr. Soham Sonawane" titleStyle={{fontWeight:'bold'}}/>
              <Card.Title title="+91 6377 954 885" titleStyle={{fontSize: 16}}/>

              <Card.Content>
              <Text>
                Diagnosed With - Breast Cancer
              </Text>
              <Text>
                Analysis of following of CCND1:
              </Text>
                <Text>{'\u2022'}  ESR1</Text>
                <Text>{'\u2022'}  PTEN</Text>
                <Text>{'\u2022'}  CNV</Text>
              </Card.Content>
              <Card.Actions style={{justifyContent: 'space-around',marginTop: 120,marginBottom:20}}>
                <TouchableOpacity  onPress={() => this.props.navigation.goBack()}  >
                  <Button

                      mode="contained"
                      style={styles.BtnTypeGray}>Go Back</Button>
                </TouchableOpacity><TouchableOpacity  >
                <Button
                    mode="contained"
                    style={styles.BtnType}
                    onPress={()=>this.props.navigation.navigate("spDetails")}
                >Generate Plan</Button>
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