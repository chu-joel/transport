import { Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, { useState } from "react";
import { styles, PageContainer } from '../styles/styles';
import { StyledTransitHeader } from '../components/transitScreen.styles';
import { HeadingContainer } from '../components/homeScreen.styles';
import { useSharedSettingState, SaveSettings } from '../context/context';
import { SettingStyles } from '../components/SettingsStyles';

export const SettingsScreen = ({ navigation, route }) => {
    
    const {distance, setDistance} = useSharedSettingState();
    const {alertMode, setAlertMode} = useSharedSettingState();
    const [number, onChangeNumber] = useState(distance);

    const [vibrate, setVibrate] = useState(alertMode == "vibrate" ? true:false)

    return (
            <PageContainer>
                <HeadingContainer>
                    <StyledTransitHeader>Settings</StyledTransitHeader>
                </HeadingContainer>
                <View style={SettingStyles.SettingsContainer}>
                    <View style={SettingStyles.SettingHeaderContainers}><Text style = {styles.h1}>Alert Method</Text></View>
                    <View style={SettingStyles.AlertSelectionContainer}>
                        <TouchableOpacity style={[SettingStyles.selectedSettingContainer, vibrate ? SettingStyles.selectedAlertMethod:""]}
                        onPress={() => {
                            !vibrate?setVibrate(true):""
                        }}>
                            <Text style = {styles.h2}>Vibrate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[SettingStyles.selectedSettingContainer, !vibrate ? SettingStyles.selectedAlertMethod:""]}
                        onPress={() => {
                            vibrate?setVibrate(false):""
                        }}>
                            <Text style = {styles.h2}>Sound</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={SettingStyles.SettingsContainer}>
                    <View style={SettingStyles.SettingHeaderContainers}>
                        <Text style = {styles.h1}>Distance to alert</Text>
                    </View>
                    <View style={SettingStyles.DistanceContainer}>
                        <View style={SettingStyles.selectedSettingContainer}>
                            <TextInput style = {styles.h2} 
                            keyboardType="numeric"
                            onChangeText={onChangeNumber}>{number}
                            </TextInput>
                        </View>
                        <View style={SettingStyles.DistanceMeasurementContainer}>
                            <Text style = {styles.h2}>Km</Text>
                        </View> 
                    </View>    
                </View>

                <View style={styles.ButtonContainer}>
                <TouchableOpacity onPress={() => {
                    setDistance(number);
                    vibrate? setAlertMode("vibrate") : setAlertMode("sound");
                    SaveSettings(number, alertMode);
                }}
                        style={styles.StopButtonContainer}>
                    <Text style={styles.h2}>SAVE</Text>
                </TouchableOpacity>
                </View> 
            </PageContainer>
        )
  };