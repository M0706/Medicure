import React, {Component} from 'react';
import {
    StyleSheet,
    Alert,
    Text,
    TouchableOpacity, View, AsyncStorage
} from 'react-native';
import {Button, Card, Title, Paragraph, TextInput, Colors} from 'react-native-paper';
import * as FireBaseAPI from '../Authentication/firebaseAPI'

export default class SignUp extends Component {

    state = {
        emailid: '',
        name: '',
        password: ''
    }

    handlechange = key => val => {
        this.setState({
            [key]: val
        })
    }

    submitdata=()=>{
        FireBaseAPI.createUser(this.state.emailid,this.state.password)
    }

  

    render() {
        return (
            <View style={styles.container}>
                <Card style={{elevation: 8}}>
                    <Card.Title title="Sign Up"
                                titleStyle={{textDecorationColor: 'yellow', paddingLeft: 20, paddingTop: 10}}/>
                    <Card.Content>
                        <TextInput
                            mode="outlined"
                            style={{padding: 10}}
                            theme={{
                                colors: {
                                    background: '#fff'
                                }
                            }}
                            focused
                            clear
                            label="Emailid"
                            value={this.state.emailid}
                            onChangeText={this.handlechange('emailid')}

                        />
                        <TextInput

                            value={this.state.name}
                            onChangeText={this.handlechange('name')}
                            mode="outlined"
                            style={{padding: 10}}
                            theme={{
                                colors: {
                                    background: '#fff'
                                }
                            }}
                            focused
                            clear
                            label="Name"
                        />
                        <TextInput
                            mode="outlined"
                            style={{padding: 10}}
                            theme={{
                                colors: {
                                    background: '#fff'
                                }
                            }}
                            focused
                            clear
                            label="Password"
                            placeholderTextColor="#9a73ef"
                            returnKeyType='go'
                            secureTextEntry
                            autoCorrect={false}
                        />
                    </Card.Content>
                    <Card.Actions style={{justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this.submit} style={{width: 160, padding: 10}}>
                            <Button
                                mode="contained"
                                style={styles.BtnType}
                                onPress={this.submitdata}>Enter</Button>
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
        marginTop: -80
    },
    input: {
        padding: 10,
        borderWidth: 1,
        width: '90%',
        marginBottom: 10

    },
    BtnType: {
        fontSize: 20,
        padding: 8

    }
});
