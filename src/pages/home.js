import { TouchableOpacity, View, Text } from "react-native";
import * as React from "react";
import { styles } from "../styles/styles";
import MapView from "react-native-maps";
import { DEFAULTLONGLAT } from "../styles/constants";
import { Marker, Circle } from "react-native-maps";
import { useState } from "react";
import { TextStyles } from "../styles/typography";
import { MapStyles } from "../components/map.styles";

/**
 * Page for home screen.
 * Home screen displays map and allows user to interact with it
 * @param {*} param0
 * @returns
 */
export const HomeScreen = ({ navigation }) => {
  const [pin, setPin] = useState({
    latitude: -41.293189,
    longitude: 174.7779695,
  });

  return (
    <View style={styles.PageContainer}>
      <View style={styles.headerContainer}>
        <Text style={TextStyles.header}>Select your destination</Text>
      </View>
      {/* Map to select destination */}
      <View style={styles.MapContainer}>
        <MapView style={MapStyles.HomeMap} initialRegion={DEFAULTLONGLAT}>
          <Marker
            draggable={true}
            coordinate={pin}
            onDragEnd={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          />
          <Circle center={pin} radius={200} />
        </MapView>
      </View>
      {/* Button to sumbit destination */}
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("In Transit", {
              latitude: pin.latitude,
              longitude: pin.longitude,
            })
          }
          style={styles.StartButtonContainer}
        >
          <Text style={TextStyles.h2}>START JOURNEY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
