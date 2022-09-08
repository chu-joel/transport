import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitScreen } from './src/pages/transit';
import { HomeScreen } from './src/pages/home';
import { mainTheme } from './src/styles/styles';
import { MyTabs } from './src/navigation/navigation';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from './src/pages/settings';


export default function App() {
  return (
      <MyStack></MyStack>
  );
}




const Tab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <NavigationContainer theme= { mainTheme }>
      <Tab.Navigator >
        {/* <Tab.Screen name="MyTabs"component={MyTabs} options={{ headerShown: false }}/> */}
        <Tab.Screen name="Home"component={HomeScreen}/>
        <Tab.Screen name="Transit" component={TransitScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

