import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginPage from './screens/Loginpage/loginpage'
import Aux from './hoc/Aux'

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

export default function App(){
  return (
    <Aux>
    <NavigationContainer>
          <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={LoginPage} />
    </Drawer.Navigator>
    </NavigationContainer>
    </Aux>
  );
};