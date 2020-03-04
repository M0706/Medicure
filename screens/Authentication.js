import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthContext = React.createContext();

function splashScreen(){
    return(
        <View>
            <Text>Loading</Text>
        </View>
        
    )
}


const Stack = createStackNavigator();