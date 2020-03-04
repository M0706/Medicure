import React,{Component} from 'react';
import { StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  View, AsyncStorage } from 'react-native';
  import { Avatar, IconButton, Card, Title, Paragraph, TextInput, Colors } from 'react-native-paper';
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
    <Card style={{elevation: 8}}>
    <Card.Title title="Login" titleStyle={{ textDecorationColor: 'yellow',paddingLeft: 20,paddingTop: 10}}/>

    <Card.Content>
    <TextInput
    label='Phone'
    clear
    value={this.state.phone}
        onChangeText={this.handlechange('phone')}
        keyboardType='number-pad'
    mode="outlined"
    icon="camera"
    style={{padding: 10}}
    theme={{
         colors: {
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
    style={{backgroundColor: "red",borderRadius:30,height: 60,width:60 ,marginBottom:  -35,alignItems: 'center',justifyContent: 'center'}}/>
</TouchableOpacity>



    </Card.Actions>
  </Card>


    </View>
  );
}
}

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

  }
});
