import React from 'react';
//import { connect } from 'redux';
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
            emailid: '',
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
        const { emailid, password } = this.state;
        if (emailid && password) {
            this.props.login(emailid, password);
        }
    }

    CheckTextInput = () => {
      if(this.state.emailid !=''){
        if(this.state.password != ''){
          alert('Success')
        }
        else{
          alert('Please enter password')
        }
        }else{
          alert('Please enter emailid')
        }
      }
  

    render(){
      const { loggingIn } = this.props;
      const { emailid, password, submitted } = this.state;
        return (
          <View style={styles.container}>
          <Card style={{elevation: 8}}>
          <Card.Title title="Login" titleStyle={{ textDecorationColor: 'yellow',paddingLeft: 20,paddingTop: 10}}/>

    <Card.Content>
    <TextInput styles={styles.TextInput}
      label='Phone'
      clear
      value={this.state.phone}
      onChangeText={this.handlechange('phone')}
      keyboardType='number-pad'
      mode="outlined"
      icon="camera"
      theme={{
         colors: {
                     background: '#fff'
            }
            }}
      />
    <TextInput  styles={styles.TextInput}
      label='Password'
      focused
      clear
      value={this.state.name}
         onChangeText={this.handlechange('name')}
      mode="outlined"
      theme={{
         colors: {
                     background: '#fff'
            }
      }}

    />
    </Card.Content>

    <Card.Actions style={{justifyContent: 'center'}}>
    <TouchableOpacity onPress={this.submit}>
    <IconButton
    icon="arrow-right"
    size={30}
    color="white"
    onPress={this.CheckTextInput}
    style={{backgroundColor: "red",borderRadius:30,height: 60,width:60 ,marginBottom:  -35,alignItems: 'center',justifyContent: 'center'}}/>
</TouchableOpacity>
</Card.Actions>
  </Card>
</View>
  );
}
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export default LoginPage ;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'center',
    marginTop: -100
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

  },
  TextInput:{
    padding:10
  }
});