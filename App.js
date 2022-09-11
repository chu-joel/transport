import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { mainTheme } from "./src/styles/styles";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingsScreen } from "./src/pages/settings";
import { Colors } from "./src/styles/constants";
import { HomePage } from "./src/navigation/navigation";
import { Image } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

export default function App() {
  return <MyStack></MyStack>;
}

const Tab = createBottomTabNavigator();

/**
 * App is made with a nagivation tab navigation which gives the user the ability
 * to switch between the current active transit tab and the settings tab
 * @returns
 */
const MyStack = () => {
  return (
    <NavigationContainer
      options={{
        headerShown: false,
      }}
      theme={mainTheme}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveBackgroundColor: `${Colors.Grey100}`,
          tabBarActiveBackgroundColor: `${Colors.Grey90}`,
          tabBarActiveTintColor: `${Colors.Blue100}`,
          tabBarInactiveTintColor: `${Colors.White100}`,
          tabBarStyle: { borderTopWidth: 0, height: 55 },
        }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            unmountOnBlur: false,
            tabBarIcon: () => (
              <Image
                source={require("./assets/bus.png")}
                style={{
                  width: 50,
                  height: 50,
                  // tintColor: { focused } ? Colors.Blue100 : "",
                }}
              />
            ),
          }}
          name="Transit"
          component={HomePage}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            unmountOnBlur: false,
            tabBarIcon: () => (
              <Image
                source={require("./assets/cog.png")}
                style={{ width: 35, height: 35 }}
              />
            ),
          }}
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
