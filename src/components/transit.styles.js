import { Colors, ShapeDefaults } from "../styles/constants";
import { StyleSheet } from "react-native";

/**
 * Stylesheet for components in the transit screen
 */
export const TransitStyles = StyleSheet.create({
  InfoContainer: {
    backgroundColor: Colors.Grey80,
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: ShapeDefaults.borderRadius,
    alignItems: "center",
  },

  InfoLabelContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  TextContainer: {
    paddingVertical: 20,
    textAlign: "center",
  },

  DistanceAlertContainer: {
    backgroundColor: Colors.Grey90,
    marginTop: 30,
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },

  SideBySideButtons: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    justifyContent: "space-between",
  },
});
