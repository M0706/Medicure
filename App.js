import React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/login'
import SignUp from "./screens/signup";
import Aux from './hoc/Aux'
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer content</Text>
    </View>
  );
}

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Login/>
//     </View>
//   );
// }
const Stack = createStackNavigator();
export default function App(){
  return (
    <Aux>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUp" component={SignUp}/>
      </Stack.Navigator>

    </NavigationContainer>
    </Aux>
  );
};