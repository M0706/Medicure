import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './screens/login';
import SignUp from "./screens/signup";
import Aux from './hoc/Aux'
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import Home from "./screens/home";
import GeneralDetails from "./screens/GeneralDetails";
import SpecialDetails from "./screens/SpecialDetails"
import Analysis from "./screens/Analysis";
import Biopsy from "./screens/Biopsy1";


//import firebase from 'firebase'

// var firebaseConfig = {
//     apiKey: "AIzaSyAHmHo1BmSp8jSwwnkrQdJKpqtuN2-xieE",
//     authDomain: "medico-879bc.firebaseapp.com",
//     databaseURL: "https://medico-879bc.firebaseio.com",
//     projectId: "medico-879bc",
//     storageBucket: "medico-879bc.appspot.com",
//     messagingSenderId: "322629357920",
//     appId: "1:322629357920:web:4c031ec36f355771d88e05",
//     measurementId: "G-LJWEHDDR8M"
//   };
// firebase.initializeApp(firebaseConfig);


// function DrawerContent() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Drawer content</Text>
//     </View>
//   );
// }

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Login/>
//     </View>
//   );
// }
const Stack = createStackNavigator();
export default function App() {
  return (
      <Aux>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="signUp" component={SignUp}/>
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="genDetails" component={GeneralDetails}/>
            <Stack.Screen name="spDetails" component={SpecialDetails}/>
            <Stack.Screen name="biopsy" component={Biopsy}/>
            <Stack.Screen name="analysis" component={Analysis}/>

          </Stack.Navigator>
        </NavigationContainer>
      </Aux>
  );
};