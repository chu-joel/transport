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
import { Colors } from './src/styles/constants';
import { HomePage } from './src/pages/homeParent';


export default function App() {
  return (
      <MyStack></MyStack>
  );
}




const Tab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <NavigationContainer options={{
      headerShown: false,
    }} theme= { mainTheme }>
      <Tab.Navigator
      
      screenOptions={{
        tabBarInactiveBackgroundColor: `${Colors.Grey100}`,
        tabBarActiveBackgroundColor:`${Colors.Grey100}`,
        tabBarActiveTintColor: `${Colors.Blue100}`,
        tabBarInactiveTintColor: `${Colors.White100}`,
        
      }}
        >
        <Tab.Screen options={{headerShown: false}} name="Home"component={HomePage}/>
        <Tab.Screen options={{headerShown: false}}  name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

