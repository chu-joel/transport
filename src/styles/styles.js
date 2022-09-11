import { StyleSheet } from "react-native";
import { DefaultTheme } from "@react-navigation/native";
import { Colors } from "./constants";
import { ShapeDefaults } from "./constants";

/**
 * Stylesheet for shared components and general components
 */
export const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    backgroundColor: Colors.Grey100,
    paddingVertical: 20,
    paddingbottom: 30,
  },

  StartButtonContainer: {
    backgroundColor: Colors.Blue100,
    width: 200,
    paddingVertical: 10,
    borderRadius: ShapeDefaults.borderRadius,
    alignItems: "center",
    justifyContent: "center",
  },

  StopButtonContainer: {
    backgroundColor: Colors.Red100,
    width: 200,
    paddingVertical: 10,
    borderRadius: ShapeDefaults.borderRadius,
    alignItems: "center",
    justifyContent: "center",
  },

  ButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  PageContainer: {
    backgroundColor: Colors.Grey100,
    paddingTop: 30,
    alignItems: "center",
  },
});

// Main theme
export const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.Grey100,
    color: Colors.White100,
  },
};
