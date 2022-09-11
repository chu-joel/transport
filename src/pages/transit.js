import { TouchableOpacity, Text, View, Vibration } from "react-native";
import { styles } from "../styles/styles";
import MapView, { Polyline } from "react-native-maps";
import { Colors, DEFAULTLONGLAT } from "../styles/constants";
import { Marker, Circle } from "react-native-maps";
import React, { useEffect, useState } from "react";
import { Stopwatch } from "react-native-stopwatch-timer";
import * as Location from "expo-location";
import { getDistance } from "geolib";
import { useSharedSettingState } from "../context/context";
import { Audio } from "expo-av";
import Modal from "react-native-modal";
import { MapStyles } from "../components/map.styles";
import { TransitStyles } from "../components/transit.styles";
import { TextStyles } from "../styles/typography";
import { ModalStyles } from "../components/modal.styles";
import { ShapeDefaults } from "../styles/constants";

// Generic css used in css page
export const options = {
  container: {
    backgroundColor: Colors.Grey80,
    padding: 10,
    borderRadius: ShapeDefaults.borderRadius,
    width: 150,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
  },
};

/**
 * Transition screen tracks the user when they are in transit
 * Tracks:
 * -Duration
 * -DIstance from location
 *
 * This page also contains modals:
 * - Alert user
 * - Confirmation
 * - Loading
 * */

export const TransitScreen = ({ navigation, route }) => {
  const [location, setLocation] = useState({
    latitude: -41.293189,
    longitude: 174.7779695,
  });
  // States
  const [errorMsg, setErrorMsg] = useState(null);
  const [remaining, setRemaining] = useState("N/A");
  const [tripFinished, setTripFinished] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(true);
  const [time, setTime] = useState(0);
  const [modalText, setModalText] = useState("None");
  const [ringing, setRinging] = useState(false);
  const { distance } = useSharedSettingState();
  const { alertMode } = useSharedSettingState();
  const [sound, setSound] = useState();
  const [loading, setLoading] = useState(true);

  // Function to play sound if sound is selected
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require("../Avicii.mp3"));
    setSound(sound);

    await sound.playAsync();
  }

  // Close loading screen after 1 second loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
          sound.stopAsync();
        }
      : undefined;
  }, [sound]);

  const PATTERN = [3 * 1000, 2 * 1000, 1 * 1000];

  // Function to get the current location of the user and save the state
  const getLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      Location.setGoogleApiKey("AIzaSyBjVOnhjYP-1FgCghqtxqt7A6Hpd4LnGdg");

      let { coords } = await Location.getCurrentPositionAsync();
      setLocation({ latitude: coords.latitude, longitude: coords.longitude });
      setRemaining(
        parseFloat(
          getDistance(
            {
              latitude: route.params.latitude,
              longitude: route.params.longitude,
            },
            { latitude: coords.latitude, longitude: coords.longitude }
          ) / 1000
        ).toFixed(1)
      );
    })();
  };
  useEffect(() => {
    getLocation();
  }, []);

  // Get location of user every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (!tripFinished) {
        getLocation();
        setTime(time + 1);

        // Check if user is within radius
        if (
          parseFloat(remaining) < parseFloat(distance) &&
          remaining != "N/A" &&
          !ringing &&
          !modalVisible
        ) {
          // Check if set to vibrate
          if (alertMode == "vibrate") {
            Vibration.vibrate(PATTERN, true);
          } else {
            console.log("Ring now");
            playSound();
          }
          setRinging(true);
          setModalText("Your stop is approaching");
          setModalVisible(true);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <View style={styles.PageContainer}>
      {/* Loading Modal */}
      <Modal animationType={"fade"} isVisible={loading}>
        <View style={ModalStyles.LoadingModal}>
          <Text style={TextStyles.title}>Loading...</Text>
          <Text style={TextStyles.h2}>Please Wait</Text>
        </View>
        {/* Alert and confirmation Modal */}
      </Modal>
      <Modal
        animationType={"fade"}
        isVisible={modalVisible}
        backdropOpacity={0.8}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={ModalStyles.modalContainer}>
          <Text style={TextStyles.h1}>{modalText}</Text>
          {/* Show distance remaining in modal */}
          <View style={TransitStyles.DistanceAlertContainer}>
            <View>
              <Text style={[TextStyles.title, { fontWeight: "bold" }]}>
                {remaining}Km
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={TextStyles.h2}>Remaining</Text>
            </View>
          </View>
          {/* Back and finish button */}
          <View style={TransitStyles.SideBySideButtons}>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  Vibration.cancel();
                  setSound(false);
                }}
                style={[styles.StopButtonContainer, { width: 100 }]}
              >
                <Text style={TextStyles.h2}>BACK</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.ButtonContainer, { paddingleft: 10 }]}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setTripFinished(true);
                  Vibration.cancel();
                  setSound(false);
                  navigation.navigate("Trip Finished", { duration: time });
                }}
                style={[
                  styles.StartButtonContainer,
                  { marginLeft: 60, width: 100 },
                ]}
              >
                <Text style={TextStyles.h2}>FINISH</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.headerContainer}>
        <Text style={TextStyles.header}>In Transit</Text>
      </View>
      {/* Map showing the users current position */}
      <View style={MapStyles.MapContainer}>
        <MapView
          style={MapStyles.TransitMap}
          initialRegion={{
            latitude: route.params.latitude,
            longitude: route.params.longitude,
            latitudeDelta: DEFAULTLONGLAT.longitudeDelta,
            longitudeDelta: DEFAULTLONGLAT.latitudeDelta,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
          <Circle
            fillColor={Colors.Blue100}
            center={{
              latitude: route.params.latitude,
              longitude: route.params.longitude,
            }}
            radius={50}
          />
          <Polyline
            coordinates={[
              {
                latitude: route.params.latitude,
                longitude: route.params.longitude,
              },
              { latitude: location.latitude, longitude: location.longitude },
            ]}
            strokeColor="#000"
            strokeWidth={1}
          />
        </MapView>
      </View>
      <View style={TransitStyles.TextContainer}>
        <Text style={TextStyles.h1}>
          Set to {alertMode} within {distance} Km of destination
        </Text>
      </View>
      {/* Display Current Duration of trip */}
      <View style={TransitStyles.InfoContainer}>
        <Stopwatch secs start={isStopwatchStart} options={options} />
        <View style={TransitStyles.InfoLabelContainer}>
          <Text style={TextStyles.h2}>Duration</Text>
        </View>
      </View>
      <View style={{ height: 20 }} />
      {/* Display distance remaining */}
      <View style={TransitStyles.InfoContainer}>
        <View style={options.container}>
          <Text style={TextStyles.transitNumeral}>{remaining}Km</Text>
          <View style={styles.InfoLabelContainer}>
            <Text style={TextStyles.h2}>Remaining</Text>
          </View>
        </View>
      </View>
      {/* Button to stop transit */}
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            setModalText("Finish Trip?");
            setModalVisible(true);
          }}
          style={styles.StopButtonContainer}
        >
          <Text style={TextStyles.h2}>STOP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
