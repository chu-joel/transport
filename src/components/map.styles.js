import { StyleSheet } from "react-native";
import { Colors } from "../styles/constants";
import { Dimensions } from "react-native";
import { ShapeDefaults } from "../styles/constants";

/**
 * Stylesheet containing styles associated with maps
 */
export const MapStyles = StyleSheet.create({
  MapContainer: {
    flexGrow: 1,
    backgroundColor: Colors.White100,
    borderradius: ShapeDefaults.borderRadius,
  },

  HomeMap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.7,
  },

  TransitMap: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.2,
  },
});
