import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitScreen } from './src/pages/transit';
import { HomeScreen } from './src/pages/home';


export default function App() {
  return (
      <MyStack></MyStack>
  );
}




const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Transit" component={TransitScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

