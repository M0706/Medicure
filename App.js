import React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
<<<<<<< HEAD
import LoginPage from './screens/Loginpage/loginpage'
=======
import Login from './screens/login'
import SignUp from "./screens/signup";
>>>>>>> df71761ca9bb2fbf15aa853ebd8a281ef6afb8c4
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
<<<<<<< HEAD
          <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={LoginPage} />
    </Drawer.Navigator>
=======
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUp" component={SignUp}/>
      </Stack.Navigator>

>>>>>>> df71761ca9bb2fbf15aa853ebd8a281ef6afb8c4
    </NavigationContainer>
    </Aux>
  );
};