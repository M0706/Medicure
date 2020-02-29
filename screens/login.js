import React,{Component} from 'react';
import { StyleSheet,
  Alert, 
  Text,
  TouchableOpacity,
  TextInput, View, AsyncStorage } from 'react-native';

export default class loginScreen extends Component{

  state={
    phone:'',
    name:''
  }

  handlechange = key => val => {
    this.setState({
      [key]:val
    })
  }
  submit=async()=>{
    if(this.state.phone.length < 10){
      Alert.alert("Error","Wrong phone Number")
    }
    else if(this.state.name.length < 3){
      Alert.alert("Error","Wrong name")
    }else{
      //save user data
      //alert(this.state.phone + '\n' + this.state.name)
      await AsyncStorage.setItem("userphone",JSON.stringify(this.state.phone))
  }}

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
