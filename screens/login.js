import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View, AsyncStorage
} from 'react-native';
import {Avatar, IconButton, Card, Title, Paragraph, TextInput, Colors} from 'react-native-paper';
import 'react-native-gesture-handler';
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
            await AsyncStorage.setItem("userphone", JSON.stringify(this.state.phone))

    }

    render() {
        return (
            <View style={styles.container}>
                <Card style={{elevation: 8}}>
                    <Card.Title title="Login"
                                titleStyle={{textDecorationColor: 'yellow', paddingLeft: 20, paddingTop: 10}}/>

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
                        <TouchableOpacity>
                            <View style={{justifyContent: 'flex-end',color: 'red'}}>
                                <Text onPress={() => this.props.navigation.navigate("signUp")} style={{justifyContent: 'flex-end',color: '#8334eb', paddingLeft: 20,paddingBottom:4}}>
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
                                style={{
                                    backgroundColor: "#8334eb",
                                    borderRadius: 30,
                                    height: 60,
                                    width: 60,
                                    marginBottom: -35,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}/>
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
    input: {
        padding: 10,
        borderWidth: 1,
        width: '90%',
        marginBottom: 10

    },
    BtnType: {
        color: 'darkblue',
        fontSize: 20

    }
});
