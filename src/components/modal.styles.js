import { StyleSheet } from "react-native";
import { Colors } from "../styles/constants";
import { ShapeDefaults } from "../styles/constants";

/**
 * Stylesheet shared between modals
 */
export const ModalStyles = StyleSheet.create({
  modalContainer: {
    margin: 20,
    backgroundColor: Colors.Grey80,
    borderRadius: ShapeDefaults.borderRadius,
    paddingTop: 20,
    alignItems: "center",
    shadowColor: Colors.Black100,
  },

  LoadingModal: {
    margin: 20,
    paddingVertical: 80,
    backgroundColor: Colors.Grey80,
    borderRadius: ShapeDefaults.borderRadius,
    alignItems: "center",
    shadowColor: Colors.Black100,
  },
});
