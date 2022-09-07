import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitScreen } from './src/pages/transit';
import { HomeScreen } from './src/pages/home';
import { mainTheme } from './src/styles/styles';
import { MyTabs } from './src/navigation/navigation';
import * as React from 'react';


export default function App() {
  return (
      <MyStack></MyStack>
  );
}




const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer theme= { mainTheme }>
      <Stack.Navigator >
        <Stack.Screen name="MyTabs"component={MyTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen"component={HomeScreen}/>
        <Stack.Screen name="Transit" component={TransitScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

