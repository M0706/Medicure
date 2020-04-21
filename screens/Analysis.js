import React, {Component} from 'react';
import * as SQLite from 'expo-sqlite';
import {
  Text,
  TouchableOpacity, View
} from 'react-native';
import {
  Button,
  Card,
} from 'react-native-paper';
let styles = require('../styles/GeneralStyles');
const db = SQLite.openDatabase('PatientDB');

export default class Analysis extends Component {
  writeDB(data) {
    //Dummy code just to check if table exists need to change this later
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM patient_table', [], (tx, results) => {
        console.log('Table exists');
        db.transaction(tx => {
          tx.executeSql(' INSERT INTO patient_table VALUES (?,?,?,?,?,?,?,?,?,?.?,?,?)', [data['Age'], data['Bioclassify'], data['Gender'], data['Name'], data['Patientid'], data['VAF'], data['classification'], data['gene'], data['locus'], data['phone'],data['pressedStatusER'],data['pressedStatusPR'],data['pressedStatusHer2']], (tx, results) => {
            console.log('Data entered')
          }, (tx, error) => {
            console.log(error)
          });
        });
      }, (tx, error) => {
        db.transaction(tx => {
          tx.executeSql('  CREATE TABLE patient_table (Age varchar(3),BioClassify varchar(100),Gender varchar(10),Name varchar(100),Id varchar(100),VAF varchar(100),Cl varchar(100),Gene varchar(100),Locus varchar(100),Phone varchar(10),ER varchar(10),PR varchar(10), HER2 varchar(10))\n', [], (tx, results) => {
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