import React, {Component} from 'react';
import * as SQLite from 'expo-sqlite';
import {
  StyleSheet,
  Text,
  TouchableOpacity, View
} from 'react-native';
import {
  Button,
  Card,
} from 'react-native-paper';

const db = SQLite.openDatabase('PatientDB');

export default class Analysis extends Component {
  writeDB(data) {
    //Dummy code just to check if table exists need to change this later
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM patient_table', [], (tx, results) => {
        console.log('Table exists');
        db.transaction(tx => {
          tx.executeSql(' INSERT INTO patient_table VALUES (?,?,?,?,?,?,?,?,?,?)', [data['Age'], data['Bioclassify'], data['Gender'], data['Name'], data['Patientid'], data['VAF'], data['classification'], data['gene'], data['locus'], data['phone']], (tx, results) => {
            console.log('Data entered')
          }, (tx, error) => {
            console.log(error)
          });
        });
      }, (tx, error) => {
        db.transaction(tx => {
          tx.executeSql('  CREATE TABLE patient_table (Age varchar(3),BioClassify varchar(100),Gender varchar(10),Name varchar(100),Id varchar(100),VAF varchar(100),Cl varchar(100),Gene varchar(100),Locus varchar(100),Phone varchar(10))\n', [], (tx, results) => {
            console.log('Table Created')
          }, (tx, error) => {
            console.log(error)
          });
        });
      });
    });

    this.props.navigation.navigate("home");

  }

  render() {
    let passedData = this.props.route.params;
    return (
        <View style={{flex: 1}}>
          <View style={styles.container2}>
            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTextStyle}>Analysis</Text>
              <Text style={styles.overlayTextStyle2}>This is the analysis of the patient based on the details that you
                entered.</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <Card.Title title={"Mr. " + passedData['Name']} titleStyle={{fontWeight: 'bold'}}/>
              <Card.Title title={"+91 " + passedData['phone']} titleStyle={{fontSize: 16}}/>
              <Card.Content>
                <Text>
                  Diagnosed With - Breast Cancer
                </Text>
                <Text>
                  Analysis of following of CCND1:
                </Text>
                <Text>{'\u2022'} ESR1</Text>
                <Text>{'\u2022'} PTEN</Text>
                <Text>{'\u2022'} CNV</Text>
              </Card.Content>
              <Card.Actions style={{justifyContent: 'space-around', marginTop: 120, marginBottom: 20}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Button
                      mode="contained"
                      style={styles.BtnTypeGray}>Go Back</Button>
                </TouchableOpacity><TouchableOpacity>
                <Button
                    mode="contained"
                    style={styles.BtnType}
                    onPress={() => this.writeDB(passedData)}
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