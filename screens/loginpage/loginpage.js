import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet,
    Alert, 
    Text,
    TouchableOpacity,
    TextInput, View, AsyncStorage } from 'react-native';

import { userActions } from '../../redux/_actions/user.actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlechange = key => val => {
        this.setState({
          [key]:val
        })
      }
      
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }
    render(){
        return (
          <View style={styles.container}>
            <TextInput
              placeholder="Phone Number"
              style={styles.input}
              value={this.state.phone}
              onChangeText={this.handlechange('phone')}
              keyboardType='number-pad'
              
              />
              <TextInput
              placeholder="Name"
              style={styles.input}
              value={this.state.name}
              onChangeText={this.handlechange('name')}
              />
              <TouchableOpacity onPress={this.submit}>
                <Text style={styles.BtnType}>Enter</Text>
              </TouchableOpacity>
           
          </View>
        );
      }
      }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      padding:10,
      borderWidth:1,
      width:'90%',
      marginBottom:10
  
    },
    BtnType:{
      color:'darkblue',
      fontSize:20
    
    }
  });
  