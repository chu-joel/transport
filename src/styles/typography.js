import { StyleSheet } from "react-native";
import { Colors } from "./constants";

/**
 * Stylesheet for all text types
 * Contains size and colour of text
 */
export const TextStyles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: "#FFFFFF",
  },
  header: {
    fontSize: 30,
    color: Colors.White100,
  },

  h1: {
    fontSize: 24,
    color: Colors.White100,
  },
  h2: {
    fontSize: 18,
    color: Colors.White100,
  },
  transitNumeral: {
    fontSize: 25,
    color: Colors.White100,
  },
});
