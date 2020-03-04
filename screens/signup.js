import React, {Component} from 'react';
import {
    StyleSheet,
    Alert,
    Text,
    TouchableOpacity, View, AsyncStorage
} from 'react-native';
import {Button, Card, Title, Paragraph, TextInput, Colors} from 'react-native-paper';


export default class SignUp extends Component {

    state = {
        phone: '',
        name: '',
        password: ''
    }

    handlechange = key => val => {
        this.setState({
            [key]: val
        })
    }

    submit = async () => {
        if (this.state.phone.length < 10 || this.state.phone.length > 10) {
            Alert.alert("Error", "Wrong phone Number")
        } else if (this.state.name.length < 3) {
            Alert.alert("Error", "Wrong name")
        } else if (this.state.name.match(/\d+/g) != null) //checks wheather name contains numbers
        {
            Alert.alert("Error", "Wrong name")

        } else {
            //save user data
            //alert(this.state.phone + '\n' + this.state.name)
            await AsyncStorage.setItem("userphone", JSON.stringify(this.state.phone))
        }
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
                            label="Phone Number"
                            value={this.state.phone}
                            onChangeText={this.handlechange('phone')}
                            keyboardType='number-pad'

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
                                style={styles.BtnType}>Enter</Button>
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
