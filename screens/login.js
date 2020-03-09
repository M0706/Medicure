import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View, AsyncStorage
} from 'react-native';
import {IconButton, Card, TextInput} from 'react-native-paper';
import 'react-native-gesture-handler';
import home from "./home";

export default class loginScreen extends Component {

  state = {
    phone: '',
    name: ''
  }

  handlechange = key => val => {
    this.setState({
      [key]: val
    })
  }
  submit = async () => {

    //save user data
    //alert(this.state.phone + '\n' + this.state.name)
    this.props.navigation.navigate("home");
    // await AsyncStorage.setItem("userphone", JSON.stringify(this.state.phone))

  }

  render() {
    return (
        <View style={{flex: 1}}>
          <View style={styles.container2}>
            <Image
                style={{
                  width: '100%',
                  height: '100%'
                }}
                source={{uri: 'https://resize.hswstatic.com/w_907/gif/becoming-doctor.jpg'}}
            />
            <View style={styles.overlayStyle}>
              <Text style={styles.overlayTextStyle}>Welcome
                back,</Text>
              <Text style={styles.overlayTextStyle2}>Log In to
                continue</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <Card.Title title="Login"
                          titleStyle={styles.cardTitleStyle}/>

              <Card.Content>
                <TextInput
                    label='Email'
                    clear
                    value={this.state.email}
                    onChangeText={this.handlechange('phone')}
                    mode="outlined"
                    icon="camera"
                    style={{padding: 10}}
                    theme={{
                      colors: {
                        primary: '#207cd0',
                        background: '#fff'
                      }
                    }}

                />
                <TextInput
                    label='Password'
                    focused
                    clear
                    value={this.state.name}
                    onChangeText={this.handlechange('name')}
                    mode="outlined"
                    style={{padding: 10}}
                    theme={{
                      colors: {
                        primary: '#207cd0',
                        background: '#fff'
                      }
                    }}

                />
                <TouchableOpacity>
                  <View style={styles.signUpTextView}>
                    <Text onPress={() => this.props.navigation.navigate("signUp")}
                          style={styles.signUpText}>
                      New User? Sign Up.
                    </Text>
                  </View>

                </TouchableOpacity>
              </Card.Content>

              <Card.Actions style={{justifyContent: 'center'}}>
                <TouchableOpacity onPress={this.submit}>
                  <IconButton
                      icon="arrow-right"
                      size={30}
                      color="white"
                      style={styles.IconButton}/>
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
    color: 'darkblue',
    fontSize: 20
  },

  cardStyle: {
    elevation: 8,
    marginTop: -270,
    borderRadius: 12,
    padding: 8
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
    padding: 18,
    justifyContent: 'center',
    marginTop: 0
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
    backgroundColor: 'rgba(36,92,208,0.6)'
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
