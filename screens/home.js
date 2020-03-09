import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList, Image, TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import {Card, FAB, TextInput} from "react-native-paper";

const DATA = [
  {
    title: 'Patients',
    data: [{name: "Soham Sonawane", number: "6377954885", diag: "brain cancer", id: "1"}, {
      name: "Soham Sonawane",
      number: "6377954885",
      diag: "brain cancer",
      id: "1"
    }, {name: "Soham Sonawane", number: "6377954885", diag: "brain cancer", id: "1"}, {
      name: "Soham Sonawane",
      number: "6377954885",
      diag: "brain cancer",
      id: "1"
    },{name: "Soham Sonawane", number: "6377954885", diag: "brain cancer", id: "1"}, {
      name: "Soham Sonawane",
      number: "6377954885",
      diag: "brain cancer",
      id: "1"
    }, {name: "Soham Sonawane", number: "6377954885", diag: "brain cancer", id: "1"}, {
      name: "Soham Sonawane",
      number: "6377954885",
      diag: "brain cancer",
      id: "1"
    },{name: "Soham Sonawane", number: "6377954885", diag: "brain cancer", id: "1"}, {
      name: "Soham Sonawane",
      number: "6377954885",
      diag: "brain cancer",
      id: "1"
    }, {name: "Soham Sonawane", number: "6377954885", diag: "brain cancer", id: "1"}, {
      name: "Soham Sonawane",
      number: "6377954885",
      diag: "brain cancer",
      id: "1"
    },{name: "Soham Sonawane", number: "6377954885", diag: "brain cancer", id: "1"}, {
      name: "Soham Sonawane",
      number: "6377954885",
      diag: "brain cancer",
      id: "1"
    }, {name: "Soham Sonawane", number: "6377954885", diag: "brain cancer", id: "1"}, {
      name: "Soham Sonawane",
      number: "6377954885",
      diag: "brain cancer",
      id: "1"
    },{name: "Soham Sonawane", number: "6377954885", diag: "brain cancer", id: "1"}, {
      name: "Soham Sonawane",
      number: "6377954885",
      diag: "brain cancer",
      id: "1"
    }, {name: "Soham Sonawane", number: "6377954885", diag: "brain cancer", id: "1"}, {
      name: "Soham Sonawane",
      number: "6377954885",
      diag: "brain cancer",
      id: "1"
    },],

  },
];

function Item({title}) {
  return (
      <View style={styles.item}>
        <Card style={styles.card} >
          <Card.Title title={title.name}/>
          <Card.Content>
            <Text style={{color:'gray',fontSize:14}}>+91-{title.number}</Text>
            <Text style={{paddingTop:10,fontSize:14}}>Diagnosed with - {title.diag}</Text>
            {/*<Text style={{fontSize:18,alignContent:'flex-end',justifyContent:'flex-end'}}>Diagnosed with - {title.diag}</Text>*/}
          </Card.Content>
        </Card>
      </View>
  );
}

export default class Home extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <View style={styles.container2}>
            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTextStyle}>MY CLIENTS,</Text>
              <Text style={styles.overlayTextStyle2}>This is the list of your clients, Filter the list using the clients
                name or ID.</Text>
              <TextInput mode="outlined" focused label="search" style={{paddingTop: 20, width: "100%",position:'relative'}}
                         theme={{
                           colors: {
                             primary: '#207cd0',
                             background: '#fff'
                           }
                         }}>
              </TextInput>
            </View>
          </View>
          <View style={styles.container}>
            <SafeAreaView  >
              <SectionList
                  sections={DATA}

                  keyExtractor={(item, index) => item + index}
                  renderItem={({item}) => <Item title={item}/>}
              />
            </SafeAreaView>
          </View>
          <FAB
              style={styles.fab}
              icon="plus"
              onPress={() => this.props.navigation.navigate("genDetails")}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: '#fff',
    padding: 18,
    justifyContent: 'center',
    marginTop: 0
  }, card: {
    elevation: 4
  },
  container2: {
    flex: 4,
  },

  item: {
    backgroundColor: '#fff',
    padding:6

  },
  header: {
    fontSize: 32,
  },
  overlayStyle: {
    padding: 30,
    position:'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgb(6,55,159)'
  },

  overlayTextStyle: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
    color: "yellow"
  },

  overlayTextStyle2: {
    fontSize: 18,
    fontWeight: "100",
    color: "white"
  }, fab: {
    position: 'absolute',
    margin: 30,
    right: 0,
    backgroundColor:'blue',
    bottom: 20,
  },
  title: {
    fontSize: 24,
    elevation: 29
  },
});