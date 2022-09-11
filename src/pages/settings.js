import { Text, View, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../styles/styles";
import { useSharedSettingState, SaveSettings } from "../context/context";
import { SettingStyles } from "../components/settings.styles";
import { TextStyles } from "../styles/typography";
import { getSettings } from "../context/context";

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
  const [vibrate, setVibrate] = useState();

  useEffect(() => {
    getSettings().then((result) => {
      setDistance(result.distance);
      setAlertMode(result.alertMode);
      onChangeNumber(result.distance);
      setVibrate(result.alertMode == "vibrate" ? true : false);
    });
  }, []);

  return (
    <View style={styles.PageContainer}>
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
