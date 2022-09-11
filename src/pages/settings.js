import { Text, View, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../styles/styles";
import { SaveSettings } from "../context/context";
import { SettingStyles } from "../components/settings.styles";
import { TextStyles } from "../styles/typography";
import { getSettings } from "../context/context";
import Modal from "react-native-modal";
import { ModalStyles } from "../components/modal.styles";

/**
 * Settings screen
 * is responsible for setting user settings including:
 * - Alert Method
 * - Distance to alert
 * @param {*} param0
 * @returns
 */
export const SettingsScreen = ({ navigation, route }) => {
  const [distance, setDistance] = useState();
  const [alertMode, setAlertMode] = useState();
  const [number, onChangeNumber] = useState(distance);
  const [vibrate, setVibrate] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getSettings().then((result) => {
      setDistance(result.distance);
      setAlertMode(result.alertMode);
      onChangeNumber(result.distance);
      setVibrate(result.alertMode == "vibrate" ? true : false);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSaving(false);
    }, 400);
  });

  return (
    <View style={styles.PageContainer}>
      {/* Modal to display to user when retrieving data */}
      <Modal animationType={"fade"} isVisible={loading}>
        <View style={ModalStyles.LoadingModal}>
          <Text style={TextStyles.title}>Retrieving Settings...</Text>
          <Text style={TextStyles.h2}>Please Wait</Text>
        </View>
      </Modal>
      {/* Modal to display to user when saving changes */}
      <Modal animationType={"fade"} isVisible={saving}>
        <View style={ModalStyles.LoadingModal}>
          <Text style={TextStyles.title}>Saving Changes...</Text>
          <Text style={TextStyles.h2}>Please Wait</Text>
        </View>
      </Modal>
      <View style={styles.headerContainer}>
        <Text style={TextStyles.header}>Settings</Text>
      </View>
      {/* Alert mode setting */}
      <View style={SettingStyles.SettingsContainer}>
        <View style={SettingStyles.SettingHeaderContainers}>
          <Text style={TextStyles.h1}>Alert Method</Text>
        </View>
        <View style={SettingStyles.AlertSelectionContainer}>
          <TouchableOpacity
            style={[
              SettingStyles.selectedSettingContainer,
              vibrate ? SettingStyles.selectedAlertMethod : "",
            ]}
            onPress={() => {
              !vibrate ? setVibrate(true) : "";
            }}
          >
            <Text style={TextStyles.h2}>Vibrate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              SettingStyles.selectedSettingContainer,
              !vibrate ? SettingStyles.selectedAlertMethod : "",
            ]}
            onPress={() => {
              vibrate ? setVibrate(false) : "";
            }}
          >
            <Text style={TextStyles.h2}>Sound</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Distance setting */}
      <View style={SettingStyles.SettingsContainer}>
        <View style={SettingStyles.SettingHeaderContainers}>
          <Text style={TextStyles.h1}>Distance to alert</Text>
        </View>
        <View style={SettingStyles.DistanceContainer}>
          <View style={SettingStyles.selectedSettingContainer}>
            <TextInput
              style={TextStyles.h2}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
            >
              {number}
            </TextInput>
          </View>
          <View style={SettingStyles.DistanceMeasurementContainer}>
            <Text style={TextStyles.h2}>Km</Text>
          </View>
        </View>
      </View>
      {/* Save Button */}
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            setDistance(number);
            vibrate ? setAlertMode("vibrate") : setAlertMode("sound");
            setSaving(true);
            SaveSettings(number, alertMode);
          }}
          style={styles.StopButtonContainer}
        >
          <Text style={TextStyles.h2}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
